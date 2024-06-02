import Phaser from "phaser";
import "./style.css";
import { scenes } from "./scenes";

new Phaser.Game({
	width: 600,
	height: 800,
	title: "Bubba",
	url: import.meta.env.URL || "",
	version: import.meta.env.VERSION || "0.0.1",
	backgroundColor: "#00000",
	scene: scenes,
	scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
});
