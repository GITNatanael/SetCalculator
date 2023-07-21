// Obtener referencias a los elementos del DOM
const unionButton = document.querySelector('.Symbol-Operator[data-separator="Union"]');
const resultsGrid = document.querySelector('.Results-Grid');

// Función para realizar la unión de conjuntos
function performUnion() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays
  setCards.forEach((setCard) => {
    const setName = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ name: setName, values: setValues });
  });

  // Realizar la unión de los conjuntos
  const union = sets.flatMap((set) => set.values);
  const uniqueUnion = Array.from(new Set(union));

  // Imprimir la unión en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid');
  resultsGrid.innerHTML = '';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'Operation-Title';

  // Imprimir los dos primeros números de conjuntos
  for (let i = 0; i < 2 && i < sets.length; i++) {
    const numberSetDiv = document.createElement('div');
    numberSetDiv.className = 'Number-Set';
    numberSetDiv.textContent = getSetNumber(sets[i].name);
    titleDiv.appendChild(numberSetDiv);
  }

  // Calcular el total de conjuntos menos dos y agregar el "+n" al título
  const totalSets = sets.length - 2;
  if (totalSets > 0) {
    const totalSetsDiv = document.createElement('div');
    totalSetsDiv.className = 'Number-Set';
    totalSetsDiv.textContent = `+${totalSets}`;
    titleDiv.appendChild(totalSetsDiv);
  }

  const titleText = document.createElement('div');
  titleText.textContent = 'Union of Sets';

  titleDiv.appendChild(titleText);
  resultsGrid.appendChild(titleDiv);

  const unionResult = document.createElement('div');
  unionResult.className = 'Results-Values';
  unionResult.textContent = uniqueUnion.join(', ');
  resultsGrid.appendChild(unionResult);
}

// Obtener el número de conjunto a partir del nombre
function getSetNumber(setName) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setName);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}


// Función para realizar la unión de todas las combinaciones de conjuntos
function performUnionCombinations() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays
  setCards.forEach((setCard) => {
    const setName = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ name: setName, values: setValues });
  });

  // Realizar la unión de todas las combinaciones de conjuntos
  const unionCombinations = [];
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const union = Array.from(new Set([...sets[i].values, ...sets[j].values]));
      unionCombinations.push({ sets: [sets[i].name, sets[j].name], values: union });
    }
  }

  // Imprimir las uniones en el elemento .Results-Grid
  unionCombinations.forEach((union) => {
    const title = `
      <div class="Operation-Title">
        <div class="Number-Set">${getSetNumber(union.sets[0])}</div>
        <div class="Number-Set">${getSetNumber(union.sets[1])}</div>
        Union of Sets
      </div>`;
    const values = `
      <div class="Results-Values">
        ${union.values.map((value) => `${value}`).join(', ')}
      </div>`;
    resultsGrid.innerHTML += title + values;
  });
}

// Obtener el número de conjunto a partir del nombre
function getSetNumber(setName) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setName);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}

// Agregar event listener solo al botón de Unión
unionButton.addEventListener('click', function () {
  resultsGrid.innerHTML = ''; // Limpiar resultados anteriores
  if (document.querySelectorAll('.Set-Card').length > 2) {
    performUnion();
    
  }
  performUnionCombinations();
});


//INTERSECCION
const intersectionButton = document.querySelector('.Symbol-Operator[data-separator="Intersection"]');

function performIntersection() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays y sus títulos
  setCards.forEach((setCard) => {
    const setTitle = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ title: setTitle, values: setValues });
  });

  // Obtener el conjunto base para la intersección
  const baseSet = sets[0];

  // Realizar la intersección con los demás conjuntos
  const intersection = baseSet.values.filter((value) => {
    return sets.every((set) => set.values.includes(value));
  });

  // Imprimir las intersecciones en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid'); 

  const titleDiv = document.createElement('div');
  titleDiv.className = 'Operation-Title';

  // Imprimir los dos primeros números de conjuntos
  for (let i = 0; i < 2 && i < sets.length; i++) {
    const numberSetDiv = document.createElement('div');
    numberSetDiv.className = 'Number-Set';
    numberSetDiv.textContent = getSetNumber(sets[i].title);
    titleDiv.appendChild(numberSetDiv);
  }

  // Calcular el total de conjuntos menos dos y agregar el "+n" al título
  const totalSets = sets.length - 2;
  if (totalSets > 0) {
    const totalSetsDiv = document.createElement('div');
    totalSetsDiv.className = 'Number-Set';
    totalSetsDiv.textContent = `+${totalSets}`;
    titleDiv.appendChild(totalSetsDiv);
  }

  const intersectTitle = document.createElement('div');
  intersectTitle.textContent = 'Intersection of Sets';
  titleDiv.appendChild(intersectTitle);
  

  intersection.forEach((value) => {
    const intersectSets = sets
      .filter((set) => set.values.includes(value))
      .map((set) => set.title)
      .join(', ');

    const intersectItem = document.createElement('div');
    intersectItem.className = 'Results-Values';
    intersectItem.textContent = value;

    if (document.querySelectorAll('.Set-Card').length > 2 && intersectItem.textContent.trim() !== '') {
      resultsGrid.appendChild(titleDiv);
      resultsGrid.appendChild(intersectItem);
    }
    
  });
}

