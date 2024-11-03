import { Button, Container, Pagination, Typography } from '@mui/material';
import React, { useState } from 'react';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { baseUrl } from '../constants';
import { useFetchData } from '../hooks/useFetchData';
import { Race, RacesPaginated } from '../interfaces/Race';

interface BaseListPageProps {
    title: string;
    url: string;
    renderList: (items: Race[]) => React.ReactNode;
}

function BaseListPage({ title, url, renderList }: BaseListPageProps) {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(20);
    const apiUrl = `${baseUrl}${url}?pageNumber=${page}&pageSize=${pageSize}`;
    const { data, loading, error } = useFetchData<RacesPaginated>(apiUrl);

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

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

            {renderList(data?.races || [])}

            <Pagination
                count={Math.ceil((data?.totalCount || 0) / pageSize)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                style={{ marginTop: '16px' }}
            />
        </Container>
    );
}

export default BaseListPage;
