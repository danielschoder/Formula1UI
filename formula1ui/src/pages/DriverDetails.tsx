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
    const route = "/api/drivers";
    const routeDriver = `${route}/${driverId}`;
    const routeDriverResults = `${route}/${driverId}/results`;
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
                <IconButton onClick={() => navigate('/drivers')} color="primary" style={{ marginRight: '16px' }}>
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
        </Container>
    );
}

export default DriverDetails;
