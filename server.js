var express     = require('express'),
    logger      = require('morgan'),
    request     = require('request'),
    bodyParser  = require('body-parser');

var env  = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));


// Routing

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

// Allows us to handle routing in the client-side.
// Any route other than what is specified in the client-side will return the user to the Index.
app.get('*', function(req, res){
    res.render('index');
});


var port = 3030;
app.listen(port);
console.log('Listening on port: ' + port + '...');
console.log('\r\n');