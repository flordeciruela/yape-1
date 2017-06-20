'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

	switch(state.viewScreen) {
    case null:
        wrapper.append(Init(_ => render(root)));
        break;
    case "validateNumber":
        wrapper.append(validateNumber(_ => render(root)));
        break;
		case "validateCode":
				alert("Print next screen: Code register");
    //default:
    //   recargar inicio
	}

  root.append(wrapper);
}

const state = {
	viewScreen: null
}

$( _ => {
	/* //funcion que valida los parametros del req y retorna el resultado:
	$.post('api/registerNumber', { phone: "123456789", terms: true }, function(response) {
		console.log(response);
	});
	*/
	const root = $("#root");
	render(root);
});
