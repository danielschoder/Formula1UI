import { Box, List, ListItem, Typography } from '@mui/material';
import { Race } from '../interfaces/Race';
import BaseListPage from './BaseListPage';

function Races() {
    return (
        <BaseListPage<Race>
            title="Races"
            url="/api/races"
            renderList={(races) => (
                <List>
                    {races?.map((race) => (
                        <ListItem key={race.id}>
                            <Box display="flex" alignItems="center" width="100%">
                                <Typography>{race.seasonYear}</Typography>
                                <Typography>{race.round}</Typography>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Races;
