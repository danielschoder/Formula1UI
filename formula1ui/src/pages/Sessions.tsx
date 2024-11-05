import { List, ListItem, ListItemText } from '@mui/material';
import { Session } from '../interfaces/Session';
import BaseListPage from './BaseListPage';

function Sessions() {
    return (
        <BaseListPage<Session>
            title="Sessions"
            route="/api/sessions"
            renderList={(sessions) => (
                <List>
                    {sessions?.map((session) => (
                        <ListItem key={session.id}>
                            <ListItemText primary={session.raceId} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Sessions;
