const cloudinary=require('cloudinary').v2;
require('dotenv').config();

const cloudinaryConnect=()=>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
    console.log("Cloud connection done!!")
    }catch(err){
        console.log("Error connectiong with cloudinary ",err)
    }
}

module.exports=cloudinaryConnect;