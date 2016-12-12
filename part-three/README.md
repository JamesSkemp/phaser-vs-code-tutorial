# Part Three: Prepping Assets
In [part one](../part-one) of the tutorial we talked about the kind of game that we'd be creating, and in [part two](../part-two) we created a new project from a starter project.

In part three of the tutorial we'll prep our assets for use in the game.

## Asset Analysis
Normally we want to serve up a single image instead of multiple images, for performance purposes. In the case of the [Lucky Bestiary - GB - JRPG Monster Pack][lucky-enemies] the monsters are provided in a single image, but without any information on which images are where.

Luckily each of the individual images are the same size, 32x32 pixels, so we could:

1. crop the image into pieces, give each individual image a better name, then recombine them
2. manually create an atlas for the existing image
3. for the purposes of this tutorial, crop the image and load them in individually

As the options suggest, to start we'll crop the image and then load in images individually. Later we'll definitely want to correct this, and will do so.

> This tutorial will only use a small number of the 50 assets that come in the [Lucky Bestiary - GB - JRPG Monster Pack][lucky-enemies]. To get all of the assets to build your own game I recommend purchasing and downloading a copy.

Since we're going to chunk the image into pieces we can do so now.

## Cropping Images
Based upon past experience, I've found [ImageMagick][imagemagick] to be very good at cropping images in this way, once you figure out the command(s) to do so. Alternatively, you can use an image editing program, of which there are many, to crop the images.

If you're using ImageMagick you can run the following command in Terminal to break apart the image.

	convert -crop 32x32 ./\!Lucky\ Softer\ Grays.png enemy%d.png

This results in 55 new images created in the directory it is run in, named **enemy0.png**, **enemy1.png**, ..., **enemy54.png**, with the last five images being color swatches that we shouldn't need.

For the purposes of this tutorial I'm going to keep only the first five enemies.

> This tutorial is in progress.


[lucky-enemies]: https://luckycassette.itch.io/lucky-bestiary-gb
[imagemagick]: https://www.imagemagick.org
