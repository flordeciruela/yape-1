'use strict';

const Success = (update) => {
	const container = $('<div class="center-align valign-wrapper col l12" id="success"></div>');
	const wrap = $('<div class="col s12 text-purple"></div>');
	const img = $('<img src="assets/img/icons/check.png" class="col s6 offset-s3">');
	const success = $('<h5 class="col s12">¡Bien!</h5>');
	const h5 = $('<h5 class="col s12">Ahora puedes usar Yape</h5>');

	container.append(wrap);
	wrap.append(img);
	wrap.append(success);
	wrap.append(h5);

	setTimeout(function(){
		state.viewScreen = "CardRegister";
		update();
		console.log(state.viewScreen);
	}, 3000);
	return container;
}
