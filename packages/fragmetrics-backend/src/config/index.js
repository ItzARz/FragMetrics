require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 4000,
    STEAM_API_KEY: process.env.STEAM_API_KEY,
    STEAM_APP_ID: process.env.STEAM_APP_ID,
    DOMAIN: process.env.DOMAIN,
    AUTH_SECRET_KEY: process.env.AUTH_SECRET_KEY,
    AUTH_ROUTE: process.env.AUTH_ROUTE
};
