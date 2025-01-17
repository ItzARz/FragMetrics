import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Stats from '../views/Stats';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/stats/:id" element={<Stats />} />
            </Routes>
        </Router>
    );
};

export default App;
