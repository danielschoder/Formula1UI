import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, CssBaseline, ListItem, ListItemText, Box } from '@mui/material';
import Circuits from './pages/Circuits';
import Constructors from './pages/Constructors';
import Drivers from './pages/Drivers';
import GrandPrixPage from './pages/GrandPrixPage';
import Home from './pages/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Races from './pages/Races';
import Results from './pages/Results';
import Seasons from './pages/Seasons';
import Sessions from './pages/Sessions';
import SessionTypes from './pages/SessionTypes';

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: "Seasons", path: "/seasons" },
        { label: "Grand Prix", path: "/grandprix" },
        { label: "Drivers", path: "/drivers" },
        { label: "Constructors", path: "/constructors" },
        { label: "Circuits", path: "/circuits" },
        { label: "Races", path: "/races" },
        { label: "Sessions", path: "/sessions" },
        { label: "Results", path: "/results" },
        { label: "Session Types", path: "/sessiontypes" }
    ];

    return (
        <Router>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Formula 1 APIs
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            key={item.label}
                            component={NavLink}
                            to={item.path}
                            onClick={() => setDrawerOpen(false)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box mt={4}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/seasons" element={<Seasons />} />
                    <Route path="/grandprix" element={<GrandPrixPage />} />
                    <Route path="/drivers" element={<Drivers />} />
                    <Route path="/constructors" element={<Constructors />} />
                    <Route path="/circuits" element={<Circuits />} />
                    <Route path="/races" element={<Races />} />
                    <Route path="/sessions" element={<Sessions />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/sessiontypes" element={<SessionTypes />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default App;
