//Primer Conjunto
const TextBoxA = document.getElementById('TextboxA'); //Textbox donde se introducen los elementos del C1
const AddButtonA = document.getElementById('Button-Add-A'); //Botón de Agregar del C1
const OutputA = document.getElementById('OutputA');//Card donde se muestran los elementos agregagos
const SetA = new Set();//Creacion del Conjunto vacío para posteriormente agregarle el contenido del Card C1

//Segundo Conjunto
const TextBoxB = document.getElementById('TextboxB');//Textbox donde se introducen los elementos del C2
const AddButtonB = document.getElementById('Button-Add-B');//Botón de Agregar del C2
const OutputB = document.getElementById('OutputB')//Card donde se muestran los elementos agregagos
const SetB = new Set();//Creacion del Conjunto vacío para posteriormente agregarle el contenido del Card C2

//Operaciones
//Union Output
const out3 = document.getElementById('OutputUnion')
const out4 = document.querySelectorAll('#OutputUnion');//Card de la Union

const btn3 = document.getElementById('btn3');//Botón de la Card de Union

//Botones
AddButtonA.addEventListener('click', fun1);//Linea para que al oprimirse el botón se ejcute la funcion de C1
AddButtonB.addEventListener('click', fun2);//Linea para que al oprimirse el botón se ejcute la funcion de C2

//Funciones
function fun1() {
  // Crear un elemento <img> con la imagen del botón de cancelar
  const cancelButton = document.createElement('img');
  cancelButton.src = './Assets/Cancel-Button.svg';

  // Crear un elemento <span> para contener el valor
  const valueSpan = document.createElement('span');
  valueSpan.innerText = TextBoxA.value;

  // Agregar el botón de cancelar, el espacio y el valor al elemento 'OutputA'
  OutputA.appendChild(cancelButton);
  OutputA.appendChild(valueSpan);

  // Agregar el evento click al botón de cancelar para eliminar el valor correspondiente
  cancelButton.addEventListener('click', function() {
    // Eliminar el valor del conjunto SetA
    SetA.delete(valueSpan.innerText);
    // Eliminar el elemento del DOM
    OutputA.removeChild(cancelButton);

    OutputA.removeChild(valueSpan);
  });

  // Agregar el valor al conjunto SetA
  SetA.add(TextBoxA.value);

  // Limpiar el valor del TextBoxA
  TextBoxA.value = '';
}


function fun2() {
  // Crear un elemento <img> con la imagen del botón de cancelar
  const cancelButton = document.createElement('img');
  cancelButton.src = './Assets/Cancel-Button.svg';

  // Crear un elemento <span> para contener el valor
  const valueSpan = document.createElement('span');
  valueSpan.innerText = TextBoxB.value;

  // Agregar el botón de cancelar, el espacio y el valor al elemento 'OutputA'
  OutputB.appendChild(cancelButton);
  OutputB.appendChild(valueSpan);

  // Agregar el evento click al botón de cancelar para eliminar el valor correspondiente
  cancelButton.addEventListener('click', function() {
    // Eliminar el valor del conjunto SetB
    SetB.delete(valueSpan.innerText);
    // Eliminar el elemento del DOM
    OutputB.removeChild(cancelButton);
    OutputB.removeChild(valueSpan);
  });

  // Agregar el valor al conjunto SetB
  SetB.add(TextBoxB.value);

  // Limpiar el valor del TextBoxB
  TextBoxB.value = '';
}

//Version vieja de fun1 y fun2:
function fun2Deprected() { //Función para que cuando se oprima el botón de C2 se imprima en el Card C2 y a su vez agregue el mismo elemento al conjunto creado para él.
  OutputB.innerHTML += TextBoxB.value + "\n";//Ésta línea imprime los elementos escritos en el texbox C2 en el Card C2
  SetB.add(TextBoxB.value);//Ésta linea agrega lo escrito en el textbox C2 en el conjunto C2
  if (TextBoxB.value != "") {
    TextBoxB.value = "";
  }
}

// Obtener referencia al elemento div con clase 'Cardinalidad'
const cardinalidadDiv = document.querySelector('.SetA .Cardinality-Value');
const cardinalidadBDiv = document.querySelector('.Cardinality-ValueB');

