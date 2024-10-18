import React from 'react';
import { Container, Typography } from '@mui/material';

const Error: React.FC<{ error: string }> = ({ error }) => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Error
            </Typography>
            <Typography variant="body1" gutterBottom>
                {error}
            </Typography>
        </Container>
    );
};

export default Error;
