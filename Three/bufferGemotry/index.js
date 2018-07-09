var renderer;
var scene;
var camera;
var light;
var geometry;
var stats;
const width = window.innerWidth;
const height = window.innerHeight;

function initStats() {
  stats = new Stats();
  stats.domElement.style.position = 'absolutle';
  stats.domElement.style.top = '0px';
  stats.domElement.style.right = '0px';
  document.body.appendChild(stats.domElement);
}

function initRender() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 1.0);
  document.body.appendChild(renderer.domElement);
}

function initScene() {
  scene = new THREE.Scene();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 100, 10000);
  camera.up.set(0, 1, 0);
  camera.position.set(500, 500, 500);
  camera.lookAt(0, 0, 0);
}

function initLight() {
  light = new THREE.DirectionalLight({ color: 0xffffff });
  light.position.set(1, 1, 1);
  scene.add(light);
}

function initAxes() {
  let axes = new THREE.AxesHelper(10000);// 蓝色为Z轴，绿色为Y轴，红色为X轴
  scene.add(axes);
}

function initObject() {
  geometry = new THREE.BufferGeometry();
  let vertices = new Float32Array([
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,
    -1.0, -1.0, 1.0
  ]);
  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

function animated() {
  renderer.clear();
  renderer.render(scene, camera);
  requestAnimationFrame(animated);
  stats.update();
}

function threeStart() {
  initStats();
  initRender();
  initCamera();
  initScene();
  initLight();
  initAxes();
  initObject();
  animated();
}

window.onload = function () {
  threeStart();
};
