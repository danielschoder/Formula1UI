import { Button, Container, Pagination, Typography } from '@mui/material';
import React, { useState } from 'react';
import { baseUrl } from '../constants';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useFetchData } from '../hooks/useFetchData';

interface BaseListPageProps<T> {
    title: string;
    route: string;
    itemsName: string;
    renderList: (items: T[]) => React.ReactNode;
}

function BaseListPage<T>({ title, route, itemsName, renderList } : BaseListPageProps<T>) {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(20);
    const { data, loading, error } = useFetchData<T>(`${baseUrl}${route}`, itemsName, page, pageSize);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                {title}
            </Typography>
            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${route}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {route}
                </Button>
            </Typography>

            {renderList(data?.items || [])}

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
