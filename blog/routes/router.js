module.exports = function(app){
  app.get('/',function(req,res,next){
    res.send('Home page: use this router : Express');
  });
  app.get('/logon',function(req,res,next){
    res.send('logon page: use this router : Express');
  });
  app.get('/reg',function(req,res,next){
    res.send('logon page: use this router : Express');
  });
  app.get('/logout',function(req,res,next){
    res.send('logon page: use this router : Express');
  });
}
