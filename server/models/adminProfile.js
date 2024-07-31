const mongoose=require('mongoose');

const adminProfile=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    name:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    bio:{
        type:String,
        require:true
    },
    resume:{
        type:String,
        require:true
    },
    linkedin:{
        type:String,
        require:true
    },
    github:{
        type:String,
        require:true
    },
    projects:[{
        
    }]
})

module.exports=mongoose.model("adminModel",adminProfile)