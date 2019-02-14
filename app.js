var express = require('express');
var constants = require('./constants');
var app = express();


 // setting up the templating view engine
app.set('view engine', 'ejs');
console.log(constants[0].name);
 
app.get('/', function(request, response){    
    response.render('index', {title: 'My Homepage', msg: 'Hello World'});
});
 
// for users list page
app.get('/users', function(request, response){    

    response.render('users', {users: constants});
});
app.get('/users/:rsn',(req,res)=>{
    console.log(req.params.rsn);
    res.render('profile',{users: constants[req.params.rsn]});
});
 

 
app.listen(8080, function(){
    console.log('Server running at port 8080: http://127.0.0.1:8080');
});