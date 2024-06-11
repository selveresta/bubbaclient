import Phaser from "phaser";

const determineScreenSize = () => {
	const defaultScreenMobileSize = { w: 600, h: 900 };

	if (screen.orientation.type === "portrait-primary") {
		return { w: window.screen.width + 100, h: window.screen.height + 100 };
	}

	if (screen.orientation.type === "landscape-primary") {
		return defaultScreenMobileSize;
	}
};
const s = determineScreenSize();
const WINDOW_SIZE = {
	WIDTH: s.w,
	HEIGHT: s.h,
};

const BACKGROUND_GRADIENT_START = "#ff0000";
const BACKGROUND_GRADIENT_END = "#0000ff";

export const GAME_PARAMS = {
	WSIZE: WINDOW_SIZE,
	GAME_TITLE: "Bubba",
	SCALE: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
	BACKGROUND_COLOR: {
		START: BACKGROUND_GRADIENT_START,
		END: BACKGROUND_GRADIENT_END,
	},
};
