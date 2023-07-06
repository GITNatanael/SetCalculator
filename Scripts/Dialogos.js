// Array de frases de ayuda
const frasesAyuda = [
    "¡Bienvenido! ¿En qué puedo ayudarte hoy?",
    "Si tienes alguna pregunta, no dudes en preguntar.",
    "Explora las opciones disponibles en el menú.",
    "Recuerda guardar tus cambios antes de salir.",
    "Si necesitas ayuda adicional, visita nuestra sección de preguntas frecuentes.",
    "Puedes filtrar los resultados mostrados, en la seccion de arriba"
  ];
  const HomefrasesAyuda = [
    "¡Bienvenido! ¿En qué puedo ayudarte hoy?",
    "Si tienes alguna pregunta, no dudes en preguntar.",
    "Explora las opciones disponibles en el menú.",
    "Recuerda guardar tus cambios antes de salir.",
    "Si necesitas ayuda adicional, visita nuestra sección de preguntas frecuentes.",
    " WebApp developed for set operations: Union, Intersection, Difference, Exclusion. Enter values in the text boxes of each Set and press the button. The operations will be displayed."
  ];
  
  // Función para mostrar una frase aleatoria de ayuda
  function mostrarFraseAyuda() {
    const dialogo = document.getElementById("dialogo");
    const HomeDialogues = document.getElementById("Home-Dialogues");
    const indice = Math.floor(Math.random() * frasesAyuda.length);
    const frase = frasesAyuda[indice];
    const Homefrase = HomefrasesAyuda[indice];
    dialogo.textContent = frase;
    HomeDialogues.textContent = Homefrase;
  }
  
  // Mostrar una frase de ayuda inicialmente
  mostrarFraseAyuda();
  
  // Cambiar la frase de ayuda cada 5 segundos
  setInterval(mostrarFraseAyuda, 5000);
  