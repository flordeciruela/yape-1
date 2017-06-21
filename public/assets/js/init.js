'use strict';
const Init = (update) => {
	const container = $('<div class="section center-align col s12"></div>');
	const slider = $('<div class="owl-carousel owl-theme"></div>');
	const item1 = $('<div></div>');
	const img1 = $('<img src="assets/img/icons/icon-people.png" class="col s10 offset-s1">');
	const title1 = $('<h5 class="col s12">Paga a tus amigos</h5>');
	const text1 = $('<p class="col s12">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');
	const item2 = $('<div></div>');
	const img2 = $('<img src="assets/img/icons/happy-person.png" class="col s10 offset-s1">');
	const title2 = $('<h5 class="col s12">Sin número de cuenta</h5>');
	const text2 = $('<p class="col s12">Elige a quien pagar desde tu lista de contactos.</p>');
	const item3 = $('<div></div>');
	const img3 = $('<img src="assets/img/icons/group-people.png" class="col s10 offset-s1">');
	const title3 = $('<h5 class="col s12">Gratis y Seguro</h5>');
	const text3 = $('<p class="col s12">La transferencia es inmediata y gratuita de una cuenta a otra.</p>');
	const btnRegister = $('<button class="btn yellow col s12">Registrarme</button>');

	item1.append(img1);
	item1.append(title1);
	item1.append(text1);
	slider.append(item1);
	item2.append(img2);
	item2.append(title2);
	item2.append(text2);
	slider.append(item2);
	item3.append(img3);
	item3.append(title3);
	item3.append(text3);
	slider.append(item3);
	container.append(slider);
	container.append(btnRegister);

	btnRegister.on('click', (e) => {
		state.viewScreen = "validateNumber";
		update();
	});
	return container;
}
