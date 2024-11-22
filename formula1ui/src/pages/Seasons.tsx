import { Box, List, ListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SeasonDto } from '../dtos/SeasonDto';
import BaseListPage from './BaseListPage';

function Seasons() {
    const navigate = useNavigate();

    return (
        <BaseListPage<SeasonDto>
            title="Seasons"
            route="/api/seasons"
            itemsName="seasons"
            renderList={(seasons) => (
                <List>
                    <ListItem sx={{ backgroundColor: "#e0e0e0", mb: 1, borderRadius: 1 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Year
                                </Typography>
                            </Box>
                        {/*    <Box flex={1}>*/}
                        {/*        <Typography variant="h6" color="text.primary" fontWeight="bold">*/}
                        {/*            Wikipedia*/}
                        {/*        </Typography>*/}
                        {/*    </Box>*/}
                        </Box>
                    </ListItem>
                    {seasons?.map((season) => (
                        <ListItem
                            key={season.year}
                            sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1, cursor: 'pointer' }}
                            onClick={() => navigate(`/seasons/${season.year}`)}
                        >
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {season.year}
                                    </Typography>
                                </Box>
                            {/*    <Box flex={1}>*/}
                            {/*        <Button*/}
                            {/*            variant="outlined"*/}
                            {/*            href={season.wikipediaUrl}*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            style={{ textTransform: 'lowercase' }}*/}
                            {/*        >*/}
                            {/*            Wikipedia*/}
                            {/*        </Button>*/}
                            {/*    </Box>*/}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Seasons;
