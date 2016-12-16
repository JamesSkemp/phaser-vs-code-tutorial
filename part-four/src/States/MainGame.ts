module StarterProject {
	export class MainGame extends Phaser.State {
		saveImageButton: any;

		currentEnemy: Phaser.Sprite;

		init() {
			console.log((new Date).toISOString() + ' : Entered MainGame init()');
			// init can receive parameters.
		}

		preload() {
			console.log((new Date).toISOString() + ' : Entered MainGame preload()');

			// Recommendation is to limit calls to the Phaser Loader only. (Interphase 1, pg 29)
		}

		loadUpdate() {
			// Called while assets are being loaded.
		}

		create() {
			console.log((new Date).toISOString() + ' : Entered MainGame create()');

			this.currentEnemy = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'enemy0');

			this.currentEnemy.scale.set(10);
			this.currentEnemy.anchor.setTo(0.5);

			// For tutorial purposes, allow a screenshot to be taken of the current canvas.
			this.saveImageButton = this.game.input.keyboard.addKey(Phaser.Keyboard.P);this.saveImageButton.onDown.add(this.takeScreenshot, this);
		}

		update() {
		}

		paused() {
			console.log((new Date).toISOString() + ' : Entered MainGame paused()');
		}

		pauseUpdate() {

		}

		resumed() {
			console.log((new Date).toISOString() + ' : Entered MainGame resumed()');

		}

		shutdown() {
			console.log((new Date).toISOString() + ' : Entered MainGame shutdown()');

		}

		takeScreenshot() {
			//console.log(this.game.canvas.toDataURL());
			(document.getElementById('screenshotImg') as HTMLImageElement).src = this.game.canvas.toDataURL();
		}
	}
}