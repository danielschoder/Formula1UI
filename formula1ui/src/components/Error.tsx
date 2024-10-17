import React from 'react';
import { Container, Typography } from '@mui/material';

const Error: React.FC<{ error: string }> = ({ error }) => {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Error: {error}
            </Typography>
        </Container>
    );
};

export default Error;
