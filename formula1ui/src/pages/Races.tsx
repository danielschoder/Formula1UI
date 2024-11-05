import { Box, List, ListItem, Typography } from '@mui/material';
import { baseUrl } from '../constants';
import { Race } from '../interfaces/Race';
import BaseListPageProps from './BaseListPage';

function Races() {
    return (
        <BaseListPageProps<Race>
            title="Races"
            route={`${baseUrl}/api/races`}
            renderList={(races) => (
                <List>
                    {races?.map((race) => (
                        <ListItem key={race.id} sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1 }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {race.seasonYear}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        Round: {race.round}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.primary" fontStyle="italic">
                                        {race.grandPrix.name}
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

export default Races;
