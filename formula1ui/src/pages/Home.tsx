import { Container, Typography, Button, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { baseUrl } from '../constants';

const Home = () => {
    const apiUrl = `${baseUrl}/scalar/v1`;

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Formula 1 APIs
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Welcome to the most accurate Formula 1 data!
            </Typography>

            <Stack spacing={2} alignItems="flex-start" sx={{ marginBottom: 2 }}>
                <Button
                    variant="text"
                    component={RouterLink}
                    to="/seasons"
                >
                    Seasons
                </Button>
                <Button
                    variant="text"
                    component={RouterLink}
                    to="/grandprix"
                >
                    Grand Prix
                </Button>
                <Button
                    variant="text"
                    component={RouterLink}
                    to="/drivers"
                >
                    Drivers
                </Button>
                <Button
                    variant="text"
                    component={RouterLink}
                    to="/constructors"
                >
                    Constructors
                </Button>
            </Stack>

            <Divider sx={{ marginBottom: 2 }} />

            <Typography sx={{ marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    href={apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    API documentation
                </Button>
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/dietmar-schoder/Formula1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub repository
                </Button>
            </Typography>

        </Container>
    );
};

export default Home;
