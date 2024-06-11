import { ServerService } from "../services/server";
import { Telegram } from "../services/telegram";
import { GAME_PARAMS } from "../utils/consts";
import { TextButton } from "../sprites/TextButton";

export class Layout extends Phaser.Scene {
	private readonly menuButtons = ["Boosts", "Game", "Tasks"];

	tasksButton: Phaser.GameObjects.Sprite;
	boostsButton: Phaser.GameObjects.Sprite;
	telegram: Telegram;
	serverService: ServerService;
	scene1: TextButton;

	constructor(key: string | Phaser.Types.Scenes.SettingsConfig) {
		super(key);
		this.telegram = new Telegram();

		this.serverService = ServerService.getInsnc();
	}

	preload() {
		this.load.image("btn", "src/assets/btn.png");
		this.load.image("menu_btn", "src/assets/menu_btn.png");
	}

	create() {
		this.createBackground();
		this.createMenuButtons();
	}

	createBackground() {
		// Create a temporary canvas to draw the gradient
		const tempCanvas = document.createElement("canvas");
		tempCanvas.width = Number(this.game.config.width);
		tempCanvas.height = Number(this.game.config.height);
		const tempContext = tempCanvas.getContext("2d");

		// Create the gradient
		const gradient = tempContext.createLinearGradient(0, 0, 0, Number(this.game.config.height));
		gradient.addColorStop(0, GAME_PARAMS.BACKGROUND_COLOR.START); // Start color (red)
		gradient.addColorStop(1, GAME_PARAMS.BACKGROUND_COLOR.END); // End color (blue)

		// Fill the canvas with the gradient
		tempContext.fillStyle = gradient;
		tempContext.fillRect(0, 0, Number(this.game.config.width), Number(this.game.config.height));

		// Create a texture from the canvas
		if (this.textures.exists("backgroundGradient")) {
			this.add.image(0, 0, "backgroundGradient").setOrigin(0, 0);
			return;
		}

		this.textures.addCanvas("backgroundGradient", tempCanvas);

		// Add the gradient background to the scene
		this.add.image(0, 0, "backgroundGradient").setOrigin(0, 0);
	}

	createMenuButtons() {
		const buttonY = GAME_PARAMS.WSIZE.HEIGHT - 50;
		let x = 100;
		this.menuButtons.forEach((mb) => {
			new TextButton(this, x, buttonY, mb, "menu_btn", () => {
				this.scene.start(mb);
			});
			x += 165;
		});

		// Add buttons at the bottom

		// this.tasksButton = this.add.sprite(100, buttonY, "button").setInteractive();
		// this.boostsButton = this.add.sprite(200, buttonY, "button").setInteractive();

		// // Add button functionality
		// this.tasksButton.on("pointerdown", () => {
		// 	this.scene.start("Tasks"); // Navigate to Scene1
		// });

		// this.boostsButton.on("pointerdown", () => {
		// 	this.scene.start("Boosts"); // Navigate to Scene2
		// });
	}
}
