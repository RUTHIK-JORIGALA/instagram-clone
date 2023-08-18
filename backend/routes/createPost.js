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

router.get('/myposts',requireLogin ,(req,res)=>{
    POST.find({postedBy: req.user._id})
     .populate("postedBy","_id name")
     .then(myposts =>{
        res.json(myposts)
     })
})

// like post
// postId is used to connect to frontend feed.js
router.put('/like',requireLogin,(req,res)=>{
    POST.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).then(result => {
        return res.json(result);
    })
    .catch(err => {
        return res.status(422).json({ error: err });
    });
})

// Unlike post


router.put('/unlike',requireLogin,(req,res)=>{
    POST.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).then(result => {
        return res.json(result);
    })
    .catch(err => {
        return res.status(422).json({ error: err });
    });
})


module.exports = router;