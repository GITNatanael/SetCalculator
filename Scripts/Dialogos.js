// Array de frases de ayuda
const frasesAyuda = [
  "Welcome! How can I help you today?",
  "A set is a collection of distinct elements sharing a common characteristic",
  "Explore the options available on the menu.",
  "Tap one of the Sets.",
  "Sets: where union creates connections, and difference showcases singularities."
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
  mostrarMensajeEspecifico("Cuando estés listo presiona Operar", 8000); // Tiempo específico: 8000 ms
});

boton2.addEventListener("mouseover", function() {
  mostrarMensajeEspecifico("Puedes editar el contenido de los conjuntos y rehacer las operaciónes aquí", 5000); // Tiempo específico: 5000 ms
});

// Mostrar una frase de ayuda recurrente inicialmente
mostrarFraseRecurrente();

// Cambiar la frase de ayuda cada 5 segundos
setInterval(mostrarFraseRecurrente, 5000);
