import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Divider, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { ResultDto } from '../dtos/ResultDto';
import { useFetchData } from '../hooks/useFetchData';

function ResultDetails() {
    const { id } = useParams();
    const routeResults = `/api/results`;
    const routeResult = `${routeResults}/${id}`;
    const navigate = useNavigate();
    const [result, setResult] = useState<ResultDto | null>(null);
    const { data, loading, error } = useFetchData<ResultDto>(`${baseUrl}${routeResult}`);

    useEffect(() => {
        if (data) {
            setResult(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!result) return <Error error="Result not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/results')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {result.seasonYear}/{result.round} {result.grandPrixName} - {result.sessionTypeDescription}
                </Typography>
            </Box>

            <Typography variant="h6" gutterBottom>Position: {result.position}</Typography>
            <Typography variant="h6" gutterBottom>Ranking: {result.ranking}</Typography>
            <Typography variant="h6" gutterBottom>Points: {result.points}</Typography>
            <Typography variant="h6" gutterBottom>Driver: {result.driverName}</Typography>
            <Typography variant="h6" gutterBottom>Constructor: {result.constructorName}</Typography>
            <Typography variant="h6" gutterBottom>Circuit: {result.circuitName}</Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeResults}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeResults}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeResult}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeResult}
                </Button>
            </Typography>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <Typography mb={2}>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}/scalar/v1#tag/resultsendpoints/GET/api/results`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    API documentation
                </Button>
            </Typography>
        </Container>
    );
}

export default ResultDetails;
