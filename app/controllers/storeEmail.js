var router = require('express').Router();
var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/filmbeat';

function registerEmail(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('error connecting to mongo');
      process.exit(1);
    }
    var Email = db.collection('emails');
    Email.insert({
      email: req.body.email,
      createdAt: new Date()
    }, function(err, result) {
      // res.status(200).send();
      res.send().status(200);
    });

    console.log("Connected successfully to mongo server");
  });
}

router.post('/api/register-email', registerEmail);

exports.router = router;
