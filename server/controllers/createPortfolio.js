const adminModel=require('../models/adminProfile');

exports.createPortfolio=async(req,res)=>{
    try{
        const{user,name,role,bio,resume,linkedin,github,projects}=req.body;
        const portfolioData=await adminModel.create({
            user,name,role,bio,resume,linkedin,github,projects
        })
        return res.status(200).json({
            success:true,
            message:"Portfolio created!!",
            portfolioData:portfolioData
        })
    }
    catch(err){
        console.log("Some error occured!!")
        return res.status(400).json({
            success:false,
            message:"Error in creating portfolio"
        })
    }
}