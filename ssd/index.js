// 在页面加载后运行代码
document.addEventListener('DOMContentLoaded', run);

async function run() {
  const videoElement = document.getElementById('videoElement');
  const canvasElement = document.getElementById('canvasElement');
  const ctx = canvasElement.getContext('2d');

  // 加载Coco SSD模型
  const model = await cocoSsd.load();

  // 获取摄像头流
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    await videoElement.play();
  }

  // 定期运行检测
  setInterval(async () => {
    // 绘制视频帧到画布
    ctx.drawImage(videoElement, 0, 0, 640, 480);
    // 进行对象检测
    const predictions = await model.detect(videoElement);
    // 清除旧的检测框
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // 绘制新的检测框和标签
    predictions.forEach(prediction => {
      ctx.beginPath();
      ctx.rect(...prediction.bbox);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.stroke();
      ctx.font = '16px Arial';
      ctx.fillText(prediction.class, prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
    });
  }, 100); // 每100毫秒进行一次检测
}
