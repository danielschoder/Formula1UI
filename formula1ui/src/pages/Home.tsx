import { Container, Typography, Button, Divider, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { baseUrl } from '../constants';

const Home = () => {
    const apiUrl = `${baseUrl}/scalar/v1`;

    const menuItems = [
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

    const renderMenuButton = (label: string, path: string) => (
        <Button key={path} variant="text" component={RouterLink} to={path}>
            {label}
        </Button>
    );

    return (
        <Container>
            <Typography variant="h2" gutterBottom mt={2}>
                Formula 1 APIs
            </Typography>
            <Typography variant="body1" mb={2}>
                Welcome to the most accurate Formula 1 data!
            </Typography>

            <Stack spacing={2} alignItems="flex-start" mb={2}>
                {menuItems.map((item) => renderMenuButton(item.label, item.path))}
            </Stack>

            <Divider sx={{ marginBottom: 2 }} />

            <Typography mb={2}>
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
            <Typography mb={2}>
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
