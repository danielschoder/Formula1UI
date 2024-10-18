import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useFetchData } from '../hooks/useFetchData';
import { baseUrl } from '../constants';
import { Driver } from '../interfaces/Driver';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Constructors() {
    const apiUrl = `${baseUrl}/api/drivers`;
    const { data: drivers, loading, error } = useFetchData<Driver[]>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Drivers
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
                {drivers?.map((driver) => (
                    <ListItem key={driver.id}>
                        <ListItemText primary={driver.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Constructors;
