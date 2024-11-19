import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { ConstructorDto } from '../interfaces/ConstructorDto';

function ConstructorDetails() {
    const { constructorId } = useParams();
    const routeConstructor = `/api/constructors/${constructorId}`;
    const routeConstructorResults = `${routeConstructor}/results?pageNumber=1&pageSize=50`;
    const routeConstructorDrivers = `${routeConstructor}/drivers`;
    const routeSeasonConstructorResults = `/api/seasons/1950/constructors/${constructorId}/results`;
    const navigate = useNavigate();
    const [constructor, setCconstructor] = useState<ConstructorDto | null>(null);
    const { data, loading, error } = useFetchData<ConstructorDto>(`${baseUrl}${routeConstructor}`);

    useEffect(() => {
        if (data) {
            setCconstructor(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!constructor) return <Error error="Constructor not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/constructors')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {constructor.name}
                </Typography>
            </Box>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeConstructor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeConstructor}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeConstructorResults}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeConstructorResults}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeConstructorDrivers}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeConstructorDrivers}
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
        </Container>
    );
}

export default ConstructorDetails;
