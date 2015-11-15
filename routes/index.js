var express = require('express');
var routes = express.Router();

exports.index = function(req, res){
  res.render('index');
};

exports.demo = function(req,res){
  res.render('demo');
}

exports.about = function(req,res){
  res.render('about');
}
