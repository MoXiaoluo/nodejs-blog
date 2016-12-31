var mongoose = require('mongoose');

module.exports = function(operate,model,data){
  if(operate == "add"){
    model.create(data,function(err,doc){
      if(err){
        console.log(err);
      }
      console.log(doc);
    })
  }else if(operate == "select"){
    model.find({"username":data.username},function(err,doc){
      if(err){
        console.log(err);
      }
      console.log(doc[0].password);
      if(doc.password === data.password){
        return true;
      }else{
        return false;
      }
    })
  }else if(operate == "delete"){

  }else if(operate == "update"){

  }
}
