import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Stats from '../views/Stats';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/stats/:id" element={<Stats />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
