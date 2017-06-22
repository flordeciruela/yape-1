'use strict';

const Success = (update) => {
	const container = $('<div class="center-align"></div>');
	const img = $('<img src="assets/img/icons/check.png" class="col s6 offset-s3">');
	const success = $('<h5 class="col s12">¡Bien!</h5>');
	const h5 = $('<h5 class="col s12">Ahora puedes usar Yape</h5>');

	container.append(img);
	container.append(success);
	container.append(h5);

	setTimeout(function(){
		state.viewScreen = "CardRegister";
		update();
		console.log(state.viewScreen);
	}, 3000);
	return container;
}

const CardRegister = (update) => {
	const container = $('<div class="center-align"></div>');
	const img = $('<img src="assets/img/icons/bcp-logo.png" class="col s6 offset-s3">');
	const h5 = $('<h5 class="col s12">Registra tu tarjeta débito BCP</h5>');
	const text = $('<p class="col s12">Por ahora sólo aceptamos cuentas de ahorro y/o corriente en soles.</p>');
	const form = $('<form class="col s12"></form>');
	const inputCont1 = $('<div class="input-field col s12"></div>');
	const i = $('<img src="assets/img/icons/card.png" class="prefix" style="width: 20px">');
	const inputCard = $('<input type="text" id="card" required>');
	const scan = $('<div class="center-align col s12"><img src="assets/img/icons/scan.png" style="width: 16px"><span> Escanear tarjeta</span></div>');
	const inputCont2 = $('<div class="input-field col s12"></div>');
	const date = $('<span>Fecha de vencimiento </span><input type="date" min="2017-06-22">');
	const btnContinue = $('<button class="btn yellow disabled">CONTINUAR</button>');

	container.append(img);
	container.append(h5);
	container.append(text);
	container.append(form);
	form.append(inputCont1);
	inputCont1.append(i);
	inputCont1.append(inputCard);
	form.append(scan);
	form.append(inputCont2);
	inputCont2.append(date);
	form.append(btnContinue);

	return container;
}
