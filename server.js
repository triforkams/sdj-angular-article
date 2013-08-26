var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    path = require('path');

var messages = {"messages":[
					{"id":1,"description":"AngularJS is cool to work with"},
					{"id":2,"description":"AngularJS is also very flexible"}
				],
				"latestId":2
	};

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

app.get('/', function(req, res){
    return res.render('index', { "name" : "AngularJS" });
});

app.get('/api/message', function(req,res) {
	return res.send(JSON.stringify(messages.messages));
});

app.post('/api/message', function(req,res) {
	var message = {};
	message.description = req.body.description;
	messages.latestId = messages.latestId + 1;
	message.id = messages.latestId;
	messages.messages.push(message);
	return res.send(message, 200);
});

app.get('*', function(req, res){
    return res.send('Page Not Found', 404);
});


app.listen(8080);
console.log('Express server started on port 8080');
