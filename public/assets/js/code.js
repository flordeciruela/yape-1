'use strict';
const validateCode = (update) => {
	const container = $('<div class="center-align section"></div>');
	const img = $('<img src="assets/img/icons/message.png" class="col s6 offset-s3">');
	const h5 = $('<h5 class="col s12">Ahora ingresa tu código</h5>');
	const text = $('<p class="col s12">Enviamos un SMS con el código de validación al número <strong>'+state.phone+'</strong></p>');
	const form = $('<form class="col s12"></form>');
	const imputCont = $('<div class="input-field col s8 offset-s1"></div>');
	const i = $('<img src="assets/img/icons/lock.png" class="prefix" style="width: 20px">');
	const inputCode = $('<input type="password" id="code" required>');
	const time = $('<div class="col s12 center-align"><span>Reintentar en <img src="assets/img/icons/clock.png" style="width: 16px"> </span><span id="time"></span></div>');

	container.append(img);
	container.append(h5);
	container.append(text);
	container.append(form);
	form.append(imputCont);
	imputCont.append(i);
	imputCont.append(inputCode);
	form.append(time);

	let count = 22;
	$('#time').text(count);
	let initTimer = setInterval(function(){timer()}, 1000);
	function timer() {
    count--;
    $('#time').text(count);
		if (count == 0) {
			clearInterval(initTimer);
			resendCode(update, state.phone);
		}
	}

	form.on("keyup",(e)=> {
		//e.preventDefault();
		if(inputCode.val() == state.code) {
			clearInterval(initTimer);
			state.viewScreen = "createUser";
			update();
		}
	});
	return container;
}

const resendCode = (update, phone) => {
	$.post("api/resendCode", {phone: phone}, function(response){
		console.log(response);
		if(response.success) {
			state.code = response.data;
			alert(response.message+" "+state.code);
			update();
		} else {
			alert(response.message);
		}

	});
}
