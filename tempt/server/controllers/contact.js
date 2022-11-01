const express = require("express");
let router = express.Router();

let Contact = require("../models/contact");

  module.exports = {

     /* List contact form data bases*/
    listContact: async (req, res, next) => {

      try{
      const list = await Contact.find({});
      res.render("contact/list", { title: "my contact list", contacList: list, displayName: req.user ? req.user.displayName : "",});

      } catch(error) {
        console.log(error);
        res.redirect('/')
    }
     
    },


    getById:(req, res, next) => {

      let idFind = req.params.id;
      
      Contact.findOne({_id:idFind}, function (err, contact) {
       if (err){

           console.log(err);
       }
       else{
           res.render("contact/detail", { 
             displayName: req.user ? req.user.displayName : "",
             contact: contact
          });
       }

   });
    
  },


  
  }