const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB_URI;
console.log(URL);

const dbConnect = () => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection is successful!!");
    })
    .catch((err) => {
        console.error("Error in DB connection", err);
        process.exit(1); // Exit process with failure
    });
};

module.exports = dbConnect;
