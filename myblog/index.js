var path = require('path');
var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.send('hello, express');
// });

// app.get('/users/:name',function(req,res){
// 	res.send('hello,  ' + req.params.name)
// })

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',indexRouter);
app.use('/users',userRouter);

app.listen(3000);
// var server = app.listen(8081,function(){
// 	var host = server.address().address;
// 	var port = server.address().port;
// 	console.log(host+'----------'+port);
// })