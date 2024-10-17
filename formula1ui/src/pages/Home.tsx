import { Container, Typography, Card, CardContent, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h1" align="center" gutterBottom>
                Formula 1 APIs
            </Typography>
            <Card className="card">
                <CardContent>
                    <Typography variant="body1" gutterBottom>
                        Welcome!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Here you can find open RESTful APIs for Formula 1 data.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="https://formula1openapi.azurewebsites.net/scalar/v1" target="_blank" rel="noopener">
                            Open APIs
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="https://github.com/dietmar-schoder/Formula1" target="_blank" rel="noopener">
                            GitHub repository
                        </Link>
                    </Typography>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/constructors"
                        style={{ marginTop: '16px' }}
                    >
                        View Constructors
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Home;
