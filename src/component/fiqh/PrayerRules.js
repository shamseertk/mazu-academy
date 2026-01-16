import React from 'react';
import { List, Divider } from '@mui/material';
import CustomListItem from '../common/CustomListItem';
import SectionTitle from '../common/SectionTitle';

const PrayerRules = () => {
    return (
        <div id="fard">
            <Divider sx={{ my: 3, borderColor: '#b2ebf2' }} />

            <SectionTitle>Fard of Salah (Mandatory Steps of Prayer)</SectionTitle>
            <List>
                <CustomListItem
                    number={1}
                    text="Intention (Niyyah)"
                />
                <CustomListItem
                    number={2}
                    text="Takbeeratul Ihram (Opening Takbeer)"
                />
                <CustomListItem
                    number={3}
                    text="Standing (Qiyam) if able"
                />
                <CustomListItem
                    number={4}
                    text="Reciting Surah Al-Fatiha"
                />
                <CustomListItem
                    number={5}
                    text="Ruku (Bowing)"
                />
                <CustomListItem
                    number={6}
                    text="I'tidal (Standing up from Ruku)"
                />
                <CustomListItem
                    number={7}
                    text="Sujood (Prostration) twice"
                />
                <CustomListItem
                    number={8}
                    text="Sitting between the two Sujoods"
                />
                <CustomListItem
                    number={9}
                    text="Thuma'neenah (Tranquility) in all positions"
                />
                <CustomListItem
                    number={10}
                    text="The Final Tashahhud (Sitting for the final testimony)"
                />
                <CustomListItem
                    number={11}
                    text="Reciting the Final Tashahhud"
                />
                <CustomListItem
                    number={12}
                    text="Sending blessings (Salawat) on the Prophet (SAW) in the final sitting"
                />
                <CustomListItem
                    number={13}
                    text="Tasleem (Saying Salam to end the prayer)"
                />
                <CustomListItem
                    number={14}
                    text="Tertib (Performing the pillars in order)"
                />
            </List>
        </div>
    );
};

export default PrayerRules;
