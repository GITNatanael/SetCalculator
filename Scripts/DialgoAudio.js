//VISUALIZADOR DE AUDIO
const audioContainer = document.getElementById('Audio-Container');
const audioCanvas = document.getElementById('Audio-Canvas');
audioCanvas.width = window.innerWidth;
audioCanvas.height = window.innerHeight;
const ctx = audioCanvas.getContext('2d');
let audioSource;
let analyser;
let audio1 = document.getElementById('Audio-clip');

 function AudioVisualizer(){
    audio1.pause();
    const audioContext = new AudioContext();
    audio1.volume = 0.3;
    audio1.play();
    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = (audioCanvas.width/2)/bufferLength;
    let barHeight;
    let x ;
    
    
    function animate(){
        x=0;
        ctx.clearRect(0,0, audioCanvas.width, audioCanvas.height);
        analyser.getByteFrequencyData(dataArray);
        for (let i=0; i< bufferLength; i++){
            barHeight = dataArray[i]*2;
            ctx.fillStyle = '#08D09F';
            ctx.fillRect(audioCanvas.width/2 - x, (audioCanvas.height - barHeight)/2, barWidth, barHeight);
            x +=barWidth;
        }
        for (let i=0; i< bufferLength; i++){
            barHeight = dataArray[i]*2;
            //ctx.fillStyle = '#08D09F';
            ctx.fillRect(x, (audioCanvas.height - barHeight)/2, barWidth, barHeight);
            x +=barWidth;
        }
        requestAnimationFrame(animate);

    }
    animate();
};

// Elementos de diálogo
const dialogoAudio = document.getElementById("dialogo-audio");
const textContainer =  $(".Text-Container");
const DialogoSalir = $("#ContenedorSets");

// Variable para controlar la reproducción del audio
let audioReproduciendose = false;


// Función para mostrar una frase de ayuda
function mostrarFraseAyudaAudio(dialogo, frase) {
  dialogo.text(frase); // Corregimos el método para establecer el texto en un elemento jQuery
}

// Evento click
function reproducirMensajeEspecifico(event, mensaje, tiempoEspecifico) {
  dialogoAudio.style.display = "flex";
  mostrarFraseAyudaAudio(textContainer, mensaje);

  // Ocultar el diálogo después del tiempo especificado
  setTimeout(function() {
    dialogoAudio.style.display = "none";
    event.target.removeEventListener("click", reproducirMensajeHandler);
  }, tiempoEspecifico);
}
const TextBoxSetA = document.getElementById('TextboxA');
const TextBoxSetB = document.getElementById('TextboxB');

function reproducirMensajeHandler(event) {
  const boton = event.target;
  if (boton === boton1) {
    reproducirMensajeEspecifico(event, "Puedes filtrar los resultados para solo visualizar las operaciones de tu interés a tu derecha. ", 7000); // Tiempo específico: 8000 ms
    audio1.src = './Assets/Audio/PuedesFiltrar01.mp3';
    AudioVisualizer();
  } else if (boton === boton2) {
    reproducirMensajeEspecifico(event, "Para salir solo presiona cualquier parte alrededor", 5000); // Tiempo específico: 5000 ms
    audio1.src = './Assets/Audio/ParaSalir1.mp3';
    AudioVisualizer();
  }
  else if (boton === TextBoxSetA) {
    reproducirMensajeEspecifico(event, "Por defecto, comas o espacios separan los valores introducidos. Puedes cambiarlo en los ajustes.", 7000); // Tiempo específico: 5000 ms
    audio1.src = './Assets/Audio/PorDefecto01.mp3';
    AudioVisualizer();
  }
  else if (boton === TextBoxSetB) {
    reproducirMensajeEspecifico(event, "Cuando estés listo, presiona Operar.", 6000); // Tiempo específico: 5000 ms
    audio1.src = './Assets/Audio/CuandoEstesListo01.mp3';
    AudioVisualizer();
  }
}

boton1.addEventListener("click", reproducirMensajeHandler);
boton2.addEventListener("click", reproducirMensajeHandler);
TextBoxSetA.addEventListener("click", reproducirMensajeHandler);
TextBoxSetB.addEventListener("click", reproducirMensajeHandler);

