---
title: Similarity Search
url: https://www.techscience.com/cmc/v75n1/51508
---

## Introduction
During my Internship in South Korea I worked on a project involving similarity search on a dataset of images of cosmetics packaging. Combining multiple computer vision techniques to assert the similarity of a query to a database of known objects. Together with my supervisor [Umer Waqas](https://www.linkedin.com/in/umer-waqas-38b5a9197/), we published our research to the journal _Computers, Material & Continua_. 

## The research
Below you can read an abridged explanation of the proposed solution.

### Feature extraction
To be able to determine the similarity of two pictured objects the features presented in the images need to be quantised. By training a machine learning model called a Convolutional Neural Network (CNN) on a large image dataset of various generic images it is able to extract general features from any query image it is shown after training. The CNN is able to encode the image into a list of numbers which represent the features of the image. These extracted "feature vectors" can be seen as a many-dimensional point and by calculating the distance between two such points we get a value that represents the similarity of two images.

::: div grid
::: div col-center-8 col-md-6 text-center
![Rows of images of a bottle with different parts highlighted](/images/projects/image-search/features-1.png)
:::
::: div col-center-8 col-md-6 text-center
![Rows of images of a bottle with different parts highlighted](/images/projects/image-search/features-2.png)
:::
:::
::: div text-center
A representation of the extracted features highlighted in an image.
:::

### Category Prediction
To reduce the number of images that need to be compared the database is split into broad categories. We used another CNN model trained on the images in the dataset to classify the query image into one of these categories. By first predicting the category of the query image we now only need to compare it to images from that category reducing the computational power and time needed for each query.

::: div text-center
![Two rows of images of various cosmetics packaging](/images/projects/image-search/categories.png)
Sample images from each of the categories of the cosmetics packaging dataset used during our research.
:::

### Object Localization
However, we were trying to find the similarity between objects in images. So, when extracting the features of an image the backgrounds would skew the "feature vector" and make images of objects taken with the same background seem more similar than they were in reality. To combat this issue we used another machine learning model to automatically detect the object of interest and remove the background from the images.

::: div text-center
![Four rows of images of cosmetics containers with boxes drawn where the algorithms think objects are located.](/images/projects/image-search/segmentation.png)
Examples of image segmentation and background removal. 
:::

### Results
By combining the above techniques and fine-tuning the used models we were able to achieve fairly good search results, as can be seen in the example queries below.

::: div text-center
![Rows of images of cosmetics packaging where each first row represents a query image followed by the top 5 search results.](/images/projects/image-search/results.png)
Examples of Top 5 search results for various queries.
:::
