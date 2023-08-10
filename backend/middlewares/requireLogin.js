const jwt = require('jsonwebtoken');
const {Jwt_secret} = require('../keys');
const mongoose = require('mongoose');
const USER = mongoose.model("USER");


module.exports =(req,res , next)=> {
    const {authorization} = req.headers;
    if(!authorization){
        res.json({error:"You must have logged in 1"})
    }
    // res.json("ok")
    // next();
    const token = authorization.replace("bearer ","")
    jwt.verify(token,Jwt_secret,(err , payload)=>{
        if(err){
            res.json({error:"You must have logged in 2"})
        }
        const { _id} =  payload
        USER.findById(_id).then((userData)=>{
            req.user = userData
            console.log(userData)
            next()
        })
    })
}