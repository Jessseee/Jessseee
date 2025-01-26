---
title: Nationaal Archief
---

## Introduction
From September 2024 till January 2025 I did an internship at the _Nationaal Archief_ (NA). The NA is located in The Hague and serves as the national archives of the Netherlands. It was established in 1802 and preserves a vast array of historical documents, including those from the central government, various ministries, the province of South Holland, and the former County of Holland. The archive also houses materials from private institutions and individuals connected to Dutch political and social history. During my internship I focussed on computer vision tasks and Retrieval Augmented Generation (RAG) with Large Language Models (LLM). I was supervised by [Simon C. Kemper](https://www.linkedin.com/in/simon-kemper-94938251/), the data scientist at the Services department of the NA.

## Document Layout Analysis
My initial task for the internship was to improve the document layout analysis of the automated handwritten text generation software ([Laypa](https://github.com/knaw-huc/laypa)) the NA uses to transcribe scanned documents. The software currently detects text regions, but does not classify them. I was therefore tasked to train a machine learning model to detect and classify the different parts of handwritten documents. A small training dataset of roughly 2000 annotated images was prepared before the start of my internship. This dataset consists of document scans from the archive of the Dutch Ministry of Colonies (MoC), which managed the Netherlands' overseas territories from 1814 to 1952. I used these images and annotations to train a [YOLOv11](https://docs.ultralytics.com/models/yolo11/) object detection model to detect and classify document parts. This was somewhat successful, however the training dataset is very skewed, which means that the model is good at detecting paragraphs and marginalia, but cannot consistently detect less represented labels, such as headers and footers. I proposed to use this model to generate pre-annotations which can then be corrected and supplemented by volunteers to create a larger, more balanced training dataset.

::: div text-center
![YOLOv11 predictions](/images/projects/nationaal-archief/yolo-predictions.jpg)
Example of the YOLOv11 predictions on the MoC dataset.
:::

## Qanun
At the end of October the opportunity came up for me to join in the development of a proof of concept web application to showcase the possibilities of Retrieval Augmented Generation (RAG), Large Language Models (LLM) and Linked Open Data (LOD). This application, called Qanun, was developed by my internship supervisor Simon C. Kemper and expands on themes of the ["Wij Zijn Hier"](https://www.nationaalarchief.nl/beleven/nieuws/wij-zijn-hier-van-eerste-moslims-tot-minaret-vanaf-25-september-te-zien) exhibition of the _Moslim Archief_ at the NA. We further develop and presented the application during the annual [HackaLOD](https://netwerkdigitaalerfgoed.nl/hackalod) organised by _Netwerk Digitaal Erfgoed_, this is a hackathon event where teams compete for 24 hours to create an application using LOD implementations of cultural heritage datasets, check out this [news article](https://netwerkdigitaalerfgoed.nl/nieuws/hackalod-2024-een-nacht-vol-innovatie-met-erfgoeddata/) for more info on the event. We participated with a team of people from the [HAICu consortium](https://www.haicu.science), which is a collaboration of various organisations to further the development of AI applications for cultural heritage.

::: div text-center
![HackaLOD team](/images/projects/nationaal-archief/hackalod-team.png)
The HAICu team at the HackaLOD.
Left to right: Jesse Visser (me), [Andreas Weber](https://www.linkedin.com/in/andreas-weber-🟥-20a7a419), [Durlabh Shukla](https://www.linkedin.com/in/durlabh-shukla/), [Simon C. Kemper](https://www.linkedin.com/in/simon-kemper-94938251/), [Sjors Weggeman](https://www.linkedin.com/in/sjorsw/), and [Yahui Zhao](https://www.linkedin.com/in/yahui-zhao-b67b6922b/).
:::
