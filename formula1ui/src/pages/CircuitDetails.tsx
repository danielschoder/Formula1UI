import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { CircuitDto } from '../dtos/CircuitDto';
import { useFetchData } from '../hooks/useFetchData';

function CircuitDetails() {
    const { id } = useParams();
    const routeCircuits = `/api/circuits`;
    const routeCircuit = `${routeCircuits}/${id}`;
    const routeCircuitRaces = `${routeCircuit}/races`;
    const navigate = useNavigate();
    const [circuit, setCircuit] = useState<CircuitDto | null>(null);
    const { data, loading, error } = useFetchData<CircuitDto>(`${baseUrl}${routeCircuit}`);

    useEffect(() => {
        if (data) {
            setCircuit(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!circuit) return <Error error="Circuit not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/circuits')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {circuit.name}
                </Typography>
            </Box>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeCircuits}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeCircuits}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeCircuit}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeCircuit}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeCircuitRaces}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeCircuitRaces}
                </Button>
            </Typography>
        </Container>
    );
}

export default CircuitDetails;
