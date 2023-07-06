
//Primer Conjunto
const txt1= document.getElementById('input1'); //Textbox donde se introducen los elementos del C1
const btn1= document.getElementById('btn1'); //Botón de Agregar del C1
const out1= document.getElementById('output1');//Card donde se muestran los elementos agregagos
const  firstSet = new Set();//Creacion del Conjunto vacío para posteriormente agregarle el contenido del Card C1

//Segundo Conjunto
const txt2= document.getElementById('input2');//Textbox donde se introducen los elementos del C2
const btn2= document.getElementById('btn2');//Botón de Agregar del C2
const out2= document.getElementById('output2')//Card donde se muestran los elementos agregagos
const  secondSet = new Set();//Creacion del Conjunto vacío para posteriormente agregarle el contenido del Card C2

//Operaciones
//Union Output
const txt3= document.getElementById('input2'+ 'input1');//No es un textbox, simplemente es una variable que une las palabras en los Cards del C1 Y C2
const out3= document.getElementById('output3')//Card de la Union
const btn3= document.getElementById('btn3');//Botón de la Card de Union

//Funciones
function fun1(){ //Función para que cuando se oprima el botón de C1 se imprima en el Card C1 y a su vez agregue el mismo elemento al conjunto creado para él.
	out1.innerHTML += txt1.value + "\n";//Ésta línea imprime los elementos escritos en el texbox C1 en el Card C1
	firstSet.add(txt1.value);//Ésta linea agrega lo escrito en el textbox C1 en el conjunto C1
	if (txt1.value !="") {
            txt1.value = "";}
}



function fun2(){ //Función para que cuando se oprima el botón de C2 se imprima en el Card C2 y a su vez agregue el mismo elemento al conjunto creado para él.
	out2.innerHTML += txt2.value + "\n";//Ésta línea imprime los elementos escritos en el texbox C2 en el Card C2
	secondSet.add(txt2.value);//Ésta linea agrega lo escrito en el textbox C2 en el conjunto C2
	if (txt2.value !="") {
            txt2.value = "";}
	}


	//Union de conjuntos
	function funUnion(){ //Función que realiza la operación UNION de los conjuntos al hacer click al Botón Union
		//out3.innerHTML += txt2.splits(" ");;
		const  set = new Set([...firstSet, ...secondSet]);
		const myArr = Array.from(set) //Para poder imprimir el conjunto Union "set"
		//out3.innerHTML += myArr
		for(var i=0; i<myArr.length; i++){ //For para imprimir en forma de lista
		 out3.innerHTML+= myArr[i]+"<br>";
						}
		console.log(txt1.value);
		console.log(txt2.value);
		console.log(myArr);
	}


//OUTPUTS:
//Botones
btn1.addEventListener('click',fun1);//Linea para que al oprimirse el botón se ejcute la funcion de C1
btn2.addEventListener('click',fun2);//Linea para que al oprimirse el botón se ejcute la funcion de C2
btn3.addEventListener('click',funUnion);//Botón que ejecuta la UNION

//Enters
txt1.addEventListener("keyup", (event) => { //Código para que se ejecute la función de C1 con ENTER
  if (event.keyCode === 13) {
    fun1();
  }
});
txt2.addEventListener("keyup", (event) => { //Código para que se ejecute la función de C2 con ENTER
  if (event.keyCode === 13) {
    fun2();
  }
});


 function animation() {
    var SetA = document.getElementById('SetA');

    SetA.style.position= 'relative';
    SetA.style.left = "200px";
    
    }

   function frames(){
   	const tarjeta1 = document.getElementById("SetA");
	const tarjeta2 = document.getElementById("SetB");
   	const animacion = tarjeta1.animate([
   		//keyframes
   		{transform:"translate(0,0)"},
   		{transform:"translate(-100%,-100%)"}
   	],{
   		//options
   		easing:"linear",
   		iterations:1,
   		duration:200 //milisegundos
   	});

   	return animacion.finished;
   } 

   function displace(){
   	frames()
   	.then((res)=>{
   		console.log(res);
   	})
   }

function encoger() {

	const ContenedorSets = document.getElementById("ContenedorSets");
	const Instructions = document.getElementById("Instructions");
	const ContenedorOperaciones = document.getElementById("ContenedorOperaciones");

	var Grid2 = document.getElementById("Grid2");
	  	var contenedorRect = Grid2.getBoundingClientRect();
  		var elementoRect = ContenedorSets.getBoundingClientRect();


	const tarjeta1 = document.getElementById("SetA");
	const tarjeta2 = document.getElementById("SetB");

	const blurcard = document.querySelector(".blur");//Div con desenfoque, para cuando se hace hover en ContenedorSets
	const animationBackground = document.querySelector(".animation-background");

	
	
		

			btn3.style.opacity='0.5';
			Instructions.style.opacity="0";



	  	ContenedorSets.style.transition = "all 1.0s ease-in-out";
	  	ContenedorSets.style.transform = "scale(0.5) translate(calc(100vw - 50%), calc(-100vh + 110%))";
	  	ContenedorSets.style.position = "fixed";
	  	ContenedorOperaciones.style.opacity="1";
	  	ContenedorOperaciones.style.transform = "translateY(0)";

	  	//Estas 2 lineas desactivan el comportamiento hover de las card tras la animacion
	  	tarjeta1.classList.add('disable-hover'); 
	  	tarjeta2.classList.add('disable-hover');



	  	ContenedorSets.addEventListener('mouseover', function() {
		  // Acciones que se realizan al pasar el cursor por encima del elemento
		  ContenedorSets.style.transform = 'scale(1.0) translate(0,calc(50vh - 50%))';
		  ContenedorSets.style.background = 'white';

		  blurcard.style.opacity= "1";//Activa el blur en el fondo

			});

	  	ContenedorSets.addEventListener('mouseout', function() {
		  // Acciones que se realizan al quitar el cursor del elemento
		  ContenedorSets.style.transform = 'scale(0.5) translate(calc(100vw - 50%), calc(-100vh + 110%))';
		  ContenedorSets.style.background = 'transparent';
		  blurcard.style.opacity= "0";//Desactiva el blur en el fondo
		});
	  	



}


//TAP
//ESTA PARTE DEL CODIGO HACE QUE EL EFECTO HOVER SE MANTENGA AL HACER TAP O SE DESACTIVE AL HACER TAP EN OTRA PARTE

let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    // Si esta tarjeta ya está activa, no hagas nada
    if (this.classList.contains('active')) {
      return;
    }
    // Busca la tarjeta activa actual (si existe) y desactívala
    let activeCard = document.querySelector('.card.active');
    if (activeCard) {
      activeCard.classList.remove('active');
    }
    // Activa esta tarjeta
    this.classList.add('active');
  });
});

document.addEventListener('click', function(event) {
  // Si se hace clic en otra parte de la página que no sea una tarjeta activa, desactiva la tarjeta activa actual
  if (!event.target.closest('.card') && document.querySelector('.card.active')) {
    document.querySelector('.card.active').classList.remove('active');
  }
});

//TAP



btn3.addEventListener('click',function() {
  encoger();
  // displace();
   document.body.classList.add('change-background');
});

