import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { ConstructorDto } from '../interfaces/ConstructorDto';

function ConstructorDetails() {
    const { constructorId } = useParams();
    const routeConstructors = `/api/constructors`;
    const routeConstructor = `${routeConstructors}/${constructorId}`;
    const routeConstructorDrivers = `${routeConstructor}/drivers`;
    const routeConstructorResults = `${routeConstructor}/results`;
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
                    href={`${baseUrl}${routeConstructors}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeConstructors}
                </Button>
            </Typography>

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
                    href={`${baseUrl}${routeConstructorResults}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeConstructorResults}
                </Button>
            </Typography>
        </Container>
    );
}

export default ConstructorDetails;
