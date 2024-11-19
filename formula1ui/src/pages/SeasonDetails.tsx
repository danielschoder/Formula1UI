import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Divider, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { SeasonDto } from '../interfaces/SeasonDto';

function SeasonDetails() {
    const { seasonYear } = useParams();
    const routeSeasons = `/api/seasons`;
    const routeSeason = `${routeSeasons}/${seasonYear}`;
    const routeSeasonRaces = `${routeSeason}/races`;
    const routeSeasonDrivers = `${routeSeason}/drivers`;
    const routeSeasonConstructors = `${routeSeason}/constructors`;
    const routeSeasonConstructorResults = `${routeSeason}/constructors/{constructorId}/results`;
    const routeSeasonDriverResults = `${routeSeason}/drivers/{driverId}/results`;
    const navigate = useNavigate();
    const [season, setSeason] = useState<SeasonDto | null>(null);
    const { data, loading, error } = useFetchData<SeasonDto>(`${baseUrl}${routeSeason}`);

    useEffect(() => {
        if (data) {
            setSeason(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!season) return <Error error="Season not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/seasons')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {season.year}
                </Typography>
            </Box>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeasons}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeasons}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeason}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeason}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeasonRaces}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeasonRaces}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeasonDrivers}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeasonDrivers}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeasonConstructors}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeasonConstructors}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeasonConstructorResults}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeasonConstructorResults}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeSeasonDriverResults}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeSeasonDriverResults}
                </Button>
            </Typography>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <Typography variant="h6" gutterBottom>
                <Button
                    variant="outlined"
                    href={season.wikipediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    Wikipedia
                </Button>
            </Typography>

        </Container>
    );
}

export default SeasonDetails;
