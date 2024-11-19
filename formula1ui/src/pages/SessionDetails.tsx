import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { SessionDto } from '../interfaces/SessionDto';

function SessionDetails() {
    const { sessionId } = useParams();
    const routeSessions = `/api/sessions`;
    const routeSession = `${routeSessions}/${sessionId}`;
    const routeSessionResults = `${routeSession}/results`;
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
    if (!session) return <Error error="Session not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/sessions')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {session.seasonYear}/{session.round} {session.grandPrixName}
                </Typography>
            </Box>

            <Typography variant="h6" gutterBottom>
                Type: {session.sessionTypeDescription}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Circuit: {session.circuitName}
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSessions}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSessions}
                </Button>
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
