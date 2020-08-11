exports.index = function(req, res, next) {
    res.render('client_inference', { title: 'Express' });
  }

exports.postCanvas = function(req, res, next) {
  // TODO: receive the image and run the inference: return results, backend type.
  res.json({ inference: 'OK' })
}

exports.canvas = function(req, res, next) {
  res.render('canvas');
}