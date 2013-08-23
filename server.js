var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    path = require('path');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    return res.render('index', { "name" : "AngularJS" });
});

app.get('/messages', function(req,res) {
	return res.send('{"messages":[{"description":"Messages 1"},{"description":"Messages 2"}]}');
});

app.get('*', function(req, res){
    return res.send('Page Not Found', 404);
});


app.listen(8080);
console.log('Express server started on port 8080');
