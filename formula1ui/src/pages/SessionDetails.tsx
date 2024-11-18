import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { SessionDto } from '../interfaces/SessionDto';

function SessionDetails() {
    const { sessionId } = useParams();
    const route = "/api/sessions";
    const routeSession = `${route}/${sessionId}`;
    const routeSessionResults = `${route}/${sessionId}/results`;
    const navigate = useNavigate();
    const [session, setSession] = useState<SessionDto | null>(null);
    const { data, loading, error } = useFetchData<SessionDto>(`${baseUrl}${routeSession}`);

    useEffect(() => {
        if (data) {
            setSession(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!session) return <Error error="Driver not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/drivers')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {session.seasonYear}/{session.round} {session.sessionTypeDescription}
                </Typography>
            </Box>

            <Typography variant="body1" gutterBottom>
                {session.grandPrixName}
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSession}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSession}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSessionResults}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSessionResults}
                </Button>
            </Typography>
        </Container>
    );
}

export default SessionDetails;