// Obtener el número de conjunto a partir del título
function getSetNumber(setTitle) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setTitle);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}

function performIntersectionsub() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays y sus títulos
  setCards.forEach((setCard) => {
    const setName = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ name: setName, values: setValues });
  });

  // Realizar la intersección entre todos los conjuntos
  const intersectionSets = [];

  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const setA = sets[i];
      const setB = sets[j];

      const intersectValues = setA.values.filter((value) => setB.values.includes(value));

      if (intersectValues.length > 0) {
        intersectionSets.push({
          sets: [sets[i].name, sets[j].name],
          values: intersectValues,
        });
      }
    }
  }

  // Imprimir las intersecciones en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid');

  intersectionSets.forEach((intersect) => {
    const title = `
      <div class="Operation-Title">
        <div class="Number-Set">${getSetNumber(intersect.sets[0])}</div>
        <div class="Number-Set">${getSetNumber(intersect.sets[1])}</div>
        Intersection of Sets
      </div>`;
    const values = `
      <div class="Results-Values">
        ${intersect.values.join(', ')}
      </div>`;
    resultsGrid.innerHTML += title + values;
  });
}

// Obtener el número de conjunto a partir del nombre
function getSetNumber(setName) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setName);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
} 

// Agregar event listener solo al botón de Intersección
intersectionButton.addEventListener('click', function () {
  resultsGrid.innerHTML = '';
  performIntersection(); 
 performIntersectionsub();   

  
});



//DIFERENCIA SIMETRICA
const symmetricButton = document.querySelector('.Symbol-Operator[data-separator="Symmetric"]');

function performSymmetricDifference() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays y sus títulos
  setCards.forEach((setCard) => {
    const setTitle = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ title: setTitle, values: setValues });
  });

  // Realizar la unión de todos los conjuntos
  const union = new Set();
  sets.forEach((set) => {
    set.values.forEach((value) => {
      union.add(value);
    });
  });

  // Realizar la intersección de todos los conjuntos
  const intersection = new Set(sets[0].values);
  sets.forEach((set) => {
    intersection.forEach((value) => {
      if (!set.values.includes(value)) {
        intersection.delete(value);
      }
    });
  });

  // Realizar la diferencia simétrica
  const symmetricDifference = Array.from(union).filter((value) => !intersection.has(value));

  // Imprimir la diferencia simétrica en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid');
  

  const symmetricTitle = document.createElement('div');
  symmetricTitle.className = 'Operation-Title';
  symmetricTitle.innerHTML = `
    <div class="Number-Set">${getSetNumber(sets[0].title)}</div>
    <div class="Number-Set">${getSetNumber(sets[1].title)}</div>
    <div class="Number-Set">+${sets.length - 2}</div>
    <div>Symmetric Difference of Sets</div>`;

  const symmetricItem = document.createElement('div');
  symmetricItem.className = 'Results-Values';
  symmetricItem.textContent = symmetricDifference.join(', ');

  resultsGrid.appendChild(symmetricTitle);
  resultsGrid.appendChild(symmetricItem);
}

// Obtener el número de conjunto a partir del título
function getSetNumber(setTitle) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setTitle);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}


