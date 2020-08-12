exports.index = function(req, res, next) {
    res.render('client_inference', { title: 'Express' });
  }

exports.canvas = function(req, res, next) {
  res.render('canvas');
}

var count=0;
exports.postCanvas = function(req, res, next) {
  let base64Data = req.body.imgData.replace(/^data:image\/jpeg;base64,/, "");
  let buff = new Buffer(base64Data, 'base64');

  // TODO: receive the image and run the inference: return results, backend type.
  count++;
  require('fs').writeFile(`/tmp/out${count}.jpg`, buff, function (err, data) {
    if(err) {
      console.log(err);
      return res.status(500).send(new Error(err));
    }
  });
  res.json({ inference: 'OK' })
}