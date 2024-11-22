import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl, page1size50 } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { GrandPrixDto } from '../dtos/GrandPrixDto';

function GrandPrixDetails() {
    const { id } = useParams();
    const routeGrandprixList = `/api/grandprix`;
    const routeGrandprix = `${routeGrandprixList}/${id}`;
    //const routeGrandprixResults = `${routeGrandprix}/results`;
    const navigate = useNavigate();
    const [grandPrix, setGrandPrix] = useState<GrandPrixDto | null>(null);
    const { data, loading, error } = useFetchData<GrandPrixDto>(`${baseUrl}${routeGrandprix}`);

    useEffect(() => {
        if (data) {
            setGrandPrix(data);
        }
    }, [data]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (!grandPrix) return <Error error="GrandPrix not found" />;

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/grandprix')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {grandPrix.name}
                </Typography>
            </Box>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeGrandprixList}${page1size50}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeGrandprixList}
                </Button>
            </Typography>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${routeGrandprix}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {routeGrandprix}
                </Button>
            </Typography>

        {/*    <Typography gutterBottom>*/}
        {/*        <Button*/}
        {/*            variant="outlined"*/}
        {/*            color="primary"*/}
        {/*            href={`${baseUrl}${routeGrandprixResults}`}*/}
        {/*            target="_blank"*/}
        {/*            rel="noopener noreferrer"*/}
        {/*            style={{ textTransform: 'lowercase' }}*/}
        {/*        >*/}
        {/*            {routeGrandprixResults}*/}
        {/*        </Button>*/}
        {/*    </Typography>*/}
        </Container>
    );
}

export default GrandPrixDetails;
