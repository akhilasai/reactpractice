const mongoose=require('mongoose');

const PersonSchema=new mongoose.Schema({
    userType:{type:String},
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    lessons:{type:Array}
})

const Person=mongoose.model("Person",PersonSchema)

module.exports=Person;