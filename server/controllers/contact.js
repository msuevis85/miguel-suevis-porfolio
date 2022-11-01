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
            title: "my contact list",
             displayName: req.user ? req.user.displayName : "",
             contact: contact
          });
       }

   });
    
  },



  showUpdate:(req, res, next) => {

    let idFind = req.params.id;
    
    Contact.findOne({_id:idFind}, function (err, contact) {
     if (err){

         console.log(err);
     }
     else{
         res.render("contact/update", { 
          title: "my contact list",
           displayName: req.user ? req.user.displayName : "",
           contact: contact
        });
     }

 });
  
},



update:(req, res, next) => {

  console.log(req.body);
  
  const id = req.body.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let organizationName = req.body.organizationName;
  let phoneNumber = req.body.phoneNumber;
  let birthday = req.body.birthday;

 
 const contact =({
   firstName : firstName,
   lastName :  lastName,
   organizationName : organizationName,
   phoneNumber :phoneNumber,
   birthday :birthday
  }); 

  Contact.updateOne({_id:id},contact,function(error, data) {
   if(error) {
       console.log(error);
   }
   else {
       res.redirect("/contact/list");
   }
});
   
},



  
  }