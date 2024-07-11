// import * as tf from 'https://unpkg.com/@tensorflow/tfjs@latest';
import '@tensorflow/tfjs';


// 加载MobileNet模型
async function loadModel() {
    const model = await tf.loadGraphModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/3/default/1/model.json');
    console.log('Model loaded');
    return model;
}

// 加载ImageNet标签
async function loadLabels() {
    const response = await fetch('https://storage.googleapis.com/download.tensorflow.org/data/imagenet_class_index.json');
    const labels = await response.json();
    return labels;
}

// 运行模型进行推理
async function runModel() {
    console.log('Running model...',tf);
    const model = await loadModel();
    const labels = await loadLabels();
    const image = document.getElementById('image');
    const tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .expandDims();

    const predictions = await model.predict(tensor).data();
    const top5 = Array.from(predictions)
        .map((p, i) => ({ probability: p, className: labels[i] }))
        .sort((a, b) => b.probability - a.probability)
        .slice(0, 5);

    console.log(top5);
    top5.forEach(p => {
        console.log(`${p.className[1]}: ${p.probability.toFixed(6)}`);
    });
}

runModel();
