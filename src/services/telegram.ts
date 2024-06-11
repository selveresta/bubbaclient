export class Telegram {
	webApp: WebApp;

	constructor() {
		this.webApp = window.Telegram.WebApp;
	}

	init() {
		// Example: Setting the background color of the header
		this.webApp.setHeaderColor("#2AABEE");

		// Example: Displaying a main button
		this.webApp.MainButton.setText("Click me").show();
	}

	getUser() {
		return this.webApp.initDataUnsafe.user;
	}

	onButtonClick(callback) {
		this.webApp.MainButton.onClick(callback);
	}
}
