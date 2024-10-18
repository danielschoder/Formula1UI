import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useFetchData } from '../hooks/useFetchData';
import { baseUrl } from '../constants';
import Loading from '../components/Loading';
import Error from '../components/Error';

interface BaseListPage<T> {
    title: string;
    url: string;
    renderList: (data: T[]) => React.ReactNode; // Function to render the list
}

function ApiPage<T>({ title, url, renderList }: BaseListPage<T>) {
    const apiUrl = `${baseUrl}${url}`;
    const { data, loading, error } = useFetchData<T[]>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                {title}
            </Typography>
            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {url}
                </Button>
            </Typography>
            {renderList(data || [])}
        </Container>
    );
}

export default ApiPage;
