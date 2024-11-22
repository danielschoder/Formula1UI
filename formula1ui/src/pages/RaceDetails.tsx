import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Divider, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { RaceDto } from '../dtos/RaceDto';

function RaceDetails() {
    const { id } = useParams();
    const routeRaces = `/api/races`;
    const routeRace = `${routeRaces}/${id}`;
    //const routeRaceResults = `${routeRace}/results`;
    const navigate = useNavigate();
    const [race, setRace] = useState<RaceDto | null>(null);
    const { data, loading, error } = useFetchData<RaceDto>(`${baseUrl}${routeRace}`);

    useEffect(() => {
        if (data) {
            setRace(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!race) return <Error error="Race not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/races')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {race.seasonYear}/{race.round} {race.grandPrixName}
                </Typography>
            </Box>

            <Typography variant="h6" gutterBottom>Circuit: {race.circuitName}</Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeRaces}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeRaces}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeRace}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeRace}
                </Button>
            </Typography>

        {/*    <Typography gutterBottom>*/}
        {/*        <Button*/}
        {/*            variant="outlined"*/}
        {/*            color="primary"*/}
        {/*            href={`${baseUrl}${routeRaceResults}`}*/}
        {/*            target="_blank"*/}
        {/*            rel="noopener noreferrer"*/}
        {/*            style={{ textTransform: 'lowercase' }}*/}
        {/*        >*/}
        {/*            {routeRaceResults}*/}
        {/*        </Button>*/}
        {/*    </Typography>*/}

            <Divider sx={{ mt: 2, mb: 2 }} />

            <Typography mb={2}>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}/scalar/v1#tag/racesendpoints/GET/api/races`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    API documentation
                </Button>
            </Typography>
        </Container>
    );
}

export default RaceDetails;
