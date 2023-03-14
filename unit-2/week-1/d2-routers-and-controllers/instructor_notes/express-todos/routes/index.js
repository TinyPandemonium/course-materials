var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('first index hit')
  next();
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'SEIR BTY' });
});

module.exports = router;