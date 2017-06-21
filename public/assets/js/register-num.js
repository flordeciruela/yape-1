'use strict';
const validateNumber = (update) => {
	const container = $('<div class="center-align"></div>');
	const img = $('<img src="assets/img/icons/phone.png" class="col s6 offset-s3">');
	const h3 = $('<h5 class="col s12">Para comenzar validemos tu numero</h5>');
	const text = $('<p class="col s12">Recibirás un SMS con un código de validación.</p>');
	const form = $('<form class="col s12"></form>');
	const imputCont = $('<div class="input-field col s8 offset-s1"></div>');
	const i = $('<img src="assets/img/icons/phoneandnumber.png" class="prefix" style="width: 70px">');
	const inputNum = $('<input type="text" id="number" required>');
	const checkTerms = $('<input type="checkbox" class="filled-in" id="filled-in-box"/><label for="filled-in-box">Acepto los <span>Términos y condiciones.</span></label>');
	const errorText = $('<p class="red-text center-align"></p>');
	const btnContinue = $('<button class="btn yellow disabled">Continuar</button>');

	container.append(img);
	container.append(h3);
	container.append(text);
	container.append(form);
	form.append(imputCont);
	imputCont.append(i);
	imputCont.append(inputNum);
	form.append(checkTerms);
	form.append(errorText);
	form.append(btnContinue);

	form.on("change",(e)=> {
		e.preventDefault();

		if(/^\d{9}$/.test(inputNum.val()) && checkTerms.prop('checked')){
			btnContinue.removeClass("disabled");
			errorText.text("");
		} else if (!/^\d{9}$/.test(inputNum.val()) || checkTerms.prop('checked') == false){
			btnContinue.addClass("disabled");
			errorText.text("Completar los campos correctamente.");
		}
	});

	btnContinue.on("click",(e)=>{
		e.preventDefault();
		state.phone = inputNum.val();
		state.terms = true;
		postNumber(update, state.phone, state.terms, errorText);
	});

	return container;
}

const postNumber = (update, phone, terms, errorText) => {
	$.post("api/registerNumber", {phone: phone, terms: terms}, function(response){
			if(response.success){
				state.code = response.data.code;
				state.viewScreen = "validateCode";
				console.log(state.viewScreen);
				alert("El código es: "+ state.code);
				update();
			}else{
				errorText.text(response.message);
			}
	});
}

const validateCode = (update) => {
	const container = $('<div class="center-align"></div>');
	const img = $('<img src="assets/img/icons/message.png" class="col s6 offset-s3">');
	const h3 = $('<h5 class="col s12">Ahora ingresa tu código</h5>');
	const text = $('<p class="col s12">Enviamos un SMS con el código de validación al número <strong>'+state.phone+'</strong></p>');
	const form = $('<form class="col s12"></form>');
	const imputCont = $('<div class="input-field col s8 offset-s1"></div>');
	const i = $('<img src="assets/img/icons/lock.png" class="prefix" style="width: 20px">');
	const inputCode = $('<input type="password" id="password" required>');
	const time = $('<p class="col s8 center-align">Reintentar en </p>');

	container.append(img);
	container.append(h3);
	container.append(text);
	container.append(form);
	form.append(imputCont);
	imputCont.append(i);
	imputCont.append(inputCode);
	form.append(time);

	form.on("keyup",(e)=> {
		//e.preventDefault();
		if(inputCode.val() == state.code){
			console.log("ok");
		} else {
			console.log("err");
		}
	});

	return container;
}
