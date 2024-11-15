import { LoginDto } from '../interfaces/LoginDto';

export class AuthService {
    // Method for logging in
    async login(email: string, password: string): Promise<boolean> {
        const loginDto = new LoginDto(email, password);

        try {
            const response = await fetch('https://localhost:7208/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDto),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);

                // Store JWT token in localStorage
                localStorage.setItem('jwt', data.jwt);

                return true;  // Successful login
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            return false;  // Failed login
        }
    }

    // Method to check if the user is authenticated (by checking the JWT in localStorage)
    isAuthenticated(): boolean {
        const jwt = localStorage.getItem('jwt');
        return !!jwt;  // Returns true if a JWT exists in localStorage
    }

    // Method to logout (clear the JWT from localStorage)
    logout() {
        localStorage.removeItem('jwt');
    }
}
