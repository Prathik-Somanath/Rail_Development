var express = require('express');
var constants = require('./constants');
var app = express();


 // setting up the templating view engine
app.set('view engine', 'ejs');
console.log(constants);
 
app.get('/', function(request, response){    
    response.render('index', {title: 'My Homepage', msg: 'Hello World'});
});
 
// for users list page


app.get('/users', function(request, response){    

    response.render('users', {users: constants});
});

/*
app.get('/users/:rsn',(req,res)=>{
    console.log(req.params.rsn);
    res.render('profile',{users: constants[req.params.rsn]});
});
 
*/

// for individual user page
app.get('/users/:rsn', function (request, response) {
    //Get the individual user details using request param ID
     
    var singleUser = constants.filter(function (user) {
        console.log(user.rsn);
        return user.rsn == request.params.rsn
    });

    var singleUser = singleUser[0];

    response.render('profile', {
        rsn: singleUser.rsn,
        name: singleUser.name,
        branch: singleUser.branch,
        gender: singleUser.gender,
        phno: singleUser.phno,
        role: singleUser.role,
        loginStatus: singleUser.loginStatus
    });
});

 
app.listen(8080, function(){
    console.log('Server running at port 8080: http://127.0.0.1:8080');
});