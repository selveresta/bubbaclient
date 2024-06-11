import { Layout } from "../layouts/Layout";
import { GAME_PARAMS } from "../utils/consts";

export class Boosts extends Layout {
	private Bubba: Phaser.GameObjects.Image;
	score: any;
	scoreText: any;

	constructor() {
		super("Boosts");
	}

	preload() {
		super.preload();
		this.load.image("Bubba", "src/assets/bubba.png");
	}

	create() {
		super.create();
		this.addClickButton();
	}

	addClickButton() {
		const scale = (GAME_PARAMS.WSIZE.WIDTH / GAME_PARAMS.WSIZE.HEIGHT) * 0.9;
		this.Bubba = this.add.sprite(0, 0, "Bubba").setInteractive();

		this.Bubba.scale = scale;
		const x = GAME_PARAMS.WSIZE.WIDTH / 2 + 100;
		const y = GAME_PARAMS.WSIZE.HEIGHT / 2 - x / 4;
		console.log(this.Bubba.scale);
		this.Bubba.x = x;
		this.Bubba.y = y;

		this.Bubba.on("pointerdown", () => {
			// Add a scaling tween
			this.tweens.add({
				targets: this.Bubba,
				scale: { from: scale, to: scale * 1.05 },
				duration: 100,
				yoyo: true,
				ease: "Power2",
				onComplete: () => {
					// Reset scale to original after animation completes
					this.Bubba.setScale(scale);
				},
			});
		});
	}
}
