import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Constructor } from '../interfaces/Constructor';
import { useFetchData } from '../hooks/useFetchData';
import { baseUrl } from '../constants';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Constructors() {
    const apiUrl = `${baseUrl}/api/constructors`;
    const { data: constructors, loading, error } = useFetchData<Constructor[]>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Constructors
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