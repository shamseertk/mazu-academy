import React from 'react';
import { Divider, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';

const PrayerStructure = () => {
    return (
        <div id="structure">
            <Divider sx={{ my: 3, borderColor: '#b2ebf2' }} />
            <SectionTitle>Prayer Structure and Duas</SectionTitle>
            <Typography variant="body1" sx={{ color: '#546e7a', mb: 2 }}>
                (Content for Prayer Structure and Duas in each step will be added here.)
            </Typography>
        </div>
    );
};

export default PrayerStructure;
