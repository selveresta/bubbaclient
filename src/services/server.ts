import axios, { Axios } from "axios";
import { Telegram } from "./telegram";

export class ServerService {
	private static instance: ServerService;
	private serverURL = "https://15a4-176-36-170-226.ngrok-free.app";
	private axios: Axios;
	telegram: Telegram;

	constructor() {
		this.axios = axios.create({
			baseURL: `${this.serverURL}`,
			timeout: 1000,
			headers: {
				Accept: "application/json",
			},
		});
		this.telegram = new Telegram();

		// const request = new Promise(() => {
		// 	this.saveUser(this.telegram.getUser());
		// }).then((data) => {
		// 	console.log(data);
		// });
	}

	public static getInsnc(): ServerService {
		if (!this.instance) {
			this.instance = new ServerService();
			return this.instance;
		}

		return this.instance;
	}

	public async saveUser(userData: WebAppUser) {
		console.log(userData);
		if (!userData) {
			userData = {
				first_name: "Artem",
				id: 1321231,
				username: "@Asd",
			};
		}
		try {
			const res = await this.axios.post(`/user`, userData);
			// const res = await fetch(`${this.serverURL}user`, {
			// 	method: "POST",
			// 	// mode: 'no-cors', // удалить эту строку
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify(userData),
			// });
			console.log(res);
			return res;
		} catch (error) {
			if (error.response) {
				console.log("Server responded with status code:", error.response.status);
				console.log("Response data:", error.response.data);
			} else if (error.request) {
				console.log("No response received:", error.request);
			} else {
				console.log("Error creating request:", error.message);
			}
		}
	}
}