function performSymmetricDifferences() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays y sus títulos
  setCards.forEach((setCard) => {
    const setName = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ name: setName, values: setValues });
  });

  // Realizar la diferencia simétrica para cada combinación de conjuntos
  const symmetricDifferences = [];

  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const setA = sets[i];
      const setB = sets[j];

      const symmetricDifference = [
        ...setA.values.filter((value) => !setB.values.includes(value)),
        ...setB.values.filter((value) => !setA.values.includes(value)),
      ];

      if (symmetricDifference.length > 0) {
        symmetricDifferences.push({
          sets: [sets[i].name, sets[j].name],
          values: symmetricDifference,
        });
      }
    }
  }

  // Imprimir las diferencias simétricas en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid'); 

  symmetricDifferences.forEach((symmetricSet) => {
    const title = `
      <div class="Operation-Title">
        <div class="Number-Set">${getSetNumber(symmetricSet.sets[0])}</div>
        <div class="Number-Set">${getSetNumber(symmetricSet.sets[1])}</div>
        Symmetric Difference of Sets
      </div>`;
    const values = `
      <div class="Results-Values">
        ${symmetricSet.values.join(', ')}
      </div>`;
    resultsGrid.innerHTML += title + values;
  });
}

// Obtener el número de conjunto a partir del nombre
function getSetNumber(setName) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setName);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}


// Agregar event listener solo al botón de Diferencia Simétrica
symmetricButton.addEventListener('click', function () {
  resultsGrid.innerHTML = '';
  if (document.querySelectorAll('.Set-Card').length > 2) {
    performSymmetricDifference();
  }
  performSymmetricDifferences();
});


//DIFERENIA
const differenceButton = document.querySelector('.Symbol-Operator[data-separator="Diference"]');

function performDifference() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];

  // Obtener los conjuntos como arrays y sus títulos
  setCards.forEach((setCard) => {
    const setTitle = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ title: setTitle, values: setValues });
  });

  // Obtener todas las combinaciones posibles de conjuntos
  const combinations = [];

  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      combinations.push([sets[i], sets[j]]);
    }
  }

  // Realizar la diferencia en ambas direcciones
  const differences = [];

  combinations.forEach((combination) => {
    const [setA, setB] = combination;
    const differenceAB = setA.values.filter((value) => !setB.values.includes(value));
    const differenceBA = setB.values.filter((value) => !setA.values.includes(value));

    differences.push({ sets: [setA.title, setB.title], differenceAB, differenceBA });
  });

  // Imprimir las diferencias en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid');
  resultsGrid.innerHTML = '';

  differences.forEach((difference) => {
    const { sets, differenceAB, differenceBA } = difference;

    const differenceTitleAB = document.createElement('div');
    differenceTitleAB.className = 'Operation-Title';
    const numberSetA = document.createElement('div');
    numberSetA.className = 'Number-Set';
    numberSetA.textContent = getSetNumber(sets[0]);
    const numberSetB = document.createElement('div');
    numberSetB.className = 'Number-Set';
    numberSetB.textContent = getSetNumber(sets[1]);
    const textAB = document.createElement('div');
    textAB.textContent = `Difference`;
    differenceTitleAB.appendChild(numberSetA);
    differenceTitleAB.appendChild(numberSetB);
    differenceTitleAB.appendChild(textAB);
    resultsGrid.appendChild(differenceTitleAB);

    const differenceItemAB = document.createElement('div');
    differenceItemAB.className = 'Results-Values';
    differenceItemAB.textContent = differenceAB.join(', ');
    resultsGrid.appendChild(differenceItemAB);

    const differenceTitleBA = document.createElement('div');
    differenceTitleBA.className = 'Operation-Title';
    const numberSetBA = document.createElement('div');
    numberSetBA.className = 'Number-Set';
    numberSetBA.textContent = getSetNumber(sets[1]);
    const numberSetAB = document.createElement('div');
    numberSetAB.className = 'Number-Set';
    numberSetAB.textContent = getSetNumber(sets[0]);
    const textBA = document.createElement('div');
    textBA.textContent = `Difference`;
    differenceTitleBA.appendChild(numberSetBA);
    differenceTitleBA.appendChild(numberSetAB);
    differenceTitleBA.appendChild(textBA);
    resultsGrid.appendChild(differenceTitleBA);

    const differenceItemBA = document.createElement('div');
    differenceItemBA.className = 'Results-Values';
    differenceItemBA.textContent = differenceBA.join(', ');
    resultsGrid.appendChild(differenceItemBA);
  });
}

// Obtener el número de conjunto a partir del nombre
function getSetNumber(setName) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setName);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}


// Agregar event listener al botón de Difference
differenceButton.addEventListener('click', performDifference);

//PRIDUCTO CARTESIANO
const cartesianButton = document.querySelector('.Symbol-Operator[data-separator="Cartesian"]');

