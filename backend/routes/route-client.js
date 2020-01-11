const express = require("express");
const Router = express.Router();
const Client=require("../models/clients")
//Get ALl
Router.get("/", (req, res) => {
    Client.find()
      .then(Client => res.json(Client))
      .catch(err => res.send("error"));
  });
//findOne
  Router.get("/:_id", (req, res) => {
    const { _id } = req.params;
    Client.findOne({ _id })
      .then(Client => res.json(Client))
      .catch(err => res.send("error"));
  });
//ajouter client
  Router.post("/", (req, res) => {
    const { name, phone, address ,password} = req.body;
  
    const newClient = new Client({ name, phone, address,password });
    newClient
      .save()
      .then(Client => res.json(Client))
      .catch(err => res.send("error"));
  });
  //delete Client
  Router.delete("/:_id", (req, res) => {
    const { _id } = req.params;
    Client.findOneAndDelete({ _id })
      .then(Client => res.send("success"))
      .catch(err => res.send("error"));
  });

  //modifier client
  Router.put("/:_id", (req, res) => {
    const { _id } = req.params;
    const { name, phone, address } = req.body;
    
    Client.findOneAndUpdate({ _id }, { $set: { name, phone, address } })
      .then(Client => res.json(Client))
      .catch(err => res.send("error"));
  });
  
  module.exports = Router;