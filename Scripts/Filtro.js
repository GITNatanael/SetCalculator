//PREFERENCIAS "," " " "{}""
const preferencesButtonA = document.querySelector('.SetA .Preferences-Button');
const preferencesButtonIMGA = document.querySelectorAll('.SetA .Preferences-Button img');
const preferencesMenuA = document.querySelector('.SetA .Preferences-Menu');
const colitaA = document.querySelector('.SetA .colita-Dialogo');
const separatorButtonsA = document.querySelectorAll('.SetA .Separator-Button');
let selectedSeparator = /[,\s\r\n]+|\{|\}/; // Separador predeterminado


// Mostrar/ocultar el menú al hacer clic en el botón de preferencias
preferencesButtonA.addEventListener('mousedown', (event) => {
  event.preventDefault(); // Evita que se active el evento click en el documento
  preferencesMenuA.style.display = preferencesMenuA.style.display === 'none' ? 'grid' : 'none';
  colitaA.style.display = colitaA.style.display === 'none' ? 'grid' : 'none';
});


// Activa el efecto activo en la imagen del PREFERENCES BTN
preferencesButtonA.addEventListener('click', () => {
  preferencesButtonIMGA.forEach(button => {
    button.classList.toggle('clicked');
  });
});

// Oculta el efecto activo en la imagen del PREFERENCES BTN al hacer clic fuera del botón
document.addEventListener('click', (event) => {
  if (
    !event.target.closest('.Preferences-Button') &&
    !event.target.closest('.Preferences-Menu') &&
    !event.target.closest('.Separator-Button')
  ) {
    preferencesButtonIMGA.forEach(button => {
      button.classList.remove('clicked');
    });
  }
});


function hidepreferencesMenuA(event) {
  const target = event.target;
  const ispreferencesButtonA = target.closest('.Preferences-Button');
  const ispreferencesMenuA = target.closest('.Preferences-Menu');
  if (!ispreferencesButtonA && !ispreferencesMenuA) {
    preferencesMenuA.style.display = 'none';
    colitaA.style.display = 'none';
  }
}
// Agregar el evento click al documento para ocultar el menú de preferencias, la "colitaA" y ajustar la clase
document.addEventListener('click', hidepreferencesMenuA);

let selectedSeparators = []; // Array para almacenar los separadores seleccionados

// Actualizar el separador seleccionado al hacer clic en los botones de separador
separatorButtonsA.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    const separator = button.getAttribute('data-separator');

    // Verificar si el separador ya está seleccionado
    if (selectedSeparators.includes(separator)) {
      // Si está seleccionado, eliminarlo del array de separadores
      const index = selectedSeparators.indexOf(separator);
      if (index > -1) {
        selectedSeparators.splice(index, 1);
      }
    } else {
      // Si no está seleccionado, agregarlo al array de separadores
      selectedSeparators.push(separator);
    }
    // Actualizar el separador regex según los separadores seleccionados
    selectedSeparator = getSeparatorRegex(selectedSeparators);
  });
});
//SELECTOR
function getSeparatorRegex(separators) {
  let separatorRegex = /[,\s]+|\{|\}/; // Separador predeterminado
  if (separators.includes('comma') && separators.includes('space') && separators.includes('braces')) {
    separatorRegex = /.^/; // No se realiza ninguna separación
  } else if (separators.includes('comma') && separators.includes('space')) {
    separatorRegex = /\{|\}/;
  } else if (separators.includes('comma') && separators.includes('braces')) {
    separatorRegex = /\s+/;
  } else if (separators.includes('space') && separators.includes('braces')) {
    separatorRegex = /,/;
  } else {
    switch (separators.sort().join(',')) {
      case 'comma':
        separatorRegex = /\s+|\{|\}/;
        break;
      case 'space':
        separatorRegex = /,|\{|\}/;
        break;
      case 'braces':
        separatorRegex = /[,\s]+/;
        break;
      default:
        separatorRegex = /[,\s\r\n]+|\{|\}/; // Separador predeterminado
        break;
    }
  }
  return separatorRegex;
}

//Funcion que imprime y agrega valores del SETA
function fun1() {
   // Obtener el valor del TextBoxA y dividirlo en palabras separadas
  const textBoxValue = TextBoxA.value;
  const values = textBoxValue.split(new RegExp(selectedSeparator));

  // Recorrer cada palabra y crear los elementos correspondientes
  values.forEach(value => {
    // Crear un elemento <img> con la imagen del botón de cancelar
    const cancelButton = document.createElement('img');
    cancelButton.src = './Assets/Cancel-Button.svg';

    // Crear un elemento <span> para contener el valor
    const valueSpan = document.createElement('span');
    valueSpan.innerText = value;

    // Agregar el botón de cancelar, el espacio y el valor al elemento 'OutputA'
    OutputA.appendChild(cancelButton);
    OutputA.appendChild(valueSpan);

    // Agregar el evento click al botón de cancelar para eliminar el valor correspondiente
    cancelButton.addEventListener('click', function () {
      // Eliminar el valor del conjunto SetA
      SetA.delete(valueSpan.innerText);
      // Eliminar el elemento del DOM
      OutputA.removeChild(cancelButton);
      OutputA.removeChild(valueSpan);
    });

    // Agregar el valor al conjunto SetA
    SetA.add(value);
  });

  // Limpiar el valor del TextBoxA
  TextBoxA.value = '';
}

