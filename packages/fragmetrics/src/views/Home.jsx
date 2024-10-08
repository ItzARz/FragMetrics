import React from 'react';

const Home = () => {
    const handleLogin = () => {
        window.location.href = 'https://fragmetrics.itzarz.dev/api/auth';
    };
    return (
        <>
        <div>
            <h1>Welcome to the CS2 Stats App</h1>
            <button onClick={handleLogin}>Login with Steam</button>
        </div>
        </>
    );
};

export default Home;
