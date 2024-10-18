import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, CssBaseline, ListItem, ListItemText, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import Seasons from './pages/Seasons';
import GrandPrix from './pages/GrandPrix';
import Drivers from './pages/Drivers';
import Constructors from './pages/Constructors';

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'Seasons', path: '/seasons' },
        { text: 'Grand Prix', path: '/grandprix' },
        { text: 'Drivers', path: '/drivers' },
        { text: 'Constructors', path: '/constructors' }
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
                            key={item.text}
                            component={NavLink}
                            to={item.path}
                            onClick={() => setDrawerOpen(false)}
                        >
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box mt={4}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/seasons" element={<Seasons />} />
                    <Route path="/grandprix" element={<GrandPrix />} />
                    <Route path="/drivers" element={<Drivers />} />
                    <Route path="/constructors" element={<Constructors />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default App;
