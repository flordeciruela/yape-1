'use strict';
const CardRegister = (update) => {
	const container = $('<div class="center-align section"></div>');
	const img = $('<img src="assets/img/icons/bcp-logo.png" class="col s6 offset-s3">');
	const h5 = $('<h5 class="col s12">Registra tu tarjeta débito BCP</h5>');
	const text = $('<p class="col s12">Por ahora sólo aceptamos cuentas de ahorro y/o corriente en soles.</p>');
	const form = $('<form class="col s12"></form>');
	const inputCont1 = $('<div class="input-field col s12"></div>');
	const i = $('<img src="assets/img/icons/card.png" class="prefix" style="width: 20px">');
	const inputCard = $('<input type="text" id="card" maxlength="16" required>');
	const scan = $('<div class="center-align col s12"><img src="assets/img/icons/scan.png" style="width: 18px"><span> Escanear tarjeta</span></div>');
	const inputCont2 = $('<div class="input-field inline col s12"></div>');
	const labelDate = $('<span class="col s5">Fecha de vencimiento </span>');
	const month = $('<input type="text" class="col s3" placeholder="Mes" maxlength="2" required>');
	const slash = $('<span class="col s1">/</span>');
	const year = $('<input type="text" class="col s3" placeholder="Año" maxlength="2" required>');
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
	inputCont2.append(labelDate);
	inputCont2.append(month);
	inputCont2.append(slash);
	inputCont2.append(year);
	form.append(btnContinue);

	form.on("change",(e)=> {
		e.preventDefault();

		if(/^\d{16}$/.test(inputCard.val()) && parseInt(year.val()) > 16 && parseInt(year.val()) < 25 && parseInt(month.val()) < 13 && parseInt(month.val()) > 0) {
			btnContinue.removeClass("disabled");
		} else if (!/^\d{16}$/.test(inputCard.val()) || parseInt(year.val()) < 17 || parseInt(year.val()) > 24 || parseInt(month.val()) < 1 || parseInt(month.val()) > 12) {
			btnContinue.addClass("disabled");
		}
	});

	btnContinue.on("click",(e)=>{
		e.preventDefault();
		state.cardNumber = inputCard.val();
		state.cardMonth = month.val();
		state.cardYear = year.val();
		state.viewScreen = "CardPassword";
		update();
	});

	return container;
}

const CardPassword = (update) => {
	const lastCardNumbers = state.cardNumber[12]+state.cardNumber[13]+state.cardNumber[14]+state.cardNumber[15];
	const container = $('<div class="center-align section"></div>');
	const img = $('<img src="assets/img/icons/bcp-logo.png" class="col s6 offset-s3">');
	const h5 = $('<h5 class="col s12">Ingresa la clave de tu tarjeta</h5>');
	const text = $('<p class="col s12">Tarjeta <strong>****'+lastCardNumbers+'</strong></p>');
	const form = $('<form class="col s12"></form>');
	const inputCont = $('<div class="input-field col s12"></div>');
	const i = $('<img src="assets/img/icons/card.png" class="prefix" style="width: 20px">');
	const cardPass = $('<input type="password" required>');
	const btnRegister = $('<button class="btn yellow disabled">REGISTRAR</button>');

	container.append(img);
	container.append(h5);
	container.append(text);
	container.append(form);
	form.append(inputCont);
	inputCont.append(i);
	inputCont.append(cardPass);
	form.append(btnRegister);

	form.on("change",(e)=> {
		e.preventDefault();

		if(/^\d{6}$/.test(cardPass.val())) {
			btnRegister.removeClass("disabled");
		} else {
			btnRegister.addClass("disabled");
		}
	});

	btnRegister.on("click",(e)=>{
		e.preventDefault();
		state.cardPassword = cardPass.val();
		console.log(state.cardNumber);
		postCard(update, state.phone, state.cardNumber, state.cardMonth, state.cardYear, state.cardPassword);
	});
	return container;
}

const postCard = (update, phone, cardNumber, cardMonth, cardYear, cardPassword) => {
	$.post("api/registerCard", {phone: phone, cardNumber: cardNumber, cardMonth: cardMonth, cardYear: cardYear, cardPassword: cardPassword}, function(response){
			if(response.success){
				state.cardNumber = response.data.cardNumber;
				state.cardMonth = response.data.cardMonth;
				state.cardYear = response.data.cardYear;
				state.cardPassword = response.data.cardPassword;
				state.viewScreen = "Hello";
				update();
			}else{
				alert(response.message);
			}
			console.log(response);
	});
}

const Hello = (update) => {
	const container = $('<div id="hello"></div>');
	const header = $('<div class="col s12 center-align" id="header"></div>');
	const iHeader = $('<img src="assets/img/icons/engine.png" id="engine" class="right">');
	const img = $('<img src="assets/img/icons/happy-face.png" class="col s4 offset-s4">');
	const h5 = $('<h5 class="col s12 bullet-gray-text">Hola</h5>');
	const link = $('<div class="col s12 text-green-a"><img src="assets/img/icons/eye.png" style="width: 16px"><span> Mostrar Saldo</span></div>');
	const main = $('<div class="col s12" id="main-hello"></div>');
	const acount = $('<span class="left bullet-gray-text">ÚLTIMOS MOVIMIENTOS</span><img src="assets/img/icons/right-arrow-circular-button.png" class="right" style="width: 20px">');
	const divider = $('<hr class="col s12">');
	const hero = $('<div class="col s11 light-gray-text" id="hero"></div>');
	const ihero = $('<img src="assets/img/icons/icon.png" class="responsive-img col s5">');
	const h6 = $('<h6>¿Aún no realizas tu primer pago?</h6>');
	const p = $('<h6>Es rápido y sencillo</h6>');
	const pay = $('<div class="col s12 bullet-gray-text"></div>');
	const send = $('<div class="col s3 center-align left"><img src="assets/img/icons/send.png" class="responsive-img"><span>ENVIAR PAGO</span></div>');
	const receive = $('<div class="col s3 center-align right"><img src="assets/img/icons/code-qr.png" class="responsive-img"><span>RECIBIR PAGO</span></div>');

	container.append(iHeader);
	container.append(header);
	header.append(img);
	header.append(h5);
	header.append(link);
	container.append(main);
	main.append(acount);
	main.append(divider);
	main.append(hero);
	hero.append(ihero);
	hero.append(h6);
	hero.append(p);
	main.append(pay);
	pay.append(send);
	pay.append(receive);

	return container;
}