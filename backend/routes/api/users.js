

const express = require("express");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const bcrypt = require("bcryptjs");
// const config = require("config");
const keys = require("../../Config/keys");
const passport = require("passport");

const User = require("../../Models/User");

const validateLoginInput = require("../../validation/login");

//@route  GET api/users/test
//@desc   Tests users route
//@access Public

// router.get("/test", (req, res) => res.json(req.body));
Router.get("/test", (req, res) => {
  const errors = {};

  return User.find()
    .then(users => {
      if (!users) {
        errors.noProfile = "There are no users yet";
        return res.status(404).json(errors);
      }
      res.json(users);
    })
    .catch(err => {
      res.status(404).json({ user: "There are no users yet" });
    });
});
Router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  User.findOneAndDelete({ _id })
    .then(data => res.send("success"))
    .catch(err => res.send("error"));
});

// Sign Up
Router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(newUser))
        .catch(err => res.send("error"));
    });
  });
});

// Sign In
// Router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   User.findOne({ email }).then(user => {
//     if (!user) return res.send("email does not exist");
//     else {
//       bcrypt.compare(password, user.password).then(isMatched => {
//         if (isMatched) {
//           const payload = { id: user.id, email: user.email, name: user.name };
//           jwt.sign(
//             payload,
//             config.get("tokenpassword"),
//             { expiresIn: 3600 },
//             (err, token) => {
//               res.json({ token: "Bearer " + token });
//             }
//           );
//         }
//       });
//     }
//   });
// });

Router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check validation
  // if (!isValid) {
  //   return res.status(400).json("email or password is not valid");
  // }
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  //Find user by email
  User.findOne({ email }).then(user => {
    //check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    //Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User matched

        const payload = { id: user.id, name: user.name, email: user.email }; //Create JWT payload

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrkey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json("password invalid");
      }
    });
  });
});

// verification
Router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = Router;
