const addNewSetElement = document.querySelector('.Add-New-Set-Element');
const setGrid = document.querySelector('.Set-Grid');

let setCount = 1;

addNewSetElement.addEventListener('click', function () {
  // Crear los elementos HTML
  const setCard = document.createElement('div');
  setCard.className = 'Set-Card';

  const header = document.createElement('div');
  header.className = 'Header';

  const setName = document.createElement('div');
  setName.className = 'Set-Name';
  setName.innerHTML = `Set <div class="Number-Set">${setCount}</div>`;

  const closeButton = document.createElement('div');
  closeButton.className = 'Close-Button';
  const closeButtonImg = document.createElement('img');
  closeButtonImg.src = './Assets/Cancel-Button.svg';
  closeButtonImg.alt = 'Cancel Btn';
  closeButton.appendChild(closeButtonImg);

  const divParaCloseBtn = document.createElement('div');
  divParaCloseBtn.className = 'Div-para-CloseBtn';

  // Alternar colores de fondo para .Div-para-CloseBtn
  const divParaCloseBtnIndex = document.querySelectorAll('.Div-para-CloseBtn').length;
  if (divParaCloseBtnIndex % 2 === 0) {
    divParaCloseBtn.classList.add('even');
  } else {
    divParaCloseBtn.classList.add('odd');
  }

  const gridSetData = document.createElement('div');
  gridSetData.className = 'Grid-Set-Data';

  const setName2 = document.createElement('div');
  setName2.className = 'Set-Name';
  setName2.innerHTML = `Set <div class="Number-Set">${setCount}</div>`;

  const cardinality = document.createElement('div');
  cardinality.className = 'Cardinality';

  const textbox = document.createElement('input');
  textbox.className = 'Textbox';
  textbox.type = 'text';
  textbox.name = 'Textbox';

  const setData = document.createElement('div');
  setData.className = 'Set-Data';

  // Funcionalidades adicionales
  const set = new Set();

  textbox.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      const value = textbox.value.trim();
      if (value !== '') {
        set.add(value);
  
        const item = document.createElement('div');
        item.className = 'Set-Item';
  
        const deleteButton = document.createElement('img');
        deleteButton.src = './Assets/Cancel-Button.svg';
        deleteButton.alt = 'Delete Button';
        deleteButton.className = 'Delete-Button';
  
        const text = document.createElement('span');
        text.textContent = value;
  
        item.appendChild(deleteButton);
        item.appendChild(text);
        setData.appendChild(item);
        textbox.value = '';
  
        // Actualizar la cardinalidad del conjunto
        cardinality.textContent = `Cardinality: ${set.size}`;
  
        // Eliminar valor al hacer clic en la imagen
        deleteButton.addEventListener('click', function () {
          set.delete(value);
          item.remove();
          // Actualizar la cardinalidad del conjunto
          cardinality.textContent = `Cardinality: ${set.size}`;
        });
      }
    }
  });

  closeButton.addEventListener('click', function () {
    setCard.remove();
  });

  header.addEventListener('click', function () {
    if (divParaCloseBtn.style.display === 'none') {
      divParaCloseBtn.style.display = 'grid';
      setName.style.opacity = '0';
    } else {
      divParaCloseBtn.style.display = 'none';
      setName.style.opacity = '1';
    }
  });

  // Agregar los elementos al DOM
  header.appendChild(setName);
  header.appendChild(closeButton);
  gridSetData.appendChild(setName2);
  gridSetData.appendChild(cardinality);
  gridSetData.appendChild(textbox);
  divParaCloseBtn.appendChild(gridSetData);
  divParaCloseBtn.appendChild(setData);
  setCard.appendChild(header);
  setCard.appendChild(divParaCloseBtn);
  setGrid.appendChild(setCard);

  // Incrementar el contador de conjuntos
  setCount++;
});
