import { Box, List, ListItem, Typography } from '@mui/material';
import { SessionType } from '../interfaces/SessionType';
import BaseListPage from './BaseListPage';

function SessionTypes() {
    return (
        <BaseListPage<SessionType>
            title="Session Types"
            route="/api/sessiontypes"
            itemsName="sessionTypes"
            renderList={(sessiontypes) => (
                <List>
                    <ListItem sx={{ backgroundColor: "#e0e0e0", mb: 1, borderRadius: 1 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Description
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Type
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                    {sessiontypes?.map((sessiontype) => (
                        <ListItem key={sessiontype.id} sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1 }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {sessiontype.description}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {sessiontype.id}
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

export default SessionTypes;
