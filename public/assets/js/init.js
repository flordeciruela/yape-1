'use strict';
const Init = (update) => {
	const container = $('<div></div>');
	const img = $('<img src="assets/img/icons/icon-people.png">');
	const h1 = $('<h1>Paga a tus amigos</h1>');
	const text = $('<p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');
	const btnRegister = $('<button>Registrarme</button>');

	container.append(img);
	container.append(h1);
	container.append(text);
	container.append(btnRegister);

	btnRegister.on('click', (e) => {
		state.viewScreen = "validateNumber";
		update();
	});

	return container;
}
