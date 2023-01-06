---
title: Paint 'n Click
repo: https://github.com/JonaMata/Paint-n-Click
---

## Introduction
A simple puzzle game that I made together with [@JonaMata](https://github.com/JonaMata) to explore computer vision and search algorithms. Find your way through a randomly generated maze by physically drawing key objects to solve the riddles.

::: div grid

 ::: div col-12 col-md-6
  ## How it works
  The maze is created using a recursive depth-first maze generation algorithm. After which an A* search algorithm is used to block every possible path through the maze with one or more doors with a random riddle to be solved by presenting a doodle to the webcam.

  To recognize doodles drawn by the player we trained a simple classification model using [TensorFlow](https://www.tensorflow.org).
 :::

 ::: div col-12 col-md-6
  ![](/images/projects/paint-n-click/overview.gif)
 :::

:::

::: div grid

 ::: div col-12 col-md-6 order-2 order-md-1
  ![](/images/projects/paint-n-click/cat.gif)
 :::
    
 ::: div col-12 col-md-6 order-1 order-md-2
  We trained the classification model on a subset of the Google [Quick Draw](https://www.tensorflow.org/datasets/catalog/quickdraw_bitmap) bitmaps dataset.
   
  For the input of the trained TensorFlow model we use OpenCV to resize a webcam input to 28x28 grayscale to match the resolution of the training data.
 :::

:::
