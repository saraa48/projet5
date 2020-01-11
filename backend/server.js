const express = require ('express')
const mongodb = require('./config/database')
// const app= express()
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");


const app = express();
//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//bd connexion
mongodb()
// route
app.use('/ProjectRest/users',require("./routes/api/users"))
app.use('/ProjectRest/menu',require('./routes/route-menu'))
app.use('/ProjectRest/reservation',require('./routes/route-reservation'))
app.use('/ProjectRest/restaurant',require('./routes/route-restaurant'))





//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./Config/keys").mongoURI;
//passport middleware
app.use(passport.initialize());

//passport config
require("./Config/passport")(passport);

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/users", users);
//run  server
app.listen(6000,(err)=>{
    console.log(err?"server error":"server is running on port 6000")
})