import { Box, List, ListItem, Typography } from '@mui/material';
import { Session } from '../interfaces/Session';
import BaseListPage from './BaseListPage';

function Sessions() {
    return (
        <BaseListPage<Session>
            title="Sessions"
            route="/api/sessions"
            itemsName="sessions"
            renderList={(sessions) => (
                <List>
                    <ListItem sx={{ backgroundColor: "#e0e0e0", mb: 1, borderRadius: 1 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Season
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Round
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
                        <ListItem key={session.id} sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1 }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {session.race.seasonYear}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {session.race.round}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {session.race.grandPrix.name}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {session.sessionType.description}
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
