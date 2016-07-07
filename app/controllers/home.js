var router = require('express').Router();
const request = require('superagent');

var home = function (req, res) {
  var data = {
  };
  req.session.error = null;
  req.session.success = null;
  res.render('index.html', data);
};

router.get('/', home);

exports.router = router;
