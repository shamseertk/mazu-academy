import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Box } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { duas } from '../../data/dua';

const PrayerRelated = () => {
    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <SectionTitle>Prayer Related Information</SectionTitle>

            <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'var(--highlight-box-text)', fontWeight: 'bold' }}>
                Sujud Sahw (Prostration of Forgetfulness) <br /> (سُجُود السَّهْو)
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Sujud Sahw refers to the two prostrations performed at the end of the prayer to compensate for forgetting an essential Sunnah (Ab'alu Sunnah) or simply for forgetfulness in the prayer.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                It is Sunnah to perform two prostrations before the Salam (completing the prayer) if:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary="One forgets an 'Ab'alu Sunnah' (e.g., first Tashahhud, Sujud etc)." />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText primary="One is in doubt about the number of Rak'ahs performed." />
                </ListItem>
            </List>

            <Box sx={{ bgcolor: 'var(--highlight-box-bg)', p: 2, borderRadius: 2, border: '1px solid var(--highlight-box-border)', my: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'var(--highlight-box-text)', mb: 1 }}>
                    Specific Cases:
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary={<Typography variant="body2" sx={{ fontWeight: 'bold' }}>Forgetting First Tashahhud:</Typography>}
                            secondary="If one forgets the first Tashahhud and stands up fully, they should not return to sit. They continue the prayer and perform Sujud Sahw before Salam."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={<Typography variant="body2" sx={{ fontWeight: 'bold' }}>Doubt in Rak'ahs:</Typography>}
                            secondary="If in doubt whether 3 or 4 Rak'ahs were prayed, assume the lesser number (3), perform one more Rak'ah, and then perform Sujud Sahw."
                        />
                    </ListItem>
                </List>
            </Box>

            <Typography id="sujud-sahw-dua" variant="subtitle1" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: 'var(--highlight-box-text)' }}>
                Dua in Sujud Sahw:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.8rem', color: 'var(--highlight-box-text)', fontFamily: 'serif', lineHeight: 2.2, direction: 'rtl', textAlign: 'right', mb: 1 }}>
                {duas.duaSujudSahw.arabic}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'var(--translation-text-color)', fontStyle: 'italic' }}>
                {duas.duaSujudSahw.english}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'var(--highlight-box-text)', fontWeight: 'bold' }}>
                Sujud Tilawah (Prostration of Recitation) <br /> (سُجُودُ التِّلَاوَةِ)
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                There are specific verses in the Quran where it is Sunnah to prostrate upon reciting or hearing them.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                For example, in the Fajr prayer on Friday, it is Sunnah to recite Surah As-Sajdah. When the verse of prostration is reached, one should say 'Allahu Akbar' and prostrate.
            </Typography>

            <Typography id="sujud-tilawah-dua" variant="subtitle1" sx={{ fontWeight: 'bold', mt: 3, mb: 1, color: 'var(--highlight-box-text)' }}>
                Dua in Sujud Tilawah:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.6rem', color: 'var(--highlight-box-text)', fontFamily: 'serif', lineHeight: 2.2, direction: 'rtl', textAlign: 'right', mb: 1 }}>
                {duas.sujudTilawah.arabic}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'var(--translation-text-color)', fontStyle: 'italic' }}>
                {duas.sujudTilawah.english}
            </Typography>
        </Box>
    );
};

export default PrayerRelated;
