const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const config = require('./index');

passport.use(new SteamStrategy({
    returnURL: "https://fragmetrics.itzarz.dev/api/auth/return",
    realm: config.DOMAIN,
    fetchUserProfile: true,
    apiKey: config.STEAM_API_KEY
}, (identifier, profile, done) => {
    const user = {
        id: profile.id,
        displayName: profile.displayName,
        avatar: profile.photos[2].value
    };
    return done(null, user);
}));

passport.serializeUser((user, done) => {
    done(null, {
        id: user.id,
        displayName: user.displayName,
        avatar: user.avatar
    });
});

passport.deserializeUser((accountId, done) => {
    done(null, {
      id: accountId,
    });
});

module.exports = passport;
