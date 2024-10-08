const { getPlayerStats } = require('../services/statsService');

exports.getStats = async (req, res) => {
    const steamPlayerId = req.params.id;
    if (!req.isAuthenticated()) {
        return res.status(401).send({ message: 'User not authenticated' });
    }
    try {
        const response = await getPlayerStats(steamPlayerId);
        if (response.status === 200) {
            res.send(response.data);
        } else {
            res.status(response.status).send({ message: 'Error fetching player stats', data: response.data });
        }
    } catch (error) {
        console.error('Error fetching player stats:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
};
