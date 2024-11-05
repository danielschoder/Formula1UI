import { List, ListItem, ListItemText } from '@mui/material';
import { Result } from '../interfaces/Result';
import BaseListPage from './BaseListPage';

function Results() {
    return (
        <BaseListPage<Result>
            title="Results"
            route="/api/results"
            renderList={(results) => (
                <List>
                    {results?.map((result) => (
                        <ListItem key={result.id}>
                            <ListItemText primary={result.position} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Results;
