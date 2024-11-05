import { List, ListItem, ListItemText } from '@mui/material';
import { SessionType } from '../interfaces/SessionType';
import BaseListPage from './BaseListPage';

function SessionTypes() {
    return (
        <BaseListPage<SessionType>
            title="Session Types"
            route="/api/sessiontypes"
            renderList={(sessiontypes) => (
                <List>
                    {sessiontypes?.map((sessiontype) => (
                        <ListItem key={sessiontype.id}>
                            <ListItemText primary={sessiontype.description} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default SessionTypes;
