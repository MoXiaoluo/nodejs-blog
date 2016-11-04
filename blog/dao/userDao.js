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

  }else if(operate == "delete"){

  }else if(operate == "update"){

  }
}
