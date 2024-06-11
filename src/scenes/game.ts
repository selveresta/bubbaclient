import { Layout } from "../layouts/Layout";
import { TextButton } from "../sprites/TextButton";
import { GAME_PARAMS } from "../utils/consts";

export class Game extends Layout {
	private Bubba: Phaser.GameObjects.Image;
	coins: number = 0;
	coinsText: Phaser.GameObjects.Text;

	button: Phaser.GameObjects.Sprite;
	minings_btn: TextButton;

	private BubbaPos: { x: number; y: number } = { x: 0, y: 0 };
	isMining: boolean;
	miningEvent: Phaser.Time.TimerEvent;

	constructor() {
		super("Game");
		//request to server fro user data
		// setup response
	}

	preload() {
		super.preload();
		this.load.image("Bubba", "src/assets/bubba.png");
	}

	create() {
		super.create();

		const scale = (GAME_PARAMS.WSIZE.WIDTH / GAME_PARAMS.WSIZE.HEIGHT) * 0.9;

		this.addBubba(scale);
		this.drawScore();

		this.minings_btn = new TextButton(this, GAME_PARAMS.WSIZE.WIDTH / 2, GAME_PARAMS.WSIZE.HEIGHT / 1.5, "MINE", "menu_btn", () => {
			// Add a scaling tween
			this.tweens.add({
				targets: this.Bubba,
				scale: { from: scale, to: scale * 1.05 },
				duration: 1000,
				yoyo: true,
				ease: "Power1",
				repeat: -1,
				onComplete: () => {
					this.Bubba.setScale(scale);
				},
			});
			// Reset scale to original after animation completes
			if (!this.isMining) {
				this.startMining();
			} else {
				this.tweens.killTweensOf(this.Bubba);
				this.stopMining();
			}
		});
	}

	private drawScore() {
		console.log(this.BubbaPos.y);
		this.coinsText = this.add.text(
			this.BubbaPos.x - this.Bubba.width * this.Bubba.scaleX + 200,
			(this.BubbaPos.y + this.Bubba.height) * this.Bubba.scaleY - 250,
			"Coins: 0",
			{
				fontSize: "32px",
				color: "#fff",
			}
		);

		// Create the clickable button
	}

	startMining() {
		this.isMining = true;
		this.miningEvent = this.time.addEvent({
			delay: 1000, // Interval at which coins are mined (1 second)
			callback: this.mineCoins,
			callbackScope: this,
			loop: true,
		});
	}

	stopMining() {
		this.isMining = false;
		if (this.miningEvent) {
			this.miningEvent.remove(false); // Stop the mining event
		}
	}

	mineCoins() {
		this.coins += 1; // Increase the coin count
		console.log(this.coins);
		this.coinsText.setText("Coins: " + this.coins); // Update the text
	}

	addBubba(scale) {
		this.Bubba = this.add.sprite(0, 0, "Bubba").setInteractive();

		this.Bubba.scale = scale;
		const x = GAME_PARAMS.WSIZE.WIDTH / 2;
		const y = GAME_PARAMS.WSIZE.HEIGHT / 2 - x / 4;
		this.BubbaPos.x = x;
		this.BubbaPos.y = y;
		this.Bubba.x = x;
		this.Bubba.y = y;

		this.Bubba.on("pointerdown", () => {});
	}
}
