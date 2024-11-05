import { List, ListItem, ListItemText } from '@mui/material';
import { Driver } from '../interfaces/Driver';
import BaseListPage from './BaseListPage';

function Drivers() {
    return (
        <BaseListPage<Driver>
            title="Drivers"
            route="/api/drivers"
            renderList={(drivers) => (
                <List>
                    {drivers?.map((driver) => (
                        <ListItem key={driver.id}>
                            <ListItemText primary={driver.name} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Drivers;
