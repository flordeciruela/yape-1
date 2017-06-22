'use strict';

const createUser = (update) => {
	const container = $('<div class="center-align"></div>');
	const img = $('<img src="assets/img/icons/lockone.png" class="col s4 offset-s4">');
	const h5 = $('<h5 class="col s12">Crea tu usuario Yape</h5>');
	const text = $('<p class="col s12">Ingresa un nombre, email y clave de usuario.</p>');
	const form = $('<form class="col s12"></form>');
	const imputCont1 = $('<div class="input-field col s12"></div>');
	const iName = $('<img src="assets/img/icons/user.png" class="prefix" style="width: 20px">');
	const name = $('<input type="text" id="icon_prefix" required>');
	const imputCont2 = $('<div class="input-field col s12"></div>');
	const iEmail = $('<img src="assets/img/icons/message-gray.png" class="material-icons prefix" style="width: 20px">');
	const email = $('<input type="email" id="icon_prefix" class="validate" required>');
	const imputCont3 = $('<div class="input-field col s12"></div>');
	const iPass = $('<img src="assets/img/icons/lock.png" class="prefix" style="width: 20px">');
	const pass = $('<input type="password" id="password" required>');
	const warning = $('<p class="col s12 center-align">Cuida ésta clave como oro, es tu acceso a Yape.</p>');
	const btnAcount = $('<button class="btn yellow disabled">CREAR CUENTA</button>');

	container.append(img);
	container.append(h5);
	container.append(text);
	container.append(form);
	form.append(imputCont1);
	form.append(imputCont2);
	form.append(imputCont3);
	imputCont1.append(iName);
	imputCont1.append(name);
	imputCont2.append(iEmail);
	imputCont2.append(email);
	imputCont3.append(iPass);
	imputCont3.append(pass);
	form.append(warning);
	form.append(btnAcount);

	form.on("change",(e)=> {
		e.preventDefault();
		var regEmail = /([a-zA-Z0–9]+)([\_\.\-{1}])?([a-zA-Z0–9]+)\@([a-zA-Z0–9]+)([\.])([a-zA-Z\.]+)/g;
		if(name.val().length != 0 && regEmail.test(email.val()) && pass.val().length != 0) {
			btnAcount.removeClass("disabled");
		} else {
			btnAcount.addClass("disabled");
		}
	});

	btnAcount.on("click",(e)=>{
		e.preventDefault();
		state.name = name.val();
		state.email = email.val();
		state.pass = pass.val();
		postUser(update, state.phone, state.name, state.email, state.pass);
	});
	return container;
}

const postUser = (update, phone, name, email, pass) => {
	$.post("api/createUser", {phone: phone, name: name, email: email, password: pass}, function(response){
		if(response.success) {
			state.name = response.data.name;
			state.email = response.data.email;
			state.pass = response.data.password;
			state.viewScreen = "Success";
			update();
		} else {
			alert(response.message);
		}
	});
}
