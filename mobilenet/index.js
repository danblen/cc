import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

// 获取 HTML 元素
const uploadImage = document.getElementById('uploadImage');
const inputImage = document.getElementById('inputImage');
const prediction = document.getElementById('prediction');

let model;

// 加载预训练的 MobileNet 模型
async function loadModel() {
  model = await mobilenet.load();
  console.log('Model loaded');
}

// 处理图像上传
uploadImage.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    inputImage.src = e.target.result;
    classifyImage();
  };

  reader.readAsDataURL(file);
});

// 对图像进行分类
async function classifyImage() {
  if (!model) {
    console.log('Model not loaded yet');
    return;
  }

  // 等待图像加载完成
  await new Promise((resolve) => {
    inputImage.onload = resolve;
  });

  // 进行图像分类
  const predictions = await model.classify(inputImage);
  console.log(predictions);
  displayPredictions(predictions);
}

// 显示预测结果
function displayPredictions(predictions) {
  prediction.innerHTML = '';
  predictions.forEach((pred) => {
    const p = document.createElement('p');
    p.innerText = `${pred.className}: ${pred.probability.toFixed(4)}`;
    prediction.appendChild(p);
  });
}

// 加载模型
loadModel();
