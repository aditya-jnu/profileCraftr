const express=require('express')
const router=express.Router();

const {createPortfolio}=require('../controllers/createPortfolio');

router.post("/portfolio/create",createPortfolio);
router.get("/portfolio/create",(req,res)=>{res.send('<p>Portfolio creation route</p>')})

module.exports=router;