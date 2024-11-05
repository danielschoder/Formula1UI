import { List, ListItem, ListItemText } from '@mui/material';
import { GrandPrix } from '../interfaces/GrandPrix.ts';
import BaseListPage from './BaseListPage.tsx';

function GrandPrixPage() {
    return (
        <BaseListPage<GrandPrix>
            title="Grand Prix"
            route="/api/grandprix"
            renderList={(grandPrixDtos) => (
                <List>
                    {grandPrixDtos?.map((grandPrixDto) => (
                        <ListItem key={grandPrixDto.id}>
                            <ListItemText primary={grandPrixDto.name} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default GrandPrixPage;
