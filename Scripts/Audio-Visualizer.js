/* const audioContainer = document.getElementById('Audio-Container');
const audioCanvas = document.getElementById('Audio-Canvas');
audioCanvas.width = window.innerWidth;
audioCanvas.height = window.innerHeight;
const ctx = audioCanvas.getContext('2d');
let audioSource;
let analyser;

audioContainer.addEventListener('click', function(){
    let audio1 = document.getElementById('Audio-clip');
    audio1.src = './Assets/Audio/Bienvenida1.mp3';
    const audioContext = new AudioContext();
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
            ctx.fillStyle = '#DC2A5F';
            ctx.fillRect(audioCanvas.width/2 - x, (audioCanvas.height - barHeight)/2, barWidth, barHeight);
            x +=barWidth;
        }
        for (let i=0; i< bufferLength; i++){
            barHeight = dataArray[i]*2;
            ctx.fillStyle = '#DC2A5F';
            ctx.fillRect(x, (audioCanvas.height - barHeight)/2, barWidth, barHeight);
            x +=barWidth;
        }
        requestAnimationFrame(animate);

    }
    animate();
}); */