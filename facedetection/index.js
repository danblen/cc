import * as faceDetection from '@tensorflow-models/face-detection';
import * as tf from '@tensorflow/tfjs';


const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
console.log(model);
const detectorConfig = {
  runtime: 'mediapipe', // or 'tfjs'
}
const detector = await faceDetection.createDetector(model, detectorConfig);