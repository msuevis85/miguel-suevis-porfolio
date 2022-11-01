const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//create the user model instance
let userModel = require("../models/user");
let User = userModel.User;

  module.exports = {

    // declare function to validate if the user is authenticated
    ensureAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next()
      }
      res.redirect('/users/login'); // if not auth
    },


     // check if the user is already logged in
    displayLoginPage: (req, res, next) => {
        if (!req.user) {
          req.flash("displayName",req.user ? req.user.displayName : "");
          res.render("auth/login", {
            title: "Logout",
            messages: req.flash("loginMessage"),
            displayName: req.user ? req.user.displayName : "",
          });
        } else {
          return res.redirect("/");
        }
      },


    // check if the user is register and validate user and password
    processLoginPage: (req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        // server err?
        if (err) {
          return next(err);
        }
        // is there a user login error?
        if (!user) {
          req.flash("loginMessage", "Authentication Error");
          return res.redirect("/users/login");
        }
        req.login(user, (err) => {
          if (err) {
            return next(err);
          }
          return res.redirect("/contacts/list");
        });
      })(req, res, next);
    },

    logout: (req, res, next) => {
      req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    }
  
}
