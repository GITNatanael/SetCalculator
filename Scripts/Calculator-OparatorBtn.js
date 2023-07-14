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

  const titleImage = document.createElement('img');
  titleImage.src = './Assets/Icons/Multiple-Sets-Icon.svg';

  const titleText = document.createElement('div');
  titleText.textContent = 'Union:';

  titleDiv.appendChild(titleImage);
  titleDiv.appendChild(titleText);
  resultsGrid.appendChild(titleDiv);

  const unionResult = document.createElement('div');
  unionResult.textContent = uniqueUnion.join(', ');
  resultsGrid.appendChild(unionResult);
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
    const title = `<div class="title">Union of ${union.sets[0]} and ${union.sets[1]}:</div>`;
    const values = union.values.map((value) => `${value}`).join(', ');
    resultsGrid.innerHTML += title + values;
  });
}

// Agregar event listener solo al botón de Unión
unionButton.addEventListener('click', function () {
  resultsGrid.innerHTML = ''; // Limpiar resultados anteriores
  performUnion();
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
    resultsGrid.innerHTML = '';

    intersection.forEach((value) => {
        const intersectSets = sets
            .filter((set) => set.values.includes(value))
            .map((set) => set.title)
            .join(', ');

        const intersectItem = document.createElement('div');
        intersectItem.textContent = value;

        const intersectTitle = document.createElement('div');
        intersectTitle.textContent = `Intersection of ${intersectSets}:`;

        resultsGrid.appendChild(intersectTitle);
        resultsGrid.appendChild(intersectItem);
    });
}

function performIntersectionsub() {
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

    // Realizar la intersección entre todos los conjuntos
    const intersectionSets = [];

    for (let i = 0; i < sets.length; i++) {
        for (let j = i + 1; j < sets.length; j++) {
            const setA = sets[i];
            const setB = sets[j];

            const intersectValues = setA.values.filter((value) => setB.values.includes(value));

            if (intersectValues.length > 0) {
                intersectionSets.push({
                    sets: [setA.title, setB.title],
                    values: intersectValues,
                });
            }
        }
    }

    // Imprimir las intersecciones en el elemento .Results-Grid
    const resultsGrid = document.querySelector('.Results-Grid');


    intersectionSets.forEach((intersectSet) => {
        const intersectItem = document.createElement('div');
        intersectItem.textContent = intersectSet.values.join(', ');

        const intersectTitle = document.createElement('div');
        intersectTitle.textContent = `Intersection of ${intersectSet.sets[0]} and ${intersectSet.sets[1]}:`;

        resultsGrid.appendChild(intersectTitle);
        resultsGrid.appendChild(intersectItem);
    });
}




// Agregar event listener solo al botón de Intersección
intersectionButton.addEventListener('click', function () {
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
  resultsGrid.innerHTML = '';

  const symmetricItem = document.createElement('div');
  symmetricItem.textContent = symmetricDifference.join(', ');

  const symmetricTitle = document.createElement('div');
  symmetricTitle.textContent = 'Symmetric Difference of All Sets:';

  resultsGrid.appendChild(symmetricTitle);
  resultsGrid.appendChild(symmetricItem);
}

function performSymmetricDifferences() {
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
          sets: [setA.title, setB.title],
          values: symmetricDifference,
        });
      }
    }
  }

  // Imprimir las diferencias simétricas en el elemento .Results-Grid
  const resultsGrid = document.querySelector('.Results-Grid');


  symmetricDifferences.forEach((symmetricSet) => {
    const symmetricItem = document.createElement('div');
    symmetricItem.textContent = symmetricSet.values.join(', ');

    const symmetricTitle = document.createElement('div');
    symmetricTitle.textContent = `Symmetric Difference of ${symmetricSet.sets[0]} and ${symmetricSet.sets[1]}:`;

    resultsGrid.appendChild(symmetricTitle);
    resultsGrid.appendChild(symmetricItem);
  });
}

// Agregar event listener solo al botón de Diferencia Simétrica
symmetricButton.addEventListener('click', function () {
  performSymmetricDifference();
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
    differenceTitleAB.textContent = `Difference of ${sets[0]} - ${sets[1]}:`;
    resultsGrid.appendChild(differenceTitleAB);

    differenceAB.forEach((value) => {
      const differenceItem = document.createElement('div');
      differenceItem.textContent = value;
      resultsGrid.appendChild(differenceItem);
    });

    const differenceTitleBA = document.createElement('div');
    differenceTitleBA.textContent = `Difference of ${sets[1]} - ${sets[0]}:`;
    resultsGrid.appendChild(differenceTitleBA);

    differenceBA.forEach((value) => {
      const differenceItem = document.createElement('div');
      differenceItem.textContent = value;
      resultsGrid.appendChild(differenceItem);
    });
  });
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
    resultsGrid.innerHTML = '';
  
    const title = document.createElement('div');
    title.textContent = 'Cartesian Product in One Direction:';
  
    const values = document.createElement('div');
    values.textContent = cartesianProduct.map((tuple) => `(${tuple.join(', ')})`).join(', ');
  
    resultsGrid.appendChild(title);
    resultsGrid.appendChild(values);
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
    const title = document.createElement('div');
    title.textContent = `Cartesian Product of ${product.sets[0]} and ${product.sets[1]}:`;

    const values = document.createElement('div');
    values.textContent = `${product.cartesian.join(', ')}`;

    resultsGrid.appendChild(title);
    resultsGrid.appendChild(values);
  });
}


  
  // Agregar event listener al botón de Producto Cartesiano
  cartesianButton.addEventListener('click', function() {
    performCartesian();
    performCartesianBiDirection();
  });
  


