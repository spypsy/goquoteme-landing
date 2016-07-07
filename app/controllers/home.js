var router = require('express').Router();
const request = require('superagent');

var home = function (req, res) {
  var data = {
    err: req.session.error,
    success: req.session.success,
  };
  req.session.error = null;
  req.session.success = null;
  res.render('index.html', data);
};

router.get('/', home);
router.get('/jobs', function (req, res) {
  res.redirect(307, 'https://angel.co/enki-com/jobs');
});
router.get('/terms', function (req, res) {
  res.redirect(307, 'https://www.iubenda.com/privacy-policy/730360');
});
router.get('/ios', function (req, res) {
  res.redirect(307, 'https://geo.itunes.apple.com/app/enki/id993753145');
});
router.get('/android', function(req, res) {
  res.redirect(307, 'https://play.google.com/store/apps/details?id=com.enki.insights');
});

exports.router = router;
