import { List, ListItem, ListItemText } from '@mui/material';
import { GrandPrixDto } from '../interfaces/GrandPrixDto.ts';
import BaseListPage from './BaseListPage.tsx';

function GrandPrix() {
    return (
        <BaseListPage<GrandPrixDto>
            title="Grand Prix"
            url="/api/grandprix"
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

export default GrandPrix;
