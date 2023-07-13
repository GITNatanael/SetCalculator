// Elementos de diálogo
const dialogoAudio = document.getElementById("dialogo-audio");
const DialogoSalir = $("#ContenedorSets");

// Objeto con los mensajes y sus audios
const mensajesconAudio = {
  "Para salir solo presiona cualquier parte alrededor": "./Assets/Audio/ParaSalir1.mp3",
  "Puedes filtrar los resultados para solo visualizar las operaciones de tu interés a tu derecha, donde se ven varios botones con los nombres de cada operación. También puedes editar los conjuntos y rehacer las operaciones en el visualizador de la esquina.": "./Assets/Audio/PuedesEditar1.mp3",
  // Agrega más mensajes y sus audios aquí
};

// Variable para controlar la reproducción del audio
let audioReproduciendose = false;

// Función para reproducir el audio específico de un mensaje
function reproducirAudioEspecifico(mensaje) {
  if (!audioReproduciendose) {
    audioReproduciendose = true;
    const audio = new Audio(mensajesconAudio[mensaje]);
    audio.play().catch(error => {
      // Manejar errores de reproducción de audio aquí
      console.error("Error al reproducir audio:", error);
    });
    audio.addEventListener("ended", function() {
      audioReproduciendose = false;
    });
  }
}

// Función para mostrar una frase de ayuda
function mostrarFraseAyudaAudio(dialogo, frase) {
  dialogo.textContent = frase;
}

// Evento click
function reproducirMensajeEspecifico(event, mensaje, tiempoEspecifico) {
  dialogoAudio.style.display = "inline";
  mostrarFraseAyudaAudio(dialogoAudio, mensaje);
  reproducirAudioEspecifico(mensaje);

  // Ocultar el diálogo después del tiempo especificado
  setTimeout(function() {
    dialogoAudio.style.display = "none";
    event.target.removeEventListener("click", reproducirMensajeHandler);
  }, tiempoEspecifico);
}

function reproducirMensajeHandler(event) {
  const boton = event.target;
  if (boton === boton1) {
    reproducirMensajeEspecifico(event, "Puedes filtrar los resultados para solo visualizar las operaciones de tu interés a tu derecha, donde se ven varios botones con los nombres de cada operación. También puedes editar los conjuntos y rehacer las operaciones en el visualizador de la esquina.", 8000); // Tiempo específico: 8000 ms
  } else if (boton === boton2) {
    reproducirMensajeEspecifico(event, "Para salir solo presiona cualquier parte alrededor", 5000); // Tiempo específico: 5000 ms
  }
}

boton1.addEventListener("click", reproducirMensajeHandler);
boton2.addEventListener("click", reproducirMensajeHandler);
