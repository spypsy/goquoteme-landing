/*jshint node: true*/
var express = require('express');
// var session = require('express-session');
var bodyParser = require('body-parser');
var compress = require('compression');

var app = express();
var router = require(__dirname + '/app/controllers');

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

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
// app.use(session({ secret: 'keyboard cat' }));
app.use(router.router);

console.log('I AM RUNNING');

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('GoQuoteMe test app listening at http://%s:%s', host, port);

});
