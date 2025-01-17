import React, { useState } from 'react';
import { Sidebar } from '../components/ui/sidebar';

const Dashboard = () => {
    const handleLogin = () => {
        window.location.href = 'https://fragmetrics.itzarz.dev/api/auth';
    };

    return (
        <>
        <div className="grid-container">
            <Sidebar />
            <main className="dashboard-content">
                <header className="dashboard-header">
                    <h1>CS2 Stats App</h1>
                    <button onClick={handleLogin}>Log In</button>
                </header>

                <section className="dashboard-main">
                    <p>Welcome to your dashboard!</p>
                </section>
            </main>
        </div>
        </>
    );
};

export default Dashboard;
