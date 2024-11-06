import { Box, List, ListItem, Typography } from '@mui/material';
import { Circuit } from '../interfaces/Circuit';
import BaseListPage from './BaseListPage';

function Circuits() {
    return (
        <BaseListPage<Circuit>
            title="Circuits"
            route="/api/circuits"
            itemsName="circuits"
            renderList={(circuits) => (
                <List>
                    <ListItem sx={{ backgroundColor: "#e0e0e0", mb: 1, borderRadius: 1 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Name
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Id
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                    {circuits?.map((circuit) => (
                        <ListItem key={circuit.id} sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1 }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {circuit.name}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {circuit.id}
                                    </Typography>
                                </Box>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Circuits;
