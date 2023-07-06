let cameraB,sceneB,rendererB, uniformsB;

//init() es asincrona para poder cargar los archivos .glsl, si los transformo a .js, esta funcion ya no tiene que ser asincrona
async function init2() {
  const container = document.getElementById('Contenedor_Derecho');

  cameraB = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
  cameraB.position.set(0, 0, 13.5);
  sceneB = new THREE.Scene();

  const fragmentShader = await loadTextFile('./Scripts/shaders/WhiteSphere/fragmentShader.glsl');
  const vertexShader = await loadTextFile('./Scripts/shaders/WhiteSphere/vertexShader.glsl');

  uniformsB = {
    u_time: { value: 0.0 },
    color: { value: new THREE.Vector3(0.0, 0.0, 0.0) }
  };

  const geometry = new THREE.IcosahedronGeometry(1, 100);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms:uniformsB
  });

  const Blacksphere = new THREE.Mesh(geometry, material);
  Blacksphere.rotation.y = Math.PI / 7;

  sceneB.add(Blacksphere);

  if (material.uniforms !== undefined && material.uniforms.color !== undefined) {
    var colorUniform = material.uniforms.color;
    var newColor = new THREE.Vector3(0.0, 0.0, 0.0);
    colorUniform.value.copy(newColor);
  } else {
    console.error("El material no tiene el uniforme 'color' definido.");
  }

  rendererB = new THREE.WebGLRenderer({ alpha: true ,antialias: true });
  rendererB.setPixelRatio(window.devicePixelRatio);
  rendererB.setSize(window.innerWidth, window.innerHeight);
  rendererB.toneMapping = THREE.ACESFilmicToneMapping;
  rendererB.toneMappingExposure = 1;

  container.appendChild(rendererB.domElement);

  window.addEventListener('resize', onWindowResize);
  render2();
}

//Carga los archivos fragment y vertex .glsl
async function loadTextFile(url) {
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

function onWindowResize() {
    cameraB.aspect = window.innerWidth / window.innerHeight;
  cameraB.updateProjectionMatrix();
  rendererB.setSize(window.innerWidth, window.innerHeight);
}

function render2() {
  if (uniformsB && uniformsB.u_time) {
    uniformsB.u_time.value = performance.now() / 15000;
  }
  rendererB.render(sceneB, cameraB);
  requestAnimationFrame(render2);
}

window.addEventListener('resize', onWindowResize);
init2();
