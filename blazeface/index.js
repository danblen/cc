import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs';

// 获取 HTML 元素
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let model;

// 加载 Blazeface 模型
async function loadModel() {
  model = await blazeface.load();
  console.log('Model loaded');
}

// 设置视频流
async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'user' },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

// 绘制检测结果
function drawPredictions(predictions) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  predictions.forEach((prediction) => {
    const start = prediction.topLeft;
    const end = prediction.bottomRight;
    const size = [end[0] - start[0], end[1] - start[1]];
console.log(start, end, size);
    ctx.beginPath();
    ctx.rect(start[0], start[1], size[0], size[1]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  });
}

// 进行人脸检测
async function detectFaces() {
  const predictions = await model.estimateFaces(video, false);

  drawPredictions(predictions);

  requestAnimationFrame(detectFaces);
}

// 初始化
async function init() {
  await loadModel();
  await setupCamera();

  video.play();
  detectFaces();
}

init();
