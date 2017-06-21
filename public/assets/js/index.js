'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper row"></div>');

	switch(state.viewScreen) {
    case null:
        wrapper.append(Init(_ => render(root)));
        break;
    case "validateNumber":
        wrapper.append(validateNumber(_ => render(root)));
        break;
		case "validateCode":
				wrapper.append(validateCode(_ => render(root)));
    //default:
    //   recargar inicio
	}

  root.append(wrapper);
}

const state = {
	viewScreen: null,
  phone: null,
  terms: false,
  code: null
}

$( _ => {
  /*
 //funcion que valida los parametros del req y retorna el resultado:
	$.post('api/registerNumber', { phone: "000000001", terms: true }, function(response) {
		console.log(response);
	});
*/
	const root = $("#root");
	render(root);

  $('.owl-carousel').owlCarousel({
      margin:30,
      loop:true,
      items:1,
      dots: true
  });
});
