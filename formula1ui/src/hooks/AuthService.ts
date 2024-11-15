import axios from 'axios';
import { LoginDto } from '../interfaces/LoginDto';

const baseUrl = 'https://schoderauth.azurewebsites.net';

export class AuthService {

    async logVisitor(): Promise<void> {
        (async () => {
            try {
                await axios.post(`${baseUrl}/api/visitors`, {});
            } catch (error) {
                console.error('Error posting visitor data', error);
            }
        })();
    }

    async login(email: string, password: string): Promise<boolean> {
        const loginDto = new LoginDto(email, password);

        try {
            const response = await fetch(`${baseUrl}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDto),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('jwt', data.jwt);
                return true;
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }

    isAuthenticated(): boolean {
        const jwt = localStorage.getItem('jwt');
        return !!jwt;
    }

    logout() {
        localStorage.removeItem('jwt');
    }
}
