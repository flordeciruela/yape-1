'use strict';
const validateNumber = (update) => {
	const container = $('<div class"row"></div>');
	const img = $('<img src="assets/img/icons/phone.png">');
	const h3 = $('<h3>Para comenzar validemos tu numero</h3>');
	const text = $('<p>Recibirás un SMS con un código de validación.</p>');
	const form = $('<form class="col s8"></form>');
	const inputNum = $('<input type="text" required>');
	const checkTerms = $('<input type="checkbox" class="filled-in" id="filled-in-box"/><label for="filled-in-box"> Acepto los términos y condiciones.</label>');
	const errorText = $('<p class="error"></p>');
	const btnContinue = $('<button>Continuar</button>');
	btnContinue.attr('disabled', true);

	container.append(img);
	container.append(h3);
	container.append(text);
	container.append(form);
	form.append(inputNum);
	form.append(checkTerms);
	form.append(errorText);
	form.append(btnContinue);

	form.on("change",(e)=> {
		e.preventDefault();
		console.log(inputNum.val());
		if(/^\d{9}$/.test(inputNum.val()) && checkTerms.prop('checked')){
			btnContinue.attr('disabled', false);
			errorText.text("");
		}else{
			btnContinue.attr('disabled', true);
			errorText.text("Completar todos los campos de manera correcta.");
		}
	});

	btnContinue.on("click",(e)=>{
		e.preventDefault();

		$.post("api/registerNumber", {phone: inputNum.val(), terms: true}, function(response){
        if(response.success){
          console.log(response.success);
          state.phone = response.data.phone;
          state.code = response.data.code;
					state.viewScreen = "validateCode";
					console.log(state.viewScreen);
          //update();
        }else{
					errorText.text(response.message);
        }
    });

	});

	return container;
}
