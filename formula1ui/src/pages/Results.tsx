import { Box, List, ListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ResultDto } from '../dtos/ResultDto';
import BaseListPage from './BaseListPage';

function Results() {
    const navigate = useNavigate();

    return (
        <BaseListPage<ResultDto>
            title="Results"
            route="/api/results"
            itemsName="results"
            renderList={(results) => (
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
                                    GrandPrix
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Position
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Points
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Driver
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Constructor
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                    {results?.map((result) => (
                        <ListItem
                            key={result.id}
                            sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1, cursor: 'pointer' }}
                            onClick={() => navigate(`/results/${result.id}`)}
                        >
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {result.seasonYear}/{result.round}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {result.grandPrixName}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {result.ranking}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {result.points}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {result.driverName}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {result.constructorName}
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

export default Results;
