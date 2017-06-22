'use strict';
const Hello = (update) => {
	const container = $('<div id="hello" class="col l12"></div>');
	const header = $('<div class="col s12 center-align" id="header"></div>');
	const iHeader = $('<img src="assets/img/icons/engine.png" id="engine" class="right">');
	const img = $('<img src="assets/img/icons/happy-face.png" class="col s4 offset-s4">');
	const h5 = $('<h5 class="col s12 bullet-gray-text">Hola</h5>');
	const link = $('<div class="col s12 text-green-a"><img src="assets/img/icons/eye.png" style="width: 16px"><span> Mostrar Saldo</span></div>');
	const main = $('<div class="col s12" id="main-hello"></div>');
	const acount = $('<span class="left bullet-gray-text">ÚLTIMOS MOVIMIENTOS</span><img src="assets/img/icons/right-arrow-circular-button.png" class="right" style="width: 20px">');
	const divider = $('<hr class="col s12">');
	const hero = $('<div class="col s11 light-gray-text" id="hero"></div>');
	const ihero = $('<img src="assets/img/icons/icon.png" class="responsive-img col s5">');
	const h6 = $('<h6>¿Aún no realizas tu primer pago?</h6>');
	const p = $('<h6>Es rápido y sencillo</h6>');
	const pay = $('<div class="col s12 bullet-gray-text"></div>');
	const send = $('<div class="col s3 center-align left"><img src="assets/img/icons/send.png" class="responsive-img"><span>ENVIAR PAGO</span></div>');
	const receive = $('<div class="col s3 center-align right"><img src="assets/img/icons/code-qr.png" class="responsive-img"><span>RECIBIR PAGO</span></div>');

	container.append(iHeader);
	container.append(header);
	header.append(img);
	header.append(h5);
	header.append(link);
	container.append(main);
	main.append(acount);
	main.append(divider);
	main.append(hero);
	hero.append(ihero);
	hero.append(h6);
	hero.append(p);
	main.append(pay);
	pay.append(send);
	pay.append(receive);

	return container;
}
