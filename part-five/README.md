# Part Five: Interacting with an Enemy
In [part one](../part-one) of the tutorial we talked about the kind of game that we'd be creating, and in [part two](../part-two) we created a new project from a starter project.

In [part three](../part-three) of the tutorial we prepped our assets for use in the game, and in [part four](../part-four) we started actually displaying them.

This time we'll allow interaction with the enemy.

## Switching the Layout
Ultimately we want this to be playable on a mobile device, with a standard portrait display, since we'll probably add interactive menu items below the enemy.

In **Game.ts** we'll go in and switch the width and height of the game to see how it looks.

	super(600, 800, Phaser.AUTO, 'content');

We have some scrolling going on in a standard laptop browser, so let's shrink down to a 480x320 size, which [What are the best resolutions for your HTML5 game?](http://www.firenibbler.com/2016/05/what-are-the-best-resolutions-for-your-html5-game/), from May 2016, and other sites suggest is a fairly good size for us to start with, but we'll keep portrait size.

	super(320, 480, Phaser.AUTO, 'content');

We'll also make sure that we scale our enemy by `4` so it doesn't take as much space.

	this.currentEnemy.scale.set(4);

Building and refreshing our game results in an experience a little closer to what we're hoping for in regards to our enemy display.

## Adding Interaction with the Enemy
Now that we have our enemy in a better place, we can add some basic interaction with the enemy.

	this.currentEnemy.inputEnabled = true;
	this.currentEnemy.events.onInputDown.add(this.attackEnemy, this);

First we have to enable input on the enemy, which allows us to actually interact with it. Next we'll add an event listener on input down that will call an `attackEnemy()` function, passing in `this` as the context.

We can add a very basic function for this, logging all arguments that are passed into the function.

	attackEnemy() {
		console.log(arguments);
	}

Building, refreshing, and clicking on the enemy sprite results in the browser logging that the function receives a Sprite and a Pointer, which means we can update our function accordingly.

	attackEnemy(enemy: Phaser.Sprite, pointer: Phaser.Pointer) {
		console.log(arguments);
	}

Let's actually have it be damaged when we click on it.

First, we'll give the enemy some health when we first create it.

	this.currentEnemy.health = 5;

Now in the `attackEnemy` function we'll have the enemy damaged each time we interact with it. We'll also have the enemy's current health logged to the console.

	enemy.damage(1);
	console.log('Current enemy health: ' + enemy.health);

Now if we tap on the enemy five times we'll see the health of the enemy decrease until it eventually disappears.

Since this isn't enough for the player to see, we'll have it move around a little when we interact with it.

First we'll declare a variable we can interact with, immediately after we declare `currentEnemy`.

	enemyDamageTween: Phaser.Tween;

Now we'll add the tween to the actual enemy.

	this.enemyDamageTween = this.game.add.tween(this.currentEnemy)
		.to({ y: '-32'}, 500)
		.to({ y: '+32'}, 500);
	this.enemyDamageTween.loop(false);

Here we add a tween to our game, targeting our enemy. First we'll have the sprite move up 32 pixels, and then back down 32 pixels so it's in the original position. Each of these will take half a second.

We'll also set the tween not to loop.

Now we'll actually start the tween when the enemy is interacted with, but before it is damaged, as shown below.

	this.enemyDamageTween.start();
	enemy.damage(1);
	console.log(enemy.health);

## Next Steps
Now that we have an enemy sprite displaying in the game and we can interact with it we'll add functionality to display another enemy once one is killed.
