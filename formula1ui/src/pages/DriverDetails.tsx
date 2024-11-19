import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { DriverDto } from '../interfaces/DriverDto';

function DriverDetails() {
    const { driverId } = useParams();
    const routeDriver = `/api/drivers/${driverId}`;
    const routeDriverResults = `${routeDriver}/results?pageNumber=1&pageSize=50`;
    const routeDriverConstructors = `${routeDriver}/constructors`;
    const routeSeasonDriverResults = `/api/seasons/1950/drivers/${driverId}/results`;
    const navigate = useNavigate();
    const [driver, setDriver] = useState<DriverDto | null>(null);
    const { data, loading, error } = useFetchData<DriverDto>(`${baseUrl}${routeDriver}`);

    useEffect(() => {
        if (data) {
            setDriver(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!driver) return <Error error="Driver not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/drivers')} color="primary" sx={{ mr: 2 }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {driver.name}
                </Typography>
            </Box>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeDriver}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeDriver}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeDriverResults}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeDriverResults}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeDriverConstructors}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeDriverConstructors}
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
        </Container>
    );
}

export default DriverDetails;
