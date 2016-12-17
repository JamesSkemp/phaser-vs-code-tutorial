module StarterProject {
	export class Preloader extends Phaser.State {
		preload() {
			console.log((new Date).toISOString() + ' : Entered Preloader preload()');

			// If your game uses a graphic while assets are loaded, you would create the sprite and then display it via the below.
			//this.load.setPreloadSprite(this.preloadSprite);

			// Load the actual assets. By default the path will be set to the assets directory.
			this.load.path = 'assets/';
			// Assets loaded here can include image and audio files, as well as sprite sheets and more.
			this.load.image('enemy0');
			this.load.image('enemy1');
			this.load.image('enemy2');
			this.load.image('enemy3');
			this.load.image('enemy4');
		}

		create() {
			console.log((new Date).toISOString() + ' : Entered Preloader create()');

			// Once the assets have been preloaded you can move to the next state.
			this.game.state.start('MainMenu', true, false);
		}
	}
}