import { scenes } from "../scenes";
import { GAME_PARAMS } from "../utils/consts";

export const mainConfig: Phaser.Types.Core.GameConfig = {
	width: GAME_PARAMS.WSIZE.WIDTH,
	height: GAME_PARAMS.WSIZE.HEIGHT,
	title: GAME_PARAMS.GAME_TITLE,
	url: import.meta.env.URL || "",
	version: import.meta.env.VERSION || "0.0.1",
	backgroundColor: "#00000",
	scene: scenes,
	scale: GAME_PARAMS.SCALE,
};
