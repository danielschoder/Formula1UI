import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Circuits from './pages/Circuits';
import Constructors from './pages/Constructors';
import Drivers from './pages/Drivers';
import GrandPrixPage from './pages/GrandPrixPage';
import Home from './pages/Home';
import Races from './pages/Races';
import RegisterDialog from './pages/RegisterDialog';
import Results from './pages/Results';
import Seasons from './pages/Seasons';
import Sessions from './pages/Sessions';
import SessionTypes from './pages/SessionTypes';
import LoginDialog from './pages/LoginDialog';

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);

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


    const handleLoginOpen = () => {
        setOpenLoginDialog(true);
    };

    const handleLoginClose = () => {
        setOpenLoginDialog(false);
    };

    const handleLoginSubmit = (formData: { username: string; password: string }) => {
        // Handle login logic here (e.g., make an API call to authenticate)
        console.log('Logging in with:', formData);
        setIsAuthenticated(true);
        setOpenLoginDialog(false);
    };

    const handleLogout = () => {
        setIsAuthenticated(false); // Replace with logout logic
    };

    const handleRegisterOpen = () => {
        setOpenRegisterDialog(true);
    };

    const handleRegisterClose = () => {
        setOpenRegisterDialog(false);
    };

    const handleRegisterSubmit = (formData: { username: string; email: string; password: string }) => {
        // Handle register logic here (e.g., make an API call)
        console.log('Registering user with:', formData);
        setIsAuthenticated(true); // Automatically log the user in after registration
        setOpenRegisterDialog(false); // Close the dialog
    };

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
                    <Box sx={{ ml: 'auto' }}>
                        {isAuthenticated ? (
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button color="inherit" onClick={handleLoginOpen}>
                                    Login
                                </Button>
                                    <Button color="inherit" onClick={handleRegisterOpen}>
                                    Register
                                </Button>
                            </>
                            )}
                    </Box>
                </Toolbar>
                <LoginDialog
                    open={openLoginDialog}
                    onClose={handleLoginClose}
                    onLogin={handleLoginSubmit}
                />
                <RegisterDialog
                    open={openRegisterDialog}
                    onClose={handleRegisterClose}
                    onRegister={handleRegisterSubmit}
                />
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
