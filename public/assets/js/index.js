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
				break;
		case "createUser":
				wrapper.append(createUser(_ => render(root)));
				break;
		case "Success":
				wrapper.append(Success(_ => render(root)));
				break;
		case "CardRegister":
				wrapper.append(CardRegister(_ => render(root)));
				break;
		case "CardPassword":
				wrapper.append(CardPassword(_ => render(root)));
				break;
		case "Hello":
				wrapper.append(Hello(_ => render(root)));
    //default:
    //   recargar inicio
	}
  root.append(wrapper);
}

const state = {
	viewScreen: null,
  phone: null,
  terms: false,
  code: null,
	name: null,
	email: null,
	pass: null,
	cardNumber: null,
	cardMonth: null,
	cardYear: null,
	cardPassword: null
}

$( _ => {

	const root = $("#root");
	render(root);

  $('.owl-carousel').owlCarousel({
      margin:30,
      loop:true,
      items:1,
      dots: true
  });
});
