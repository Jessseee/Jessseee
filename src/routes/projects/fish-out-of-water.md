---
title: Fish Out of Water
url: https://github.com/Jessseee/Fish-Out-of-Water
---

## Introduction

Fish Out of Water is an interactive Virtual Reality (VR) experience visualising global water pollution data. It visualises pollution data by the amount of trash floating in a lake, each object represents an amount of pollution of that category. We aim to raise awareness about water pollution and the dangers it poses to our living environment.

The goal of the project was to make data _"tangible"_ in a virtual reality environment. The project was done with a team of 10 people, where I lead the VR development team. I created all pointer interactions, made sure that the visual design was consistent, everything ran smooth on the target devices and created some assets and shaders.

![Showcase of basic VR pointer interactions in the final lake side camp environment](/images/projects/fish-out-of-water/reveal.gif)

## Development

### Interactions

The project is playable on Oculus Go and Gear VR. The player can interact with the environment using the pointer to teleport around the campsite. To filter the data the player can interact with the information board near the edge of the water. When the player changes the year using the calendar, the radio will play a news snippet about environmental disasters which happened that year.

![The campsite environment](/images/projects/fish-out-of-water/campsite.gif)

### Tooling and SDKs

The project is developed using Unity with the [Oculus Integration](https://assetstore.unity.com/packages/tools/integration/oculus-integration-82022) plugin to work for the Oculus Go and Gear VR. Using OVRInput, multiple possible interactions were created with the VR environment. Interactions such as locomotion, rotating, interacting and grabbing. Next to that [FMOD](https://assetstore.unity.com/packages/tools/audio/fmod-for-unity-161631) is used for sound design to create a more immersive VR experience.

::: div grid
 ::: div col-center-10 col-lg-6
  ![Showcasing basic VR pointer interactions in a prototyping environment](/images/projects/fish-out-of-water/all-interactions.gif)
 :::
 ::: div col-center-10 col-lg-6
  ![Showcasing filtering data by interacting with the campsite information board](/images/projects/fish-out-of-water/filter-data.gif)
 :::
:::
