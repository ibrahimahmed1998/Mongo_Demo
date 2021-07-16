var express = require('express');
const User = require('../model/user');
var router = express.Router();

router.get('/', function(req, res, next)  { res.render('index', { title: 'Express' }); });

router.post('/insert',(req,res,next)=>
 {
   const user = new User({
     userName : req.body.username , 
     userMail : req.body.usermail
   });

   user.save((error,result)=>{
     if(error){console.log(error);
      res.redirect('/');
      return ;
    }
     else{    console.log(result); res.redirect('/'); }
     
  }); });

router.post('/getuser', function (req, res, next) {
  User.find({   }, (error, result) => 
  {
    if(error)
    {
      console.log(error);
      res.redirect('/');
    }
    console.log(result);
    res.render('index',{item:result});
    
  }

  )});



module.exports = router;
