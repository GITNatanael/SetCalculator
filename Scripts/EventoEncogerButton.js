

//Cuando se da clic en el boton "Operate", el Contenedor de las esferas se encoje , las esferas se desplazan
function encoger() {
	const ContenedorSets = $("#ContenedorSets");
	const Instructions = $("#Instructions");
	const ContenedorOperaciones = $("#ContenedorOperaciones");

	const Grid2 = $("#Grid2");
	const contenedorRect = Grid2.get(0).getBoundingClientRect();
	const elementoRect = ContenedorSets.get(0).getBoundingClientRect();

	const tarjeta1 = $("#SetA");
	const tarjeta2 = $("#SetB");
	const BotonGO = $("#btn3");
	const DivText = $(".Help-Text");

	const blurcard = $(".blur");
	// Referencia al elemento video
	const videoElement = document.querySelector('#ContenedorSets video');

	const promesasTarjetas = [
		new Promise((resolve) => {
			tarjeta1.css({
				transform: "translate(100px,0)",
				position: "relative",
				opacity: "0.0",
			});
			Instructions.css("opacity", "0");
			DivText.css("opacity", "0");
			BotonGO.css("opacity", "0");
			$('.Header-Right').css({		
				'display': 'none'
			  });
			tarjeta1.one("transitionend", resolve);
			
			  
		}),
		new Promise((resolve) => {
			tarjeta2.css({
				position: "relative",
				transform: "translate(-100px,0)",
				opacity: "0.0",
			});
			tarjeta2.one("transitionend", resolve);
		}),
	];

	Promise.all(promesasTarjetas).then(() => {
		ContenedorSets.css({
			transition: "all 1.0s ease-in-out",
			transform: "scale(0.5) translate(calc(100vw - 50%), calc(-100vh + 50%))",
			position: "fixed",
			"z-index": "1",
			width: "600px",
			"margin-right": "5rem",

		});

		ContenedorOperaciones.css({
			opacity: "1",
			display: "grid",
		});
		Instructions.css("display", "none");
		DivText.css("display", "none");
		BotonGO.css("display", "none");

		videoElement.style.opacity = '1';
		Grid2.css({
			height: "80%",
			"z-index": "-1",
		});

		$('.Expand-icon').css('z-index', 42);

		tarjeta1.addClass("disable-hover");
		tarjeta2.addClass("disable-hover");
		
		$('.Logo.Black').css({		//Altera el color del logo
			'opacity': '0'
		  });
		$('.Logo.White').css({		//Altera el color del logo
			'opacity': '1'
		});
		$('.menu-list').css({		//Altera el color de los enlaces del menu
			'filter': 'invert(100%)'
		  });
		  $('.target').css({		//Altera el color de la barrita deslizadora
			'filter': 'invert(100%)'
		  });
		  $('.Header-Right').css({		//Altera el color de la barrita deslizadora
			'display': 'none'
		  });
		  


		ContenedorSets.mouseover(function () {  //Hover en el Contenedor de Sets
			$('.Expand-icon').css('opacity', 1); //El icono Expand se muestre
		});
		ContenedorSets.mouseout(function () { //Al remover el mouse del Contenedor de Sets
			$('.Expand-icon').css('opacity', 0);//El icono Expand se oculte
		});

		ContenedorSets.click(function () {
			ContenedorSets.css({
				transform: "scale(1.0) translate(0,calc(50vh - 100%))",
				background: "#262626",
				width: "80%",
				"margin-right": "0",
			});
			tarjeta1.css("transform", "translate(-10px,0)");
			tarjeta2.css("transform", "translate(10px,0)");
			tarjeta1.css("opacity", "1");
			tarjeta2.css("opacity", "1");
			blurcard.css("opacity", "1");
			videoElement.style.opacity = '0';
			$('.Expand-icon').css('display', 'none');
			$('.Background-Blur').css('display', 'inline');
			$('.mynav').css({ 
				'position': 'relative' ,
				'z-index': '-1' ,
		});
		});

		$(document).click(function (event) {
			if (!$(event.target).closest('#ContenedorSets').length) {
				// El clic ocurrió fuera del ContenedorSets

				ContenedorSets.css({
					transform: "scale(0.5) translate(calc(100vw - 50%), calc(-100vh + 50%))",
					background: "#262626",
					width: "600px",
					"margin-right": "5rem",
				});
				tarjeta2.css("transform", "translate(-100px,0)");
				tarjeta1.css("transform", "translate(100px,0)");
				tarjeta1.css("opacity", "0.0");
				tarjeta2.css("opacity", "0.0");
				blurcard.css("opacity", "0");
				videoElement.style.opacity = '1';
				$('.Expand-icon').css('display', 'flex');
				$('.Background-Blur').css('display', 'none');
				$('.mynav').css({ 
					'position': 'static' ,
					'z-index': '0' ,
			});
			}
		});
	});



	//Esilos Para Dispositivos Moviles
	$(document).ready(function () {
		// Verificar el ancho de la ventana al cargar la página
		if ($(window).width() <= 768) {
			// Estilos específicos para dispositivos con resolución máxima de 768px
			Promise.all(promesasTarjetas).then(() => {

				ContenedorSets.css({
					transition: "all 1.0s ease-in-out",
					transform: "scale(0.2) translate(calc(200vw + 10%), calc(-150vh + 0%))",
					position: "fixed",
					"z-index": "1",
					"margin-right": "5rem",
				});

				ContenedorSets.mouseover(function () {  //Hover en el Contenedor de Sets
					$('.Expand-icon').css('opacity', 1); //El icono Expand se muestre
				});
				ContenedorSets.mouseout(function () { //Al remover el mouse del Contenedor de Sets
					$('.Expand-icon').css('opacity', 0);//El icono Expand se oculte
				});

				ContenedorSets.click(function () {
					ContenedorSets.css({
						background: "#262626",
						width: "80%",
						"margin-right": "0",
						display: "flex",
						"justify-content": "space-between",
						width: "90vh",
						transform: "scale(0.5) translate(0,calc(50vh - 100%))",
					});
					tarjeta2.css({
						transform: "scale(1) translate(-10px,0) ",
					});
					tarjeta1.css({
						transform: "scale(1) ",
					});

				});

				$(document).click(function (event) {
					if (!$(event.target).closest('#ContenedorSets').length) {
						// El clic ocurrió fuera del ContenedorSets

						ContenedorSets.css({
							transform: "scale(0.2) translate(calc(200vw + 10%), calc(-150vh + 0%))",
							width: "600px",
							"margin-right": "5rem",
						});
					}
				});
			});
		}//Fin del if de verificar el ancho de la pantalla al cargar la pagina

		// Verificar el ancho de la ventana al cambiar su tamaño
		$(window).resize(function () {
			if ($(window).width() <= 768) {
				// Estilos específicos para dispositivos con resolución máxima de 768px
				Promise.all(promesasTarjetas).then(() => {

					ContenedorSets.css({
						transition: "all 1.0s ease-in-out",
						transform: "scale(0.3) translate(calc(100vw + 10%), calc(-100vh + 0%))",
						position: "fixed",
						"z-index": "1",
						"margin-right": "5rem",
					});

					ContenedorSets.mouseover(function () {  //Hover en el Contenedor de Sets
						$('.Expand-icon').css('opacity', 1); //El icono Expand se muestre
					});
					ContenedorSets.mouseout(function () { //Al remover el mouse del Contenedor de Sets
						$('.Expand-icon').css('opacity', 0);//El icono Expand se oculte
					});

					ContenedorSets.click(function () {
						ContenedorSets.css({
							background: "#262626",
							width: "80%",
							"margin-right": "0",
							display: "flex",
							"justify-content": "space-between",
							width: "90vh",
							transform: "scale(0.9) translate(0,calc(50vh - 100%))",
						});
						tarjeta2.css({
							transform: "scale(0.8) translate(-10px,0) ",
						});
						tarjeta1.css({
							transform: "scale(0.8) ",
						});

					});

					$(document).click(function (event) {
						if (!$(event.target).closest('#ContenedorSets').length) {
							// El clic ocurrió fuera del ContenedorSets

							ContenedorSets.css({
								transform: "scale(0.3) translate(calc(100vw + 10%), calc(-100vh + 0%))",
								width: "600px",
								"margin-right": "5rem",
							});
						}
					});
				});

			} else {
				// Restablecer estilos para resoluciones mayores a 768px
				Promise.all(promesasTarjetas).then(() => {
					ContenedorSets.css({
						transition: "all 1.0s ease-in-out",
						transform: "scale(0.5) translate(calc(100vw - 50%), calc(-100vh + 50%))",
						position: "fixed",
						"z-index": "1",
						width: "600px",
						"margin-right": "5rem",

					});

					ContenedorOperaciones.css({
						opacity: "1",
						display: "grid",
					});
					Instructions.css("display", "none");
					DivText.css("display", "none");
					BotonGO.css("display", "none");

					videoElement.style.opacity = '1';
					Grid2.css({
						height: "80%",
						"z-index": "-1",
					});

					$('.Expand-icon').css('z-index', 42);

					tarjeta1.addClass("disable-hover");
					tarjeta2.addClass("disable-hover");



					ContenedorSets.mouseover(function () {  //Hover en el Contenedor de Sets
						$('.Expand-icon').css('opacity', 1); //El icono Expand se muestre
					});
					ContenedorSets.mouseout(function () { //Al remover el mouse del Contenedor de Sets
						$('.Expand-icon').css('opacity', 0);//El icono Expand se oculte
					});

					ContenedorSets.click(function () {
						ContenedorSets.css({
							transform: "scale(1.0) translate(0,calc(50vh - 100%))",
							background: "#262626",
							width: "80%",
							"margin-right": "0",
						});
						tarjeta1.css("transform", "translate(-10px,0)");
						tarjeta2.css("transform", "translate(10px,0)");
						tarjeta1.css("opacity", "1");
						tarjeta2.css("opacity", "1");
						blurcard.css("opacity", "1");
						videoElement.style.opacity = '0';
						$('.Expand-icon').css('display', 'none');
					});

					$(document).click(function (event) {
						if (!$(event.target).closest('#ContenedorSets').length) {
							// El clic ocurrió fuera del ContenedorSets

							ContenedorSets.css({
								transform: "scale(0.5) translate(calc(100vw - 50%), calc(-100vh + 50%))",
								background: "#262626",
								width: "600px",
								"margin-right": "5rem",
							});
							tarjeta2.css("transform", "translate(-100px,0)");
							tarjeta1.css("transform", "translate(100px,0)");
							tarjeta1.css("opacity", "0.0");
							tarjeta2.css("opacity", "0.0");
							blurcard.css("opacity", "0");
							videoElement.style.opacity = '1';
							$('.Expand-icon').css('display', 'flex');
						}
					});//Fin del evento clic alrededor del contenedor Sets
				});//Fin de la Promesa

			}	//Fin del else
		});	//Fin de la funcion rezise para verificar el ancho de la ventana al cambiar su tamaño
	});	//Fin de la funcion general para resoluciones de Dispositivos Moviles

	//Aumentar la Velocidad de los Videos Iconos de los Resultados
	const videos = $('.Tarjeta video');

	videos.each(function () {
		const video = $(this);
		video[0].playbackRate = 2;
	});

} //Aqui acaba la funcion Encoger()

