---
title: Smart Nestbox
url: https://purl.utwente.nl/essays/91875
---

## Introduction
For my Bachelor graduation project I worked on the detection of birds and their prey in nestbox video footage using computer vision. To investigate biodiversity, researchers have installed cameras in nestboxes to monitor the behaviour of birds and their young. Often these cameras are set up to record for extended amounts of time. The longer these recordings become the more time-consuming it becomes to filter and annotate the data.

## How it works
### Provisioning events
To speed up the process of annotating these videos I used computer vision techniques to filter the data for when the birds are actually in the nestbox feeding their young. To achieve this I trained and tested a number of image classification models on a dataset of frames from the sample videos. The training dataset was granted to me by doctoral researcher [Teresa M. Abaurrea](https://researchportal.helsinki.fi/en/persons/teresa-maria-abaurrea-fernandez-de-arcaya) at the University of Helsinki. These frames were annotated as either the bird being in the nestbox (**provisioning**) or the bird not being in the nestbox (**not-provisioning**).

::: div grid text-center
 ::: div col-12 col-md-6
 ![](/images/projects/smart-nestbox/provisioning.jpg)
 Frame labeled as **provisioning**
 :::
 ::: div col-12 col-md-6
 ![](/images/projects/smart-nestbox/not-provisioning.jpg)
 Frame labeled as **not-provisioning**
 :::
:::

The trained image classification model can then be used to filter the videos based on if frames are classified as the bird provisioning. Any frames where the bird is not present can then be discarded. This way when annotating these videos researchers only have to look at relevant parts of the videos and do not have to sit through hours of footage of empty nestboxes just to find the moments the birds are provisioning their young.

### Prey detection
Next to the filtering of video data I also trained an object detection model to detect the type of prey a bird brings into the nestbox. As it is difficult to get much detail from the low resolution infra-red videos used for the project I chose to train the model to detect four broad categories of prey: Moth, Caterpillar, Spider and Other. 

::: div grid text-center
 ::: div col-12 col-md-6
  ![](/images/projects/smart-nestbox/prey-moth.jpg)
  Prey detected as **Moth**
 :::
 ::: div col-12 col-md-6
  ![](/images/projects/smart-nestbox/prey-caterpillar.jpg)
  Prey detected as **Caterpillar**
 :::
 ::: div col-12 col-md-6
  ![](/images/projects/smart-nestbox/prey-spider.jpg)
  Prey detected as **Spider**
 :::
 ::: div col-12 col-md-6
  ![](/images/projects/smart-nestbox/prey-other.jpg)
  Prey detected as **Other**
 :::
:::
