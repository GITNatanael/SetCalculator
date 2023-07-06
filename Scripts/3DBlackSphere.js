let camera, scene, renderer;
let uniforms;

//init() es asincrona para poder cargar los archivos .glsl, si los transformo a .js, esta funcion ya no tiene que ser asincrona
async function init() {
  const container = document.getElementById('Contenedor_Izquierdo');

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
  camera.position.set(0, 0, 6.5);
  scene = new THREE.Scene();

  const fragmentShader = await loadTextFile('./Scripts/shaders/BlackSphere/fragmentShader.glsl');
  const vertexShader = await loadTextFile('./Scripts/shaders/BlackSphere/vertexShader.glsl');

  uniforms = {
    u_time: { value: 0.0 },
    color: { value: new THREE.Vector3(0.0, 0.0, 0.0) }
  };

  const geometry = new THREE.IcosahedronGeometry(1, 100);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms
  });

  const Blacksphere = new THREE.Mesh(geometry, material);
  Blacksphere.rotation.y = Math.PI / 7;

  scene.add(Blacksphere);

  if (material.uniforms !== undefined && material.uniforms.color !== undefined) {
    var colorUniform = material.uniforms.color;
    var newColor = new THREE.Vector3(0.0, 0.0, 0.0);
    colorUniform.value.copy(newColor);
  } else {
    console.error("El material no tiene el uniforme 'color' definido.");
  }

  renderer = new THREE.WebGLRenderer({ alpha: true ,antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  container.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize);
  render();
}

//Carga los archivos fragment y vertex .glsl
async function loadTextFile(url) {
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
  if (uniforms && uniforms.u_time) {
    uniforms.u_time.value = performance.now() / 15000;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.addEventListener('resize', onWindowResize);
init();
