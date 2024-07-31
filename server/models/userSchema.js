const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    googleID:{
        type:String
    },
    displayName:{
        type:String
    },
    email:{
        type:String
    },
    image:{
        type:String
    }

});

module.exports=mongoose.model("userModel",userSchema)