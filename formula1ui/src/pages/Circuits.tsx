import { List, ListItem, ListItemText } from '@mui/material';
import BaseListPage from './BaseListPage';
import { Circuit } from '../interfaces/Circuit';

function Circuits() {
    return (
        <BaseListPage<Circuit>
            title="Circuits"
            route="/api/circuits"
            itemsName="circuits"
            renderList={(circuits) => (
                <List>
                    {circuits?.map((circuit) => (
                        <ListItem key={circuit.id}>
                            <ListItemText primary={circuit.name} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Circuits;
