import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { Season } from '../interfaces/Season';
import BaseListPage from './BaseListPage';

function Seasons() {
    return (
        <BaseListPage<Season>
            title="Seasons"
            route="/api/seasons"
            itemsName="seasons"
            renderList={(seasons) => (
                <List>
                    {seasons?.map((season) => (
                        <ListItem key={season.year}>
                            <Box display="flex" alignItems="center" width="100%">
                                <Typography>{season.year}</Typography>
                                <Button
                                    variant="outlined"
                                    href={season.wikipediaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textTransform: 'lowercase', marginLeft: '24px' }} // Fixed margin
                                >
                                    Wikipedia
                                </Button>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Seasons;
