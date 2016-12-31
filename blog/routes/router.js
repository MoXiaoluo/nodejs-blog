var modelUser = require('../model/user');
var userDao = require('../dao/userDao');

module.exports = function(app){
  app.get('/',function(req,res,next){
    res.render('index',{title:'Home page'});
  });
  app.get('/logon',function(req,res,next){
    res.render('logon',{title:"Logon"})
  });

  app.post("/logonname",function(){

  })

  app.post('/logon',function(req,res,next){
    var postData = {
      username:req.body.name,
      password:req.body.pass
    };
    userDao("select",modelUser,postData);
    res.send("logon success");
  });

  app.get('/reg',function(req,res,next){
    res.render('register',{title:'Register'})
  });
  app.post('/reg',function(req,res,next){
    var postData = {
      username:req.body.name,
      password:req.body.pass
    };
    var doc = userDao("add",modelUser,postData);
    console.log(doc)
    res.send("register success");
  });
  app.get('/logout',function(req,res,next){
    res.send('logout page: use this router : Express');
  });
}
