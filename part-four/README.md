# Part Four: Loading and Displaying Assets
In [part one](../part-one) of the tutorial we talked about the kind of game that we'd be creating, and in [part two](../part-two) we created a new project from a starter project.

In [part three](../part-three) of the tutorial we prepped our assets for use in the game, and this time we'll start actually displaying them.

## Loading Assets
With our individual assets prepped, we can now go about loading them so that we can display them.

With our current structure we have three states that are called:

1. Boot
2. Preloader
3. MainMenu

As we know from the starter project, the Preloader state should be used to preload any assets that might be used by the game.

For now, we won't use the Boot state to preload an asset for a progress bar.

We'll go ahead and open the Preloader state and take a look.

The `preload()` function currently logs to the console, for debugging purposes. It then sets a default path on any calls to the Phaser Loader. Since we've put our assets in the **assets** directory we'll leave this as-is.

	this.load.path = 'assets/';

Finally we have a `create()` function that passes us into the `MainMenu` state. We'll leave this function alone.

While we could do a loop, since we ultimately want to use an atlas with a single image, we'll go ahead and manually load all five images individually.

	this.load.image('enemy0');
	this.load.image('enemy1');
	this.load.image('enemy2');
	this.load.image('enemy3');
	this.load.image('enemy4');

If we build our project (Shift + Command + B) and then refresh our web site we should see in the Network tab of our browser our five images being loaded. But what we really want to do is display our enemies.

## Displaying Assets

While we may eventually want to build out a main menu, we'll leave that for later and create our main game state.

Copy the **_ExampleState.ts** file and rename it to **MainGame.ts**, since `Game` is already used for the project as a whole. Rename all instances of `ExampleState` to `MainGame` within this file.

We'll need to register our new state by going into **Game.ts** and add the following line in the `constructor()` function, below the other related state additions.

	this.state.add('MainGame', MainGame);

Now in the MainMenu state we can have it automatically start our new `MainGame` state, adding the following at the bottom of the `create()` function.

	this.game.state.start('MainGame', true, false);

Back in our `MainGame` we'll go ahead and add an enemy to the page, by adding the following at the bottom of the `create()` function.

	this.game.add.sprite(0, 0, 'enemy0');

Now build our project (Shift + Command + B) and load the site to test. This should display the sprite in the top left corner, albeit relatively small.

![Sprite in the top left corner of the game](../tutorial-images/part-four-first-image.png)

Let's make a few changes and put it in the center of the game world. We'll do this by changing where the image is placed first.

Let's also create a new variable to store a reference to our current enemy, by adding the following above the `init()` function.

	currentEnemy: Phaser.Sprite;

Then we'll update our code that adds the enemy sprite.

	this.currentEnemy = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'enemy0');

If we build our code and refresh the page the enemy sprite does appear to be in the center of the game world.

However, if we increase the size of our enemy sprite by adding the following below our code to add the enemy we'll see something different.

	this.currentEnemy.scale.set(10);

![Scaled sprite offset from the center](../tutorial-images/part-four-second-image.png)

The sprite will actually use the top left corner to determine where it should be positioned. For this reason, you should either take into account the width and height of the image, or better still, reset the anchor point of the image to the center.

	this.currentEnemy.anchor.setTo(0.5);

With this addition and another build and refresh you should find that the image is now in the center of the game world.

## Next Steps
Now that we have an enemy sprite displaying in the game we can go about interacting with it. In the next part of this tutorial we'll allow enemies to be tapped/clicked on.

[lucky-enemies]: https://luckycassette.itch.io/lucky-bestiary-gb
[imagemagick]: https://www.imagemagick.org
