// import * as Stats from 'stats';
// import * as THREE from 'three';

const width = document.getElementById('root').clientWidth;
const height = document.getElementById('root').clientHeight;
var stats;
var renderer;
var camera;
var light;
var cube;
var mesh;
var scene;

function initStats() {
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
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
  camera = new THREE.PerspectiveCamera(45, width / height, 100, 10000);
  camera.position.set(0, 0, 500);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
}

function initLight() {
  light = new THREE.DirectionalLight({ color: 0xffffff });
  light.position.set(1, 0, 1);
  scene.add(light);
}

// function initObject() {
//   let geometry = new THREE.CylinderGeometry(100, 100, 300, 100, 100);
//   let material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
//   mesh = new THREE.Mesh(geometry, material);
//   mesh.position = new THREE.Vector3(0, 0, 0);
//   // mesh.castShadow = true;// 增加投影
//   // mesh.receiveShadow = true;// 允许接收投影
//   scene.add(mesh);
// }

function initCube() {
  cube = new THREE.BoxGeometry(100, 100, 100, 1, 1, 1);// 设置原点的几何体
  for (let i = 0; i < cube.faces.length; i += 2) {
    let color = Math.random() * 0xffffff;
    cube.faces[i].color.setHex(color);
    cube.faces[i + 1].color.setHex(color); // 设置每个面为随机颜色
  }

  let material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });
  mesh = new THREE.Mesh(cube, material);
  mesh.position.set(0, 0, 0);
  console.log('mesh的矩阵为:' + mesh.matrix.elements);

  scene.add(mesh);
}

function animated() {
  stats.update();
}

function threeStart() {
  initStats();
  initThree();
  initScene();
  initCamera();
  initLight();
  // initObject();
  initCube();
  animated();
}

window.onload = function () {
  threeStart();
};
