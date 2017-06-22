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
