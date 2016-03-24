var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shippable automating deployment to your Elastic Beanstalk' });
});

module.exports = router;
