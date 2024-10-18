import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { GrandPrixDto } from '../interfaces/GrandPrixDto.ts';
import { useFetchData } from '../hooks/useFetchData';
import { baseUrl } from '../constants';
import Loading from '../components/Loading';
import Error from '../components/Error';

function GrandPrix() {
    const apiUrl = `${baseUrl}/api/grandprix`;
    const { data: grandPrixDtos, loading, error } = useFetchData<GrandPrixDto[]>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Grand Prix
            </Typography>
            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {apiUrl}
                </Button>
            </Typography>
            <List>
                {grandPrixDtos?.map((grandPrixDto) => (
                    <ListItem key={grandPrixDto.id}>
                        <ListItemText primary={grandPrixDto.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default GrandPrix;
