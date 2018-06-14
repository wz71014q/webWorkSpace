// import * as Stats from 'stats';
// import * as THREE from 'three';
const width = document.getElementById('root').clientWidth;
const height = document.getElementById('root').clientHeight;
var stats;
var renderer;
var camera;
var light;
var mesh;
var scene;

function initStats() {
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  stats.domElement.style.right = '0px';
  document.getElementById('root').appendChild(stats.domElement);
}

function initThree() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1.0);
  document.getElementById('root').appendChild(renderer.domElement);
}

function initScene() {
  scene = new THREE.Scene();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 10, 10000);
  camera.position.set(600, 500, 500);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
  // camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function initLight() {
  light = new THREE.DirectionalLight({ color: 0xffff00 });
  light.position.set(1, 0, 1);
  scene.add(light);
}

function initObject() {
  let geometry = new THREE.CylinderGeometry(100, 100, 300, 100, 100);
  let material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position = new THREE.Vector3(0, 0, 0);
  // mesh.castShadow = true;// 增加投影
  // mesh.receiveShadow = true;// 允许接收投影
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
  initThree();
  initScene();
  initCamera();
  initLight();
  initObject();
  animated();
  // renderer.clear();
  // renderer.render(scene, camera);
}

window.onload = function () {
  threeStart();
};
