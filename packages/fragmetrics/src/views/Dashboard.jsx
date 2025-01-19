import React, { useState } from 'react';
import { Sidebar } from '../components/ui/sidebar';
import BarChart from '../components/ui/barChart';
import TinyLineChart from '../components/ui/lineChart';

//import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Dashboard = () => {
    const handleLogin = () => {
        window.location.href = 'https://fragmetrics.itzarz.dev/api/auth';
    };

    return (
        <>
            <div className="grid-container">
                <Sidebar />
                <main className="dashboard-container">
                    <header className="dashboard-header">
                        <img className="user-photo" src="./assets/profile-picture.jpg" alt="User Photo" />

                        <div className="user-details">
                            <h3 className="user-nickname">Soteldihno</h3>
                            <p className="user-elo">Elo: 2766</p>
                        </div>

                        <div className="user-stats">
                            <div className="stat">
                                <p className="stat-value">46.7%</p>
                                <p className="stat-label">Winrate</p>
                            </div>
                            <div className="stat">
                                <p className="stat-value">1547</p>
                                <p className="stat-label">MVPs</p>
                            </div>
                            <div className="stat">
                                <p className="stat-value">0.78</p>
                                <p className="stat-label">K/D</p>
                            </div>
                            <div className="stat">
                                <p className="stat-value">470h</p>
                                <p className="stat-label">Total Time</p>
                            </div>
                        </div>
                    </header>

                    <section className="dashboard-content">
                        <div className="dashboard-graphs-container">
                            <div className="card">
                                <h3 className="card-title">Winrate Progress</h3>
                                <p className="card-value">77.42%</p>
                                <span className="card-subtitle">+10.1% from last week</span>
                                <div className="card-chart">
                                    <BarChart />
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="card-title">Elo Progress</h3>
                                <p className="card-value">2766</p>
                                <span className="card-subtitle">+315 from last week</span>
                                <div className="card-chart">
                                    <TinyLineChart />
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="card-title">Aim Progress</h3>
                                <p className="card-value">62.18%</p>
                                <span className="card-subtitle">+4.3% from last week</span>
                                <div className="card-chart">
                                    <BarChart />
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="card-title">Damage Progress</h3>
                                <p className="card-value">208</p>
                                <span className="card-subtitle">+50 from last week</span>
                                <div className="card-chart">
                                    <TinyLineChart />
                                </div>
                            </div>
                            <div className="card full-width-container">FULL WIDTH CONTAINER</div>
                        </div>
                        <div className="cards-container">
                            <div className="card">
                                <div className="card-title">K/D</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">2.04 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">1.78</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title">Headshots %</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">34.15 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">28.05</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title">MVPs</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">803 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">797</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title">Played Time</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">427h ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">398h </div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container">
                            <div className="card">
                                <div className="card-title">Wins Pistol Round</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">608 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">605</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title">Planted Bombs</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">559 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">544</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title">Defused Bombs</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">93 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">85</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title">Enemy Weapon Kills</div>
                                <div className="card-content-sidebyside">
                                    <div className="current-stat">
                                        <div className="card-value">677 ▲</div>
                                        <div className="card-subtitle">Current</div>
                                    </div>
                                    <div className="previous-stat">
                                        <div className="card-value">668</div>
                                        <div className="card-subtitle">Previous</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
