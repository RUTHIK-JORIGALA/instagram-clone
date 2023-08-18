const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const USER = mongoose.model("USER");
const jwt = require("jsonwebtoken");
const {Jwt_secret} = require('../keys.js')
const bcrypt = require("bcrypt");
const requireLogin = require('../middlewares/requireLogin.js');

// bcrypt.genSalt(10, function (err, salt) {
//     console.log(salt); // the random salt string
//   });
router.get('/',(req,res)=>{
    // res.json({name : "Ruthik"});
})



router.post('/signup',(req,res)=>{
    const {name, userName, email, password} = req.body;
    if(!name || !userName || !email || !password){
       return res.status(422).json({error : "please add all the fields"})
    }
    USER.findOne({$or:[{email:email}, {userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist with that email or username"})
        }
        bcrypt.hash(password,10).then((hashedPassword)=>{
            const user = new USER({
                name,
                userName,
                email,
                // password
                password:hashedPassword
            })
            user.save()
                .then(user =>{return res.json({message:"saved successfully"})})
                .catch(err =>{console.log(err)});
        })
    })
})


router.post('/login',(req,res)=>{
    const {email, password } = req.body;

    if(!email || !password){
       return res.status(422).json({error:"Please enter valid email and password"})
    }

    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email"})
        }
        // password : given by the user
        // savedUser.password : passwerd from the database
        
        const myPlaintextPassword = password;
        const hash = bcrypt.hashSync(myPlaintextPassword, 5);
        // console.log(hash);
        // console.log(savedUser.password);
        bcrypt.compare(password, savedUser.password).then((match) => {
            if (match) {
                // return res.status(200).json({ message: "Signed in Successfully" })
                const token = jwt.sign({ _id: savedUser.id }, Jwt_secret)
                const { _id, name, email, userName } = savedUser
                
                res.json({ token, user: { _id, name, email, userName } });
                // console.log(token);
                console.log({ token, user: { _id, name, email, userName } })
            } else {
                return res.status(422).json({ error: "Invalid password" })
            }
        })
            .catch(err => console.log(err));
        
    })
})


module.exports = router;