//SETB
  const preferencesButtonB = document.querySelector('.SetB .Preferences-Button');
  const preferencesButtonIMGB = document.querySelectorAll('.SetB .Preferences-Button img');
  const preferencesMenuB = document.querySelector('.SetB .Preferences-Menu');
  const colitaB = document.querySelector('.SetB .colita-Dialogo');
  const separatorButtonsB = document.querySelectorAll('.SetB .Separator-Button');
  preferencesButtonB.addEventListener('mousedown', (event) => {
    event.preventDefault();
    preferencesMenuB.style.display = preferencesMenuB.style.display === 'none' ? 'grid' : 'none';
    colitaB.style.display = colitaB.style.display === 'none' ? 'grid' : 'none';
  });
  preferencesButtonB.addEventListener('click', () => {
    preferencesButtonIMGB.forEach(button => {
      button.classList.toggle('clicked');
    });
  });
  document.addEventListener('click', (event) => {
    if (
      !event.target.closest('.Preferences-Button') &&
      !event.target.closest('.Preferences-Menu') &&
      !event.target.closest('.Separator-Button')
    ) {
      preferencesButtonIMGB.forEach(button => {
        button.classList.remove('clicked');
      });
    }
  });
  function hidepreferencesMenuB(event) {
    const target = event.target;
    const ispreferencesButtonB = target.closest('.Preferences-Button');
    const ispreferencesMenuB = target.closest('.Preferences-Menu');
    if (!ispreferencesButtonB && !ispreferencesMenuB) {
      preferencesMenuB.style.display = 'none';
      colitaB.style.display = 'none';
    }
  }
document.addEventListener('click', hidepreferencesMenuB);
let selectedSeparatorsB = []; // Array para almacenar los separadores seleccionados
separatorButtonsB.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    const separator = button.getAttribute('data-separator');
    if (selectedSeparatorsB.includes(separator)) {
      const index = selectedSeparatorsB.indexOf(separator);
      if (index > -1) {
        selectedSeparatorsB.splice(index, 1);
      }
    } else {
      selectedSeparatorsB.push(separator);
    }
    selectedSeparator = getseparatorRegexB(selectedSeparatorsB);
  });
});
//SELECTOR
function getseparatorRegexB(separators) {
  let separatorRegexB = /[,\s]+|\{|\}/; // Separador predeterminado
  if (separators.includes('comma') && separators.includes('space') && separators.includes('braces')) {
    separatorRegexB = /.^/;
  } else if (separators.includes('comma') && separators.includes('space')) {
    separatorRegexB = /\{|\}/;
  } else if (separators.includes('comma') && separators.includes('braces')) {
    separatorRegexB = /\s+/;
  } else if (separators.includes('space') && separators.includes('braces')) {
    separatorRegexB = /,/;
  } else {
    switch (separators.sort().join(',')) {
      case 'comma':
        separatorRegexB = /\s+|\{|\}/;
        break;
      case 'space':
        separatorRegexB = /,|\{|\}/;
        break;
      case 'braces':
        separatorRegexB = /[,\s]+/;
        break;
      default:
        separatorRegexB = /[,\s\r\n]+|\{|\}/; // Separador predeterminado
        break;
    }
  }
  return separatorRegexB;
}

//Funcion que imprime y agrega valores del SETB
function fun2() {
    // Obtener el valor del TextBoxA y dividirlo en palabras separadas
    const textBoxValue = TextBoxB.value;
    const values = textBoxValue.split(new RegExp(selectedSeparator));

  values.forEach(value => {// Recorrer cada palabra y crear los elementos correspondientes
    const cancelButton = document.createElement('img');  // Crear un elemento <img> con la imagen del botón de cancelar
    cancelButton.src = './Assets/Cancel-Button.svg';

    const valueSpan = document.createElement('span');// Crear un elemento <span> para contener el valor
    valueSpan.innerText = value;

    // Agregar el botón de cancelar  y el valor al elemento 'OutputB'
    OutputB.appendChild(cancelButton);
    OutputB.appendChild(valueSpan);

    // Agregar el evento click al botón de cancelar para eliminar el valor correspondiente
    cancelButton.addEventListener('click', function () {
      SetB.delete(valueSpan.innerText);// Eliminar el valor del conjunto SetB
      // Eliminar el elemento del DOM
      OutputB.removeChild(cancelButton);
      OutputB.removeChild(valueSpan);
    });

    SetB.add(value);// Agregar el valor al conjunto SetB
  });

  TextBoxB.value = '';// Limpiar el valor del TextBoxB
}

//FILTRO en RESULTADOS
$(document).ready(function () {
  $('.Element').on('click', function () {
    var target = $(this).data('target');
    var filtro = $('.Resultados-Grid-Inferior-FILTRO');
    //var tarjeta = filtro.find('#' + target + '.Tarjeta');
    var tarjeta = filtro.find(`#${target}.Tarjeta`); //Mas limpio
    var resultadosGridInferior = $('.Resultados-Grid-Inferior');

    resultadosGridInferior.addClass('hidden');

    if (!tarjeta.hasClass('hidden')) {
      tarjeta.addClass('hidden');
      $(this).removeClass('active');
    } else {
      tarjeta.removeClass('hidden');
      $(this).addClass('active');
    }
    if ($('.Element.active').length === 0) {
      resultadosGridInferior.removeClass('hidden'); //Visualiza todos los Resultados cuando ya no hay botones activos
    }
  });
});