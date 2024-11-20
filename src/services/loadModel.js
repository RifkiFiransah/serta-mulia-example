// const tf = require('@tensorflow/tfjs-node');

// async function loadModel() {
//   return tf.loadGraphModel(`file://${process.env.MODEL_URL}`);
//   try {
  //     const model = await tf.loadGraphModel('file:///home/rifkifiransah/bangkit/serta-mulia/model/model.json');
  //     console.log("Model loaded successfully");
  //     return model;
  //   } catch (error) {
    //     console.error("Error loading model:", error);
    //   }
    // }
    
    // module.exports = loadModel
const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    return tf.loadGraphModel(process.env.MODEL_URL);
    // return tf.loadGraphModel(`file://${process.env.MODEL_URL}`);
}
module.exports = loadModel;