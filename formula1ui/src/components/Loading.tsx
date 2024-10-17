import React from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';

const Loading: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Loading...
            </Typography>
            <CircularProgress />
        </Container>
    );
};

export default Loading;
