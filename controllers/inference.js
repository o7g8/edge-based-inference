const tfnode = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfBackend = tfnode.getBackend();
const { performance } = require('perf_hooks');
var model;

exports.index = function(req, res, next) {
    res.render('client_inference', { title: 'Express' });
  }

exports.canvas = function(req, res, next) {
  res.render('canvas');
}

exports.postCanvas = async function (req, res, next) {
  let base64Data = req.body.imgData.replace(/^data:image\/jpeg;base64,/, "");
  let buff = Buffer.from(base64Data, 'base64');
  const decodedImage = tfnode.node.decodeImage(buff, 3);

  // lazy model initialization
  if(model === undefined) {
    model = await mobilenet.load();
  }

  const t1 = performance.now();
  const predictions = await model.classify(decodedImage);
  const duration = performance.now() - t1;

  var result = predictions[0];
  result.backend = tfBackend;
  result.inferenceDurationMs = duration;
  res.json(result);
}