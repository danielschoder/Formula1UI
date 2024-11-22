import { useEffect, useMemo, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBarComponent from './components/AppBarComponent';
import DrawerComponent from './components/DrawerComponent';
import { AuthService } from './hooks/AuthService';
import CircuitDetails from './pages/CircuitDetails';
import Circuits from './pages/Circuits';
import ConstructorDetails from './pages/ConstructorDetails';
import Constructors from './pages/Constructors';
import DriverDetails from './pages/DriverDetails';
import Drivers from './pages/Drivers';
import GrandPrixDetails from './pages/GrandPrixDetails';
import GrandPrix from './pages/GrandPrix';
import Home from './pages/Home';
import RaceDetails from './pages/RaceDetails';
import Races from './pages/Races';
import ResultDetails from './pages/ResultDetails';
import Results from './pages/Results';
import SeasonDetails from './pages/SeasonDetails';
import Seasons from './pages/Seasons';
import SessionDetails from './pages/SessionDetails';
import Sessions from './pages/Sessions';
import SessionTypes from './pages/SessionTypes';

const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoginDialogOpen, setOpenLoginDialog] = useState(false);
    const [isRegisterDialogOpen, setOpenRegisterDialog] = useState(false);
    const authService = useMemo(() => new AuthService(), []);

    const handleLoginOpen = () => setOpenLoginDialog(true);
    const handleLoginSubmit = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);
    const handleRegisterOpen = () => setOpenRegisterDialog(true);
    const handleRegisterSubmit = () => setIsAuthenticated(true);

    useEffect(() => {
        authService.logVisitor();
    }, [authService]); 

    return (
        <Router>
            <AppBarComponent
                authService={authService}
                isAuthenticated={isAuthenticated}
                setDrawerOpen={setDrawerOpen}
                isLoginDialogOpen={isLoginDialogOpen}
                setOpenLoginDialog={setOpenLoginDialog}
                handleLoginOpen={handleLoginOpen}
                handleLoginSubmit={handleLoginSubmit}
                isRegisterDialogOpen={isRegisterDialogOpen}
                setOpenRegisterDialog={setOpenRegisterDialog}
                handleRegisterOpen={handleRegisterOpen}
                handleRegisterSubmit={handleRegisterSubmit}
                handleLogout={handleLogout}
            />
            <DrawerComponent
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/circuits" element={<Circuits />} />
                <Route path="/circuits/:id" element={<CircuitDetails />} />
                <Route path="/constructors" element={<Constructors />} />
                <Route path="/constructors/:id" element={<ConstructorDetails />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/drivers/:id" element={<DriverDetails />} />
                <Route path="/grandprix" element={<GrandPrix />} />
                <Route path="/grandprix/:id" element={<GrandPrixDetails />} />
                <Route path="/races" element={<Races />} />
                <Route path="/races/:id" element={<RaceDetails />} />
                <Route path="/results" element={<Results />} />
                <Route path="/results/:id" element={<ResultDetails />} />
                <Route path="/seasons" element={<Seasons />} />
                <Route path="/seasons/:year" element={<SeasonDetails />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/sessions/:id" element={<SessionDetails />} />
                <Route path="/sessiontypes" element={<SessionTypes />} />
            </Routes>
        </Router>
    );
};

export default App;
