// Array de frases de ayuda
const frasesAyuda = [
  "¡Bienvenido! ¿En qué puedo ayudarte hoy?",
  "Si tienes alguna pregunta, no dudes en preguntar.",
  "Explora las opciones disponibles en el menú.",
  "Recuerda guardar tus cambios antes de salir.",
  "Si necesitas ayuda adicional, visita nuestra sección de preguntas frecuentes."
];

// Elementos de diálogo
const dialogoRecurrente = document.getElementById("Home-Dialogues");
const dialogoEspecifico = document.getElementById("dialogo-especifico");

// Función para mostrar una frase de ayuda
function mostrarFraseAyuda(dialogo, frase) {
  dialogo.textContent = frase;
}

// Evento mouseover
function mostrarMensajeEspecifico(mensaje, tiempoEspecifico) {
  dialogoRecurrente.style.display = "none";
  dialogoEspecifico.style.display = "inline";
  mostrarFraseAyuda(dialogoEspecifico, mensaje);
  
  // Volver a las frases recurrentes después del tiempo especificado
  setTimeout(function() {
    dialogoRecurrente.style.display = "inline";
    dialogoEspecifico.style.display = "none";
    mostrarFraseRecurrente();
  }, tiempoEspecifico);
}

// Evento mouseout
function mostrarFraseRecurrente() {
  const indice = Math.floor(Math.random() * frasesAyuda.length);
  const frase = frasesAyuda[indice];
  mostrarFraseAyuda(dialogoRecurrente, frase);
}

// Asociar eventos a los elementos
const boton1 = document.getElementById("OperateDialogue");
const boton2 = document.getElementById("CloseDialogue");

boton1.addEventListener("mouseover", function() {
  mostrarMensajeEspecifico("Mensaje para el Botón 1", 8000); // Tiempo específico: 8000 ms
});

boton2.addEventListener("mouseover", function() {
  mostrarMensajeEspecifico("Mensaje para el Botón 2", 5000); // Tiempo específico: 5000 ms
});

// Mostrar una frase de ayuda recurrente inicialmente
mostrarFraseRecurrente();

// Cambiar la frase de ayuda cada 5 segundos
setInterval(mostrarFraseRecurrente, 5000);
