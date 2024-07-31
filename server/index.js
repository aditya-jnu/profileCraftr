const express = require('express');
require("dotenv").config();
const cors = require('cors');
const dbConnect = require('./config/database');
const session = require('express-session');
const passport = require('passport');
require('./config/auth')

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors(
    {
        origin: ['http://localhost:3000','http://localhost'], 
        credentials: true
    }
));

app.use(session({
    secret: 'a2d41234a2d4',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

const appRoute=require('./routes/approute')
app.use("/api/v1",appRoute);



app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: 'http://localhost:3000'
}));

const fileUpload=require('express-fileupload');
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

const cloudinaryConnect=require('./config/cloudinary.js')
cloudinaryConnect();

app.get("/admin", async(req, res) => {
    console.log("Hemlo",req)
    if (req.user) {
        console.log("HIIIIII",req.user)
        res.status(200).json({ message: "User logged in!!", user: req.user });
    } else {
        res.status(400).json({ message: "Some error" });
    }
});



dbConnect();
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
