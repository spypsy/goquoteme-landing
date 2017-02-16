var router = require('express').Router();
var MongoClient = require('mongodb').MongoClient



host = 'mongodb://localhost:27017/filmbeat'

if (process.env.MONGODB_URI) {
  host = process.env.MONGODB_URI;
}

console.log('connecting to db: ', host);


function registerEmail(req, res) {
  MongoClient.connect(host, function(err, db) {
    if (err) {
      console.log('error connecting to mongo');
      console.log(err);
      process.exit(1);
    }
    var Email = db.collection('emails');
    console.log(req.query.email);
    Email.insert({
      email: req.query.email,
      createdAt: new Date()
    }, function(err, result) {
      // res.status(200).send();
      res.send().status(200);
    });

    console.log("Connected successfully to mongo server");
  });
}

router.post('/register-email', registerEmail);
router.get('/register-email', registerEmail);

exports.router = router;
