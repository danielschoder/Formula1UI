import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
    onLogin: (formData: { username: string; password: string }) => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose, onLogin }) => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLoginSubmit = () => {
        onLogin(loginForm);
        setLoginForm({ username: '', password: '' });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={loginForm.username}
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
