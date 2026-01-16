import React from 'react';
import { List, Divider } from '@mui/material';
import CustomListItem from '../common/CustomListItem';
import SectionTitle from '../common/SectionTitle';

const AblutionSunnah = () => {
    return (
        <>
            <Divider sx={{ my: 3, borderColor: '#b2ebf2' }} />

            <SectionTitle>Sunnah of Wudu (Optional but recommended steps)</SectionTitle>
            <List>
                <CustomListItem
                    number={1}
                    text="Saying Bismillah (بسم الله) (In the name of Allah) at the beginning"
                />
                <CustomListItem
                    number={2}
                    text="Washing the hands up to the wrists three times"
                />
                <CustomListItem
                    number={3}
                    text="Using the Siwak (toothstick) before rinsing the mouth"
                />
                <CustomListItem
                    number={4}
                    text="Rinsing the mouth (Madmadah) three times"
                />
                <CustomListItem
                    number={5}
                    text="Sniffing water into the nose (Istinshaq) and blowing it out (Istinthar)"
                />
                <CustomListItem
                    number={6}
                    text="Wiping the ears (inside and outside)"
                />
                <CustomListItem
                    number={7}
                    text="Wocheing the beard with wet fingers (Khilal)"
                />
                <CustomListItem
                    number={8}
                    text="Washing between the fingers and toes"
                />
                <CustomListItem
                    number={9}
                    text="Starting with the right side before the left"
                />
            </List>
        </>
    );
};

export default AblutionSunnah;
