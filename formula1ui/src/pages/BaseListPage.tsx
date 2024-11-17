import { Box, Button, Container, IconButton, Pagination, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { baseUrl } from '../constants';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useFetchData } from '../hooks/useFetchData';
import { useNavigate } from 'react-router-dom';

interface BaseListPageProps<T> {
    title: string;
    route: string;
    itemsName: string;
    renderList: (items: T[]) => React.ReactNode;
}

function BaseListPage<T>({ title, route, itemsName, renderList } : BaseListPageProps<T>) {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [pageSize] = useState(15);
    const { data, loading, error } = useFetchData<T>(`${baseUrl}${route}`, itemsName, page, pageSize);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const totalPages = Math.ceil((data?.totalCount || 0) / pageSize);

    return (
        <Container sx={{ mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
                <IconButton onClick={() => navigate('/')} color="primary" style={{ marginRight: '16px' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
                <Typography variant="h2">
                    {title}
                </Typography>
            </Box>

            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={`${baseUrl}${route}?pageNumber=${page}&pageSize=${pageSize}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {route}
                </Button>
            </Typography>

            {totalPages > 1 && (
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    style={{ marginTop: '16px' }}
                />
            )}

            {renderList(data?.items || [])}
        </Container>
    );
}

export default BaseListPage;
