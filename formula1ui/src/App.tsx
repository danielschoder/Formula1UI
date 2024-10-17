import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Constructors from './pages/Constructors';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/constructors" element={<Constructors />} />
            </Routes>
        </Router>
    );
}

export default App;
