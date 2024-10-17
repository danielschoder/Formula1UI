import { Container, Typography, Card, CardContent, Link } from '@mui/material';
import './App.css';

function App() {
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
                        <Link href="https://f1.schoder.uk" target="_blank" rel="noopener">Open APIs</Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="https://github.com/dietmar-schoder/Formula1" target="_blank" rel="noopener">GitHub repository</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default App;
