var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    // console.log("hello I'm on the start page");
 res.render("home/");
 });
 
 router.get("/home", function(req,res){
     res.render("home/home");
 });

 router.get("/about", function(req, res){
    res.render("home/about");
 });

 router.get("/login", function(req, res){
    res.render("home/login");
 });

 router.get("/signup", function(req, res){
    res.render("home/signup");
 });

 router.get("/testsite", function(req, res){
    res.render("home/testsite");
 });


 module.exports = router;