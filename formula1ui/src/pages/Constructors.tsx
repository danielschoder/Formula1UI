import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Constructor } from '../interfaces/Constructor';
import { Link as RouterLink } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { baseUrl } from '../constants';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Constructors() {
    const { data: constructors, loading, error } = useFetchData<Constructor[]>(`${baseUrl}/api/constructors`);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Button
                variant="contained"
                component={RouterLink}
                to="/"
                style={{ marginTop: '16px' }}
            >
                Home
            </Button>
            <Typography variant="h2" align="center" gutterBottom>
                Formula 1 Constructors
            </Typography>
            <List>
                {constructors?.map((constructor) => (
                    <ListItem key={constructor.id}>
                        <ListItemText primary={constructor.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Constructors;
