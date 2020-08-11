var express = require('express');
var router = express.Router();

let inference = require('../controllers/inference');
/* GET home page. */
router.get('/', inference.index);

router.post('/api/canvas', inference.postCanvas);

router.get('/canvas', inference.canvas);

module.exports = router;
