module.exports = function(app){
  app.get('/',function(req,res,next){
    res.render('index',{title:'Hello Express'});
  });
  app.get('/logon',function(req,res,next){
    res.send('logon page: use this router : Express');
  });
  app.get('/reg',function(req,res,next){
    res.send('reg page: use this router : Express');
  });
  app.get('/logout',function(req,res,next){
    res.send('logout page: use this router : Express');
  });
}
