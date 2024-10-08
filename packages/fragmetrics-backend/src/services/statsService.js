const axios = require('axios');
const config = require('../config');

async function getPlayerStats(steamPlayerId) {
    if (steamPlayerId) {
        try {
            const response = await axios.get(
                `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${config.STEAM_API_KEY}&steamid=${steamPlayerId}&appid=${config.STEAM_APP_ID}&format=json`
            );
            return response;
        } catch (error) {
            console.error("Error fetching player stats:", error);
            throw error;
        }
    } else {
        throw new Error('You need to provide a valid steam player ID.');
    }
}

module.exports = {
    getPlayerStats,
};
