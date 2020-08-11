exports.index = function(req, res, next) {
    res.render('client_inference', { title: 'Express' });
  }

exports.postCanvas = function(req, res, next) {
  res.json({ inference: 'OK' })
}

exports.canvas = function(req, res, next) {
  res.render('canvas');
}