import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch('/api/auth/profile');
            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                window.location.href = '/api/auth';
            }
        };

        fetchProfile();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>Profile</h2>
            <img src={user.steamId64.avatar} alt={user.name} />
            <h3>Name: {user.steamId64.displayName}</h3>
            <h3>Steam ID: {user.steamId64.id}</h3>
            <a href={`/stats/${user.steamId64.id}`}>View Stats</a>
        </div>
    );
};

export default Profile;
