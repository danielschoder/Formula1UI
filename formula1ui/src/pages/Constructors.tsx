import { List, ListItem, ListItemText } from '@mui/material';
import { Constructor } from '../interfaces/Constructor';
import BaseListPage from './BaseListPage';

function Constructors() {
    return (
        <BaseListPage<Constructor>
            title="Constructors"
            url="/api/constructors"
            renderList={(constructors) => (
                <List>
                    {constructors?.map((constructor) => (
                        <ListItem key={constructor.id}>
                            <ListItemText primary={constructor.name} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Constructors;
