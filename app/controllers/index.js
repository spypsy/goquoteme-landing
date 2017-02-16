var router = require('express').Router();

router.use('/', require('./home').router);
router.use('/', require('./storeEmail').router);

exports.router = router;
