import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { AuthService } from '../hooks/AuthService';

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
    onLogin: () => void;
    authService: AuthService;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose, onLogin, authService }) => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLoginSubmit = async () => {
        const success = await authService.login(loginForm.email, loginForm.password);
        if (success) {
            onLogin();  // Notify parent that login was successful
            setLoginForm({ email: '', password: '' });
            onClose();
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="email"
                    label="email"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={loginForm.email}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={loginForm.password}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLoginSubmit} color="primary">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
