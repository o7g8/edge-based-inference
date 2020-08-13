const tfnode = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const { backend } = require('@tensorflow/tfjs-node');
//const fs = require('fs');
const tfBackend = tfnode.getBackend();

exports.index = function(req, res, next) {
    res.render('client_inference', { title: 'Express' });
  }

exports.canvas = function(req, res, next) {
  res.render('canvas');
}

// var count=0;
exports.postCanvas = async function (req, res, next) {
  let base64Data = req.body.imgData.replace(/^data:image\/jpeg;base64,/, "");
  let buff = new Buffer(base64Data, 'base64');
  const decodedImage = tfnode.node.decodeImage(buff, 3);

  const model = await mobilenet.load();
  const predictions = await model.classify(decodedImage);

  var result = predictions[0];
  result.backend = tfBackend;
  res.json(result);

  // count++;
  // fs.writeFile(`/tmp/out${count}.jpg`, buff, function (err, data) {
  //   if(err) {
  //     console.log(err);
  //     return res.status(500).send(new Error(err));
  //   }
  // });
  //res.json({ inference: 'OK' })
}