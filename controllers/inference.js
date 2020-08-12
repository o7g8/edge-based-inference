exports.index = function(req, res, next) {
    res.render('client_inference', { title: 'Express' });
  }

exports.canvas = function(req, res, next) {
  res.render('canvas');
}

exports.postCanvas = function(req, res, next) {
  // TODO: receive the image and run the inference: return results, backend type.
  console.log(req.body.imgData);
  res.json({ inference: 'OK' })
}