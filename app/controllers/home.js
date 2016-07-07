var router = require('express').Router();
const request = require('superagent');

var home = function (req, res) {
  // var data = {
  //   err: req.session.error,
  //   success: req.session.success,
  // };
  // req.session.error = null;
  // req.session.success = null;
  res.render('index.html');
};

router.get('/', home);

exports.router = router;
