const passport = require('passport');
const userModel=require('../models/userSchema')
const OAuth2Strategy = require('passport-google-oauth2').Strategy;

const ClientID=process.env.CLIENT_ID;
const ClientSecret = process.env.CLIENT_SECRET;
console.log("ClientID ",ClientID);
console.log("ClientSecret ",ClientSecret);

passport.use(new OAuth2Strategy({
    clientID: ClientID,
    clientSecret: ClientSecret,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
}, async (request,accessToken, refreshToken, profile, done) => {
    try {
        // Convert profile object to JSON-safe format
        const profileJson = JSON.parse(JSON.stringify(profile));
        console.log(profileJson);

        let user = await userModel.findOne({ googleID: profileJson.id });
        if (!user) {
            user = new userModel({
                googleID: profileJson.id,
                displayName: profileJson.displayName,
                email: profileJson.emails[0].value,
                image: profileJson.photos[0].value
            });
            await user.save();
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
        done(null, user);
});