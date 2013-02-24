
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index',{
		title : 'Los mejores Autos Deportivos'
	});
});

app.get('/Autos', function(req, res){
	res.render('autos',{
		title : "Autos Deportivos"
	});
});

app.get('/BMW', function(req, res){
	res.render('bmw',{
		title : "Los Mejores BMW"
	});
});

app.get('/FERRARY', function(req, res){
	res.render('ferrary',{
		title : "Los Mejores FERRARI"
	});
});

app.get('/AUDI', function(req, res){
	res.render('audi',{
		title : "Los Mejores AUDI"
	});
});

app.get('/HONDA', function(req, res){
	res.render('honda',{
		title : "Los Mejores HONDA"
	});
});
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
