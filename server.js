var express     = require('express'),
    app         = express(),
    morgan      = require('morgan'),
    config      = require('./config'),
    path        = require('path'),
    apiRoutes = require('./app/routes/api')(app, express),
    bodyParser  = require('body-parser');

//App Configuration
//Use BodyParser to get information from POSTs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// Console logging for all requests
app.use(morgan('dev'));


// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');


// Routing
app.get('partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

// API ROUTES ------------------------
app.use('/api', apiRoutes);

// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
    res.render('index');
});

app.listen(config.port);
console.log('Listening on port: ' + config.port + '...');
console.log('\r\n');