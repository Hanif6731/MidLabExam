var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login   = require('./controllers/login');
var admin = require('./controllers/admin');
var app 		= express();

//config
app.set('view engine', 'ejs');




//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));


/*app.get('/admin.js/user/:abc/:name', function(req, res){
	res.send(req.params.abc+" | "+req.params.name);
});*/

app.use('/login',login);
app.use('/admin',admin);

app.get('/', function(req, res){
    res.redirect('/login');
});

app.listen(3000, function(){
    console.log('express http server started at...3000');
});
