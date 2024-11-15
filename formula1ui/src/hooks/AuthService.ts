import { LoginDto } from '../interfaces/LoginDto';

export class AuthService {
    async login(email: string, password: string): Promise<boolean> {
        const loginDto = new LoginDto(email, password);

        try {
            const response = await fetch('https://schoderauth.azurewebsites.net/api/login', {
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
