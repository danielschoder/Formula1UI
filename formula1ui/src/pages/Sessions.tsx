import { Box, List, ListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SessionDto } from '../dtos/SessionDto';
import BaseListPage from './BaseListPage';

function Sessions() {
    const navigate = useNavigate();

    return (
        <BaseListPage<SessionDto>
            title="Sessions"
            route="/api/sessions"
            itemsName="sessions"
            renderList={(sessions) => (
                <List>
                    <ListItem sx={{ backgroundColor: "#e0e0e0", mb: 1, borderRadius: 1 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Season/Round
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Grand Prix
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Race/Sprint
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                    {sessions?.map((session) => (
                        <ListItem
                            key={session.id}
                            sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1, cursor: 'pointer' }}
                            onClick={() => navigate(`/sessions/${session.id}`)}
                        >
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {session.seasonYear}/{session.round}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {session.grandPrixName}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {session.sessionTypeDescription}
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

export default Sessions;
