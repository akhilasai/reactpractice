const express=require('express')
const router=new express.Router()
const user=require('../schema/userSchema')



router.post('/register',(req,res)=>{
    const body=req.body;
    console.log(body)
    user
        .insertMany(req.body)
        .then((data)=>res.status(200).send(data))
        .catch((error)=>res.status(404).send(error))
})

router.post('/login',(req, res)=>{
    const body=req.body
    user.
        findOne(body)
        .then((data)=>res.status(200).send(data))
        .catch((error)=>res.status(404).send(error))
})

router.put('/lesson/:name',(req, res)=>{
    const body=req.body
    const name=req.params.name
    console.log(body)
    console.log(name)
    // const query={name}
    // const values={$set:body}
    user.
        updateOne({name:name},{$set:{lessons:body.lessons}},function(err,result){
            if(err){res.status(404).send(err)}
            else{res.status(200).send(result)}
        })
})

router.get('/users',(req, res)=>{
user.find({},function(err,result){
    if(err){res.status(404).send(err)}
    else{res.status(200).send(result)}
})
})

module.exports=router