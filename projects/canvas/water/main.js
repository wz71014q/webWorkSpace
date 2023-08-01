import './index.html';
import './style.css';

let conText;
let tangram;
tangram = [
  {
    p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }],
    color: '#ff0000',
  },
  {
    p: [{ x: 0, y: 0 }, { x: 0, y: 800 }, { x: 400, y: 400 }],
    color: '#fff000',
  },
  {
    p: [{ x: 0, y: 800 }, { x: 200, y: 600 }, { x: 400, y: 800 }],
    color: '#ffaaf0',
  },
  {
    p: [{ x: 400, y: 800 }, { x: 800, y: 400 }, { x: 800, y: 800 }],
    color: '#ffaa00',
  },
  {
    p: [
      { x: 800, y: 400 },
      { x: 800, y: 0 },
      { x: 600, y: 200 },
      { x: 600, y: 600 },
    ],
    color: '#00fff0',
  },
  {
    p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }],
    color: '#0000ff',
  },
  {
    p: [
      { x: 200, y: 600 },
      { x: 400, y: 800 },
      { x: 600, y: 600 },
      { x: 400, y: 400 },
    ],
    color: '#00aaff',
  },
];
function draw() {
  for (let i = 0; i < tangram.length; i++) {
    conText.beginPath();
    conText.moveTo(tangram[i].p[0].x, tangram[i].p[0].y);
    for (let j = 1; j < tangram[i].p.length; j++) {
      conText.lineTo(tangram[i].p[j].x, tangram[i].p[j].y);
    }
    conText.fillStyle = tangram[i].color;
    conText.closePath();
    conText.lineWidth = 3;
    conText.strokeStyle = '#000000';
    conText.stroke();
    conText.fill();
  }
}
function initCanvas() {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  conText = canvas.getContext('2d');
  draw();
}
window.onload = initCanvas;
