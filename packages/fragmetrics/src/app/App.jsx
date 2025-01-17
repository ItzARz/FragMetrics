import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Profile from '../views/Profile';
import Stats from '../views/Stats';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/stats/:id" element={<Stats />} />
            </Routes>
        </Router>
    );
};

export default App;