// Función para actualizar la cardinalidad del conjunto
function actualizarCardinalidad() {
  const cardinalidad = SetA.size;
  const cardinalidadFormateada = String(cardinalidad).padStart(3, '0');
  cardinalidadDiv.textContent = `  ${cardinalidadFormateada}`;
  const cardinalidadB = SetB.size;
  const cardinalidadFormateadaB = String(cardinalidadB).padStart(3, '0');
  cardinalidadBDiv.textContent = `  ${cardinalidadFormateadaB}`;
}


// Llamar a la función inicialmente para mostrar la cardinalidad inicial
actualizarCardinalidad();

// Agregar un listener al conjunto SetA para detectar cambios y actualizar la cardinalidad
SetA.add = function () {
  Set.prototype.add.apply(this, arguments);
  actualizarCardinalidad();
};

SetA.delete = function () {
  Set.prototype.delete.apply(this, arguments);
  actualizarCardinalidad();
};
SetB.add = function () {
  Set.prototype.add.apply(this, arguments);
  actualizarCardinalidad();
};

SetB.delete = function () {
  Set.prototype.delete.apply(this, arguments);
  actualizarCardinalidad();
};



//Union de conjuntos
//Mi CODIGO VIEJO
//function funUnionDEPECRADOs(){ //Función que realiza la operación UNION de los conjuntos al hacer click al Botón Union
//out3.innerHTML += txt2.splits(" ");;
//	const  set = new Set([...SetA, ...SetB]);
//	const myArr = Array.from(set) //Para poder imprimir el conjunto Union "set"
//out3.innerHTML += myArr
//	for(var i=0; i<myArr.length; i++){ //For para imprimir en forma de lista
//	 out3.innerHTML+= myArr[i]+"<br>";
//					}   
//}
//CODIGO NUEVO
function funUnion() {
  const set = new Set([...SetA, ...SetB]);
  const myArr = Array.from(set);
  const outputsUnion = document.querySelectorAll('#OutputUnion');

  outputsUnion.forEach(output => {
    output.innerHTML = ""; // Limpiamos el contenido existente en cada elemento
    myArr.forEach(item => {
      const newItem = document.createElement('span');
      newItem.textContent = item;
      const space = document.createTextNode(' '); // Agregamos un espacio
      const lineBreak = document.createElement('br');
      output.appendChild(newItem);
      output.appendChild(space);
      output.appendChild(lineBreak);
    });
  });

}

//Interseccion de Conjuntos
function funIntersection() {
  const intersection = Array.from(SetA).filter(element => SetB.has(element));
  const outputs = document.querySelectorAll('#OutputIntersection');

  outputs.forEach(output => {
    output.innerHTML = ""; // Limpiamos el contenido existente en cada elemento
    intersection.forEach(item => {
      const newItem = document.createElement('span');
      newItem.textContent = item;
      const lineBreak = document.createElement('br');
      output.appendChild(newItem);
      output.appendChild(lineBreak);
    });
  });
}

//Diferencia Simetrica
function funSymmetricDifference() {
  const differenceAB = Array.from(SetA).filter(element => !SetB.has(element));
  const differenceBA = Array.from(SetB).filter(element => !SetA.has(element));
  const symmetricDifference = [...differenceAB, ...differenceBA];
  const outputs = document.querySelectorAll('#OutputSymmetricDifference');

  outputs.forEach(output => {
    output.innerHTML = ""; // Limpiamos el contenido existente en cada elemento
    symmetricDifference.forEach(item => {
      const newItem = document.createElement('span');
      newItem.textContent = item;
      const lineBreak = document.createElement('br');
      output.appendChild(newItem);
      output.appendChild(lineBreak);
    });
  });
}

