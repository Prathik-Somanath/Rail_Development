var express = require('express');
var constants = require('./constants');
var app = express();


 
// setting up the templating view engine
app.set('view engine', 'ejs');
console.log(constants[0].rsn);
 
app.get('/', function(request, response){    
    response.render('index', {title: 'My Homepage', msg: 'Hello World'});
});
 
// for users list page
app.get('/users', function(request, response){    

    response.render('users', {users: constants[0]});
});
 

 
app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000');
});