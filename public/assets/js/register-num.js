'use strict';
const validateNumber = (update) => {
	const container = $('<div></div>');
	const img = $('<img src="assets/img/icons/phone.png">');
	const h3 = $('<h3>Para comenzar validemos tu numero</h3>');
	const text = $('<p>Recibirás un SMS con un código de validación.</p>');
	const form = $('<form></form>');
	const inputNum = $('<input type="text" required>');
	const checkTerms = $('<input type="checkbox"><span> Acepto los términos y condiciones.</span>');
	const errorText = $('<p class="error"></p>');
	const btnContinue = $('<input type="submit" value="Continuar">');

	container.append(img);
	container.append(h3);
	container.append(text);
	container.append(form);
	form.append(inputNum);
	form.append(checkTerms);
	form.append(errorText);
	form.append(btnContinue);

	btnContinue.on('click', (e) => {
		e.preventDefault();

		let validate = () => {
			let result = "false";

 			if (/^\d{9}$/.test(inputNum.val()) && checkTerms.prop('checked')) {
				result = "true";
			}
			return result;
		}
		let validation = validate();

		if (validation == "true") {
			errorText.text("");
			state.viewScreen = "validateCode";
			update();
		} else {
			errorText.text("Completar todos los campos de manera correcta.");
		}

	});

	return container;
}
