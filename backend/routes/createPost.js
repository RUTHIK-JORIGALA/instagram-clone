const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const POST = mongoose.model("POST");

// routes

router.get('/allposts',requireLogin,(req,res)=>{
    POST.find()
    .populate("postedBy","_id name")
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

router.post("/createPost",requireLogin, (req,res)=>{
    const { body , pic} = req.body;
    if(!pic || !body){
       return res.json({error:"Please add image and caption"})
    }
    const post = new POST({
        body,
        photo:pic,
        postedBy:req.user
    })

    post.save().then((result)=>{
        return res.json({post : result})
    }).catch(err => console.log(err))
})


module.exports = router;