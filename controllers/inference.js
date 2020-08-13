const tfnode = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfBackend = tfnode.getBackend();
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
  const predictions = await model.classify(decodedImage);

  var result = predictions[0];
  result.backend = tfBackend;
  res.json(result);
}