let renderer;
let scene;
let camera;
let light;
let stats;
let controls;
const width = window.innerWidth;
const height = window.innerHeight;

function initStats() {
  stats = new Stats();
  stats.domElement.style.position = 'absolutle';
  stats.domElement.style.top = '0px';
  stats.domElement.style.right = '0px';
  document
    .body
    .appendChild(stats.domElement);
}

function initRender() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 1);
  renderer.shadowMap.enabled = true; // 告诉渲染器需要阴影效果
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  document.body.appendChild(renderer.domElement);
}

function initScene() {
  scene = new THREE.Scene();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 100, 10000);
  camera.up.set(0, 0, 1);
  camera.position.set(500, 500, 500);
  camera.lookAt(0, 0, 0);
}

function initLight() {
  scene.add(new THREE.AmbientLight(0xcccccc));
  light = new THREE.PointLight(0xffffff);
  light.castShadow = true; // 告诉光需要开启阴影投射
  // Set up shadow properties for the light
  light.shadow.mapSize.width = 612; // default
  light.shadow.mapSize.height = 612; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 600; // default
  light.position.set(-100, 0, 400);
  scene.add(light);
  // let helper = new THREE.CameraHelper(light.shadow.camera);
  // scene.add(helper);
}

function initAxes() {
  let axes = new THREE.AxesHelper(1000); // 红色为X轴, 绿色为Y轴, 蓝色为Z轴
  scene.add(axes);
}

function initCatmullRomCurve3() {
  // 设置参考点
  let pointsArr = [
    new THREE.Vector3(-100, 0, 100),
    new THREE.Vector3(-50, 50, 50),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(50, -50, 50),
    new THREE.Vector3(100, 0, 100)
  ];
  let curve = new THREE.CatmullRomCurve3(pointsArr, false, 'centripetal', 0);
  let points = curve.getPoints(50);
  let geometry = new THREE.BufferGeometry().setFromPoints(points);
  let material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  // Create the final object to add to the scene
  let curveObject = new THREE.Line(geometry, material);
  scene.add(curveObject);
}

function initLineCurve3d() {
  // 3d直线
  let curve = new THREE.LineCurve3(new THREE.Vector3(-100, 0, 100), new THREE.Vector3(50, -50, 50));
  let points = curve.getPoints(50);
  let geometry = new THREE.BufferGeometry().setFromPoints(points);
  let material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  // Create the final object to add to the scene
  let curveObject = new THREE.Line(geometry, material);
  scene.add(curveObject);
}

function initCubicBezierCurve3() {
  // 立体3d贝塞尔曲线
  // CubicBezierCurve3( v0 : Vector3, v1 : Vector3, v2 : Vector3, v3 : Vector3 )
  // v0 – The starting point.
  // v1 – The first control point.
  // v2 – The second control point.
  // v3 – The ending point.
  let curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3(-100, 100, 200),
    new THREE.Vector3(-50, 150, 10),
    new THREE.Vector3(200, 150, 10),
    new THREE.Vector3(100, 0, -100)
  );
  let points = curve.getPoints(50);
  let geometry = new THREE.BufferGeometry().setFromPoints(points);
  let material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  // Create the final object to add to the scene
  let curveObject = new THREE.Line(geometry, material);
  scene.add(curveObject);
}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function initControl() {
  controls = new THREE.OrbitControls(camera);
  controls.enableDamping = true; // boolean, 开启后有缓冲效果，具有物理的阻力感
  controls.dampingFactor = 0.1; // Float, 阻尼系数(0~1)，数值越低，阻力越小
}

function animated() {
  renderer.clear();
  stats.update();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animated);
}

function threeStart() {
  initStats();
  initRender();
  initCamera();
  initScene();
  initLight();
  initAxes();
  initCubicBezierCurve3();
  initControl();
  resize();
  animated();
}

window.onload = function () {
  threeStart();
};
