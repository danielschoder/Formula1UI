import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Season } from '../interfaces/Season';
import { useFetchData } from '../hooks/useFetchData';
import { baseUrl } from '../constants';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Seasons() {
    const apiUrl = `${baseUrl}/api/seasons`;
    const { data: seasons, loading, error } = useFetchData<Season[]>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Seasons
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
                {seasons?.map((constructor) => (
                    <ListItem key={constructor.year}>
                        <ListItemText primary={constructor.year} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Seasons;
