import { GAME_PARAMS } from "../utils/consts";

export class TextButton extends Phaser.GameObjects.Container {
	button: Phaser.GameObjects.Sprite;
	text: Phaser.GameObjects.Text;

	constructor(scene: Phaser.Scene, x: number, y: number, text: string, texture: string, callback) {
		super(scene);

		this.button = scene.add.sprite(x, y, texture).setInteractive();
		this.text = scene.add.text(x, y, text, { fontSize: "32px", color: "#00000", fontStyle: "bold" }).setOrigin(0.5, 0.5);
		this.text.disableInteractive();
		this.button.setDisplaySize(150, 75);

		this.add(this.button);
		this.add(this.text);

		this.button.on("pointerdown", () => {
			// this.scene.tweens.add({
			// 	targets: this,
			// 	scaleX: 0.9,
			// 	scaleY: 0.9,
			// 	duration: 100,
			// 	ease: "Power1",
			// });

			// Execute the callback function
			callback();
		});
		this.button.on("pointerover", () => {
			this.scene.tweens.add({
				targets: this,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 100,
				ease: "Power1",
			});
		});
		this.button.on("pointerout", () => {
			this.scene.tweens.add({
				targets: this,
				scaleX: 1,
				scaleY: 1,
				duration: 100,
				ease: "Power1",
			});
		});

		scene.add.existing(this);
	}
	startMining() {
		throw new Error("Method not implemented.");
	}
	stopMining() {
		throw new Error("Method not implemented.");
	}

	setText(newText) {
		this.text.setText(newText);
	}
}
