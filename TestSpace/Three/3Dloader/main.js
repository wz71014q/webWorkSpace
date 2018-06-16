// import * as Stats from 'stats';
// import * as THREE from 'three';
const width = window.innerWidth;
const height = window.innerHeight;
var stats;
var renderer;
var camera;
var light;
var scene;
var controls;

function initStats() {
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  stats.domElement.style.left = '0px';
  document.body.appendChild(stats.domElement);
}

function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  // 抗锯齿打开后坐标轴可能会有几条看不清
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1.0);
  document.body.appendChild(renderer.domElement);
}

function initScene() {
  scene = new THREE.Scene();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 10, 10000);
  camera.position.set(500, 500, 500);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);
}

function initLight() {
  light = new THREE.DirectionalLight({ color: 0xffffff });
  light.position.set(1, 1, 1);
  let ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
  scene.add(light);
}

let onProgress = () => {
  // if (xhr.lengthComputable) {
  //   let percentComplete = (xhr.loaded / xhr.total) * 100;
  console.log('loading');
  // }
};

let onError = (err) => { console.log('error' + err); };

function initCar() {
  let mtlLoader = new THREE.MTLLoader();
  mtlLoader.load('./Blackhawk/uh60.mtl', (materials) => {
    materials.preload();
    let objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('./Blackhawk/uh60.obj', (object) => {
      // object.position.y = -0.5;
      object.scale.set(200, 200, 200);
      scene.add(object);
    }, onProgress(), onError());
  });
}

function initAxes() {
  /**
   * @author Qiang
   * @function initAxes 坐标轴
   */
  let axes = new THREE.AxesHelper(1000);
  scene.add(axes);
}

function initControl() {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls = new THREE.TrackballControls(camera, renderer.domElement);
  // controls = new THREE.FlyControls(camera, renderer.domElement);
  // controls = new THREE.FirstPersonControls(camera, renderer.domElement);
  // controls.minDistance = 300;
  // controls.maxDistance = 600;
  // controls.maxPolarAngle = 1.5;// 上下两极的可视区域的最大角度
  // controls.minPolarAngle = 1;// 上下两极的可视区域最小角度
  // controls.enableDamping = true;// 允许远近拉伸
  // controls.enableKeys = false;// 禁止键盘控制
  // controls.enablePan = false;// 禁止平移
  // controls.dampingFactor = 0.1;// 鼠标滚动一个单位时拉伸幅度
  // controls.rotateSpeed = 0.5;// 旋转速度
  // // controls.enabled = false;// 禁用控制器
  // controls.minDistance = 300;// 离中心物体的最近距离
  // controls.maxDistance = 3000;// 离中心物体的最远距离
}

function animated() {
  renderer.clear();
  renderer.render(scene, camera);
  requestAnimationFrame(animated);
  stats.update();
  controls.update();
}

function threeStart() {
  initStats();
  initThree();
  initCamera();
  initScene();
  initLight();
  initAxes();
  initCar();
  initControl();
  animated();
}

window.onload = function () {
  threeStart();
};
