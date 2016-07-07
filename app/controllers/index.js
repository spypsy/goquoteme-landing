var router = require('express').Router();

router.use('/', require('./home').router);
// router.use('/', require('./typeform').router);

exports.router = router;
