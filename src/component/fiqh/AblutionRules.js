import React from 'react';
import { List, Divider } from '@mui/material';
import CustomListItem from '../common/CustomListItem';
import SectionTitle from '../common/SectionTitle';

const AblutionRules = () => {
    return (
        <>
            <Divider sx={{ my: 3, borderColor: '#b2ebf2' }} />

            <SectionTitle>Fard of Wudu (Mandatory steps of Ablution)</SectionTitle>
            <List>
                <CustomListItem
                    number={1}
                    text="Intention (have the intention that you are doing this to purify yourself)"
                />
                <CustomListItem
                    number={2}
                    text="Wash the face (3 times)"
                />
                <CustomListItem
                    number={3}
                    text="Wash both arms including the elbows"
                />
                <CustomListItem
                    number={4}
                    text="Wipe your head with the wet hand"
                />
                <CustomListItem
                    number={5}
                    text="Wash both feet including the ankle"
                />
                <CustomListItem
                    number={6}
                    text="Thartheeb-Keep the order"
                />
            </List>
        </>
    );
};

export default AblutionRules;
