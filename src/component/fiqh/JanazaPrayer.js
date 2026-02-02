import React from 'react';
import { List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { duas } from '../../data/dua';

const JanazaPrayer = () => {
    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <SectionTitle>Funeral Prayer (Janaza Prayer) <br /> (صَلَاةُ الْجَنَازَة)</SectionTitle>

            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--topic-description-color)' }}>
                Janaza Prayer is a Fard Kifaya (Community Obligation). If some Muslims perform it, the obligation is fulfilled for the community. It is a prayer for the deceased.
            </Typography>

            <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'var(--highlight-box-text)', fontWeight: 'bold' }}>
                Steps of Janaza Prayer:
            </Typography>

            <List sx={{ listStyleType: 'decimal', pl: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText
                        primary={<Typography variant="body1" sx={{ color: 'var(--topic-description-color)' }}><strong>First Takbeer:</strong> Make Niyyah (Intention) to perform the funeral prayer for the deceased.</Typography>}
                        secondary={<Typography variant="body2" sx={{ color: 'var(--translation-text-color)', mt: 1 }}>After the first Takbeer (Allahu Akbar), recite Surah Al-Fatiha.</Typography>}
                    />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText
                        primary={<Typography variant="body1" sx={{ color: 'var(--topic-description-color)' }}><strong>Second Takbeer:</strong></Typography>}
                        secondary={<Typography variant="body2" sx={{ color: 'var(--translation-text-color)', mt: 1 }}>After the second Takbeer, recite Salawat upon the Prophet (Ibrahimiyya) - the same as recited in Tashahhud.</Typography>}
                    />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText
                        primary={<Typography variant="body1" sx={{ color: 'var(--topic-description-color)' }}><strong>Third Takbeer:</strong></Typography>}
                        secondary={<Typography variant="body2" sx={{ color: 'var(--translation-text-color)', mt: 1 }}>After the third Takbeer, recite the Dua for the deceased.</Typography>}
                    />
                </ListItem>
            </List>

            <Box sx={{ bgcolor: 'var(--highlight-box-bg)', p: 3, borderRadius: 2, border: '1px solid var(--highlight-box-border)', my: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'var(--highlight-box-text)', mb: 2 }}>
                    Dua for the Deceased:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: 'var(--arabic-text-color)', fontFamily: 'serif', lineHeight: 2.2, direction: 'rtl', textAlign: 'right', mb: 2 }}>
                    {duas.duaJanaza.arabic}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'var(--translation-text-color)', fontStyle: 'italic' }}>
                    {duas.duaJanaza.english}
                </Typography>
            </Box>

            <List sx={{ listStyleType: 'decimal', pl: 4, start: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText
                        primary={<Typography variant="body1" sx={{ color: 'var(--topic-description-color)' }}><strong>Fourth Takbeer:</strong></Typography>}
                        secondary={<Typography variant="body2" sx={{ color: 'var(--translation-text-color)', mt: 1 }}>After the fourth Takbeer, recite the following Sunnah Dua before Salam:</Typography>}
                    />
                </ListItem>
            </List>

            <Box sx={{ bgcolor: 'var(--highlight-box-bg)', p: 3, borderRadius: 2, border: '1px solid var(--highlight-box-border)', my: 2 }}>
                <Typography variant="body1" sx={{ fontSize: '1.8rem', color: 'var(--arabic-text-color)', fontFamily: 'serif', lineHeight: 2.2, direction: 'rtl', textAlign: 'right', mb: 2 }}>
                    {duas.duaJanaza4th.arabic}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'var(--translation-text-color)', fontStyle: 'italic' }}>
                    {duas.duaJanaza4th.english}
                </Typography>
            </Box>

            <List sx={{ listStyleType: 'decimal', pl: 4, start: 5 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText
                        primary={<Typography variant="body1" sx={{ color: 'var(--topic-description-color)' }}><strong>Tasleem:</strong></Typography>}
                        secondary={<Typography variant="body2" sx={{ color: 'var(--translation-text-color)', mt: 1 }}>Conclude the prayer with Salam (Tasleem) to the right and left.</Typography>}
                    />
                </ListItem>
            </List>
        </Box>
    );
};

export default JanazaPrayer;
