/*jshint node: true*/
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');

var app = express();
var router = require(__dirname + '/app/controllers');

app.use(cors());


function storeEmail() {

}

// Use connect method to connect to the server

  // db.close();
  // Get the documents collection
  // var Email = db.collection('email');
  // Insert some documents
  // collection.insertMany([
  //   {a : 1}, {a : 2}, {a : 3}
  // ], function(err, result) {
  //   assert.equal(err, null);
  //   assert.equal(3, result.result.n);
  //   assert.equal(3, result.ops.length);
  //   console.log("Inserted 3 documents into the collection");
  // });

  function logger(req, res, next) {
    console.log('LOGGED');
    console.log(req.body);
    console.log(req.headers);
    next();
  }


app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3001));


var options = {
  dotfiles: 'ignore',
  etag: true,
  index: false,
  maxAge: 3600000,
  redirect: false
};

app.use(compress());
app.use(express.static(__dirname + '/app', options));
//app.use(express.cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(session({ secret: 'keybaord cat' }));
app.use(logger)
app.use(router.router);


var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('FilmBeat test app listening at http://%s:%s', host, port);

});