function performCartesian() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];
  setCards.forEach((setCard) => {
    const setTitle = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ title: setTitle, values: setValues });
  });

  // Realizar el producto cartesiano en una dirección
  let cartesianProduct = sets[0].values.map((value) => [value]);
  for (let i = 1; i < sets.length; i++) {
    const newProduct = [];
    cartesianProduct.forEach((product) => {
      sets[i].values.forEach((value) => {
        const newTuple = product.concat(value);
        newProduct.push(newTuple);
      });
    });
    cartesianProduct = newProduct;
  }

  // Imprimir el resultado en la sección '.Results-Grid'
  const resultsGrid = document.querySelector('.Results-Grid'); 

  const titleDiv = document.createElement('div');
  titleDiv.className = 'Operation-Title';
  titleDiv.innerHTML = `
    <div class="Number-Set">${getSetNumber(sets[0].title)}</div>
    <div class="Number-Set">${getSetNumber(sets[1].title)}</div>
    <div class="Number-Set">+${sets.length - 2}</div>
    <div>Cartesian Product in One Direction:</div>`;

  const valuesDiv = document.createElement('div');
  valuesDiv.className = 'Results-Values';
  valuesDiv.textContent = cartesianProduct.map((tuple) => `(${tuple.join(', ')})`).join(', ');

  resultsGrid.appendChild(titleDiv);
  resultsGrid.appendChild(valuesDiv);
}

// Obtener el número de conjunto a partir del título
function getSetNumber(setTitle) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setTitle);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}



function performCartesianBiDirection() {
  // Obtener todos los conjuntos existentes
  const setCards = document.querySelectorAll('.Set-Card');
  const sets = [];
  setCards.forEach((setCard) => {
    const setTitle = setCard.querySelector('.Set-Name').textContent;
    const setItems = setCard.querySelectorAll('.Set-Data .Set-Item');
    const setValues = Array.from(setItems).map((setItem) => setItem.textContent);
    sets.push({ title: setTitle, values: setValues });
  });

  // Realizar el producto cartesiano en ambas direcciones
  const cartesianProduct = [];
  for (let i = 0; i < sets.length; i++) {
    for (let j = 0; j < sets.length; j++) {
      if (i !== j) {
        const cartesian = [];
        sets[i].values.forEach((valueA) => {
          sets[j].values.forEach((valueB) => {
            cartesian.push(`(${valueA}, ${valueB})`);
          });
        });
        cartesianProduct.push({
          sets: [sets[i].title, sets[j].title],
          cartesian: cartesian
        });
      }
    }
  }

  // Imprimir los resultados en la sección '.Results-Grid'
  const resultsGrid = document.querySelector('.Results-Grid');
  

  cartesianProduct.forEach((product) => {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'Operation-Title';

    const numberSetDiv1 = document.createElement('div');
    numberSetDiv1.className = 'Number-Set';
    numberSetDiv1.textContent = getSetNumber(product.sets[0]);

    const numberSetDiv2 = document.createElement('div');
    numberSetDiv2.className = 'Number-Set';
    numberSetDiv2.textContent = getSetNumber(product.sets[1]);

    const titleText = document.createElement('div');
    titleText.textContent = `Cartesian Product`;

    titleDiv.appendChild(numberSetDiv1);
    titleDiv.appendChild(numberSetDiv2);
    titleDiv.appendChild(titleText);

    const valuesDiv = document.createElement('div');
    valuesDiv.className = 'Results-Values';
    valuesDiv.textContent = `${product.cartesian.join(', ')}`;

    resultsGrid.appendChild(titleDiv);
    resultsGrid.appendChild(valuesDiv);
  });
}

// Obtener el número de conjunto a partir del nombre
function getSetNumber(setName) {
  const numberRegex = /Set (\d+)/;
  const matches = numberRegex.exec(setName);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return '';
}

  // Agregar event listener al botón de Producto Cartesiano
  cartesianButton.addEventListener('click', function() {
    resultsGrid.innerHTML = '';
    if (document.querySelectorAll('.Set-Card').length > 2) {
      performCartesian();
    }
    performCartesianBiDirection();
  });


  //VIDEO
   // Obtener el elemento de video
   const video = document.getElementById('video-background');

   // Ajustar la velocidad de reproducción del video al doble de lento
   video.addEventListener('loadedmetadata', () => {
     video.playbackRate = 0.4; // Valor de 0.5 para el doble de lento (la velocidad original es 1)
   });


