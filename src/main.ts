import Phaser from "phaser";
import "./style.css";
import { mainConfig } from "./config/config";
import { ServerService } from "./services/server";
import { Telegram } from "./services/telegram";

const game = new Phaser.Game(mainConfig);
