var modelUser = require('../model/user');
var userDao = require('../dao/userDao');

module.exports = function(app){
  app.get('/',function(req,res,next){
    res.render('index',{title:'Hello Express'});
  });
  app.get('/logon',function(req,res,next){
    res.send('logon page: use this router : Express');
  });
  app.get('/reg',function(req,res,next){
    res.render('register',{title:'Register'})
  });
  app.post('/reg',function(req,res,next){
    var postData = {
      "username":req.body.name,
      "password":req.body.pass
    }
    var doc = userDao("add",modelUser,postData);
    res.send(doc);
  })
  app.get('/logout',function(req,res,next){
    res.send('logout page: use this router : Express');
  });
}
