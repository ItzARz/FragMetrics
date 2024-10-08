import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Stats = () => {
    const { id } = useParams();
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            const response = await fetch(`/api/stats/${id}`);
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            } else {
                console.error('Error fetching stats');
            }
        };

        fetchStats();
    }, [id]);

    if (!stats) return <div>Loading...</div>;

    return (
        <div>
            <h2>Player Stats</h2>
            <pre>{JSON.stringify(stats, null, 2)}</pre> {/* Formato para mostrar las estadísticas */}
        </div>
    );
};

export default Stats;
