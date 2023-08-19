// Función para verificar si un elemento está en medio de la pantalla
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Comprueba si el elemento está en medio verticalmente
    return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
}

// Función para cambiar el color de fondo
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Función para manejar el evento de scroll
function handleScroll() {
    if (isElementInViewport(flexElement)) {
        changeBackgroundColor('black');
    } else if (isElementInViewport(contentElement)) {
        changeBackgroundColor('white');
    }
}

// Obtener los elementos que cambian el color de fondo
const flexElement = document.querySelector('.Flex');
const contentElement = document.querySelector('.Content');

// Agregar evento de scroll para verificar la posición de los elementos
window.addEventListener('scroll', handleScroll);
