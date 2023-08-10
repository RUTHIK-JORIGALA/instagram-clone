const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { mongoUrl } = require('./keys.js');
const cors = require('cors');


app.use(cors());

require('./models/model.js')
require('./models/Post.js')
app.use(express.json());
app.use(require('./routes/auth.js'))
app.use(require('./routes/createPost.js'))

mongoose.connect(mongoUrl);

mongoose.connection.on("connected",()=>{
    console.log("mongoose connected successfully");
})
mongoose.connection.on("error",()=>{
    console.log("error connecting mongoose");
})

app.get('/',(req,res)=>{
    res.json("Hello Guru");
})

app.listen(PORT,()=>{
    console.log("running successfully on",PORT)
});

