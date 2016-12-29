"use strict";
let express = require('express');
let User = require('../models/Users.model');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {user:"Daryl", title:"signup"});
});

//
// router.get(':name/jsonp',function (req,res,next) {
//     User.find({},function(err,doc) {
//         if(doc.length===0){
//             return res.send({});
//         }
//         if(err){
//             return res.send("<h1>There was a problem getting your request</h1>");
//         }
//         let document = doc[0];
//         res.json({
//             firstname: document.firstname,
//             lastname: document.lastname,
//             street: document.street,
//             streetnumber: document.streetnumber,
//             city: document.city,
//             state: document.state,
//             zip: document.zip
//         });
//     });
// });
//


router.get('/:name',function (req,res,next) {
    User.find({"firstname":req.params.name},function(err,doc) {
        if(doc.length===0){
            return res.render("norecords",{"firstname":req.params.name});
        }
        if(err){
            return res.send("<h1>There was a problem getting your request</h1>");
        }
        let document = doc[0];
        res.render('formattedresponse.jade', {
            firstname: document.firstname,
            lastname: document.lastname,
            street: document.street,
            streetnumber: document.streetnumber,
            city: document.city,
            state: document.state,
            zip: document.zip
        });
    });
});

router.post('/', function (req, res, next) {
    let newUser = new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        street:req.body.street,
        streetnumber:req.body.streetnumber,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip
    });
    res.render('postresponse',{firstname: req.body.firstname});
    newUser.save(function (err,res) {
        if(err){
            console.log(err);
        }else{
            console.log("data stored successfully")
        }
    });
});

module.exports = router;