//Diferencia A-B
function funSetDifferenceA() {
  const difference = Array.from(SetA).filter(element => !SetB.has(element));
  const outputs = document.querySelectorAll('#OutputSetDifferenceA');

  outputs.forEach(output => {
    output.innerHTML = ""; // Limpiamos el contenido existente en cada elemento
    difference.forEach(item => {
      const newItem = document.createElement('span');
      newItem.textContent = item;
      const lineBreak = document.createElement('br');
      output.appendChild(newItem);
      output.appendChild(lineBreak);
    });
  });
}
//Diferencia B-A
function funSetDifferenceB() {
  const difference = Array.from(SetB).filter(element => !SetA.has(element));
  const outputs = document.querySelectorAll('#OutputSetDifferenceB');

  outputs.forEach(output => {
    output.innerHTML = ""; // Limpiamos el contenido existente en cada elemento
    difference.forEach(item => {
      const newItem = document.createElement('span');
      newItem.textContent = item;
      const lineBreak = document.createElement('br');
      output.appendChild(newItem);
      output.appendChild(lineBreak);
    });
  });
}
function funDisjointness() {
  const isDisjoint = [...SetA].every(element => !SetB.has(element));

  const output = document.getElementById('OutputDisjointness');
  output.innerHTML = isDisjoint ? "Los conjuntos son disjuntos." : "Los conjuntos no son disjuntos.";

  console.log("¿Los conjuntos son disjuntos?", isDisjoint);
}
//Producto Cartesiano
function funCartesianProduct() {
  const cartesianProduct = [];

  SetA.forEach(itemA => {
    SetB.forEach(itemB => {
      cartesianProduct.push([itemA, itemB]);
    });
  });

  const output = document.getElementById('OutputCartesianProduct');

  output.innerHTML = ""; // Limpiamos el contenido existente

  cartesianProduct.forEach(item => {
    const newItem = document.createElement('span');
    newItem.textContent = "[" + item[0] + ", " + item[1] + "]";
    const lineBreak = document.createElement('br');
    output.appendChild(newItem);
    output.appendChild(lineBreak);
  });

  console.log(cartesianProduct);
}







//OUTPUTS:

//Enters
TextBoxA.addEventListener("keyup", (event) => { //Código para que se ejecute la función de C1 con ENTER
  if (event.keyCode === 13) {
    fun1();
  }
});
TextBoxB.addEventListener("keyup", (event) => { //Código para que se ejecute la función de C2 con ENTER
  if (event.keyCode === 13) {
    fun2();
  }
});

//TAP
//ESTA PARTE DEL CODIGO HACE QUE EL EFECTO HOVER SE MANTENGA AL HACER TAP O SE DESACTIVE AL HACER TAP EN OTRA PARTE

let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function () {
    // Si esta tarjeta ya está activa, no hagas nada
    if (this.classList.contains('active')) {
      return;
    }
    // Busca la tarjeta activa actual (si existe) y desactívala
    let activeCard = document.querySelector('.card.active');
    if (activeCard) {
      activeCard.classList.remove('active');
      activeCard.querySelector('.Close-Button').style.display = 'none';
      activeCard.querySelector('.Cardinalidad').style.opacity = '0';
    }
    // Activa esta tarjeta
    this.classList.add('active');
    this.querySelector('.Close-Button').style.display = 'flex';
    this.querySelector('.Cardinalidad').style.opacity = '1';
  });
});

document.addEventListener('click', function (event) {
  // Si se hace clic en otra parte de la página que no sea una tarjeta activa, desactiva la tarjeta activa actual
  if (!event.target.closest('.card') && document.querySelector('.card.active')) {
    document.querySelector('.card.active').classList.remove('active');
    document.querySelectorAll('.Close-Button').forEach(button => {
      button.style.display = 'none';
    });
    document.querySelectorAll('.Cardinalidad').forEach(button => {
      button.style.opacity = '0';
    });
  }
  
  // Si se hace clic en un elemento 'Close-Button', desactiva la tarjeta correspondiente
  if (event.target.closest('.Close-Button')) {
    let closeBtn = event.target.closest('.Close-Button');
    let card = closeBtn.closest('.card');
    card.classList.remove('active');
    closeBtn.style.display = 'none';
    card.style.pointerEvents = 'none';

    setTimeout(function () {
      card.style.pointerEvents = 'auto';
    }, 1000);
  }
});



//TAP



btn3.addEventListener('click', function () {             //Al hacer clic en el Boton "GO":
  encoger();                                          //Se reproduce la animacion donde se desplaza a la pagina de "results"
  funUnion();                                        //Se hace el calculo de la Union de conjuntos
  funIntersection();                                //Se hace el calculo de la Interseccion
  funSymmetricDifference();
  funSetDifferenceA();
  funSetDifferenceB();
  funCartesianProduct();
  funDisjointness();
  document.body.classList.add('change-background');//Se cambia el color de fondo, blanco a oscuro
});



