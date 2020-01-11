const express = require("express");
const Router = express.Router();
const restaurant=require("../models/restaurants")
//Get ALl
Router.get("/", (req, res) => {
    restaurant.find()
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
//findOne
  Router.get("/:_id", (req, res) => {
    const { _id } = req.params;
    restaurant.findOne({ _id })
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
//ajouter rest
  Router.post("/", (req, res) => {
    const { name, specialite,img, address } = req.body;
  
    const newRest = new restaurant({ name, specialite,img, address });
    newRest
      .save()
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
  //delete rest
  Router.delete("/:_id", (req, res) => {
    const { _id } = req.params;
    restaurant.findOneAndDelete({ _id })
      .then(data => res.send("success"))
      .catch(err => res.send("error"));
  });

  //modifier rest
  Router.put("/:_id", (req, res) => {
    const { _id } = req.params;
    const { name, address, menu,specialite,img } = req.body;
    
    restaurant.findOneAndUpdate({ _id }, { $set: { name, specialite,menu, address,img } })
      .then(data => res.json(data))
      .catch(err => res.send("error"));
  });
  
  module.exports = Router;