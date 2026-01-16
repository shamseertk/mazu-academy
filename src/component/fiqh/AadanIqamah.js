import React from 'react';
import { List, Divider } from '@mui/material';
import CustomListItem from '../common/CustomListItem';
import SectionTitle from '../common/SectionTitle';
import { duas } from '../../data/dua';

const AadanIqamah = () => {
    return (
        <div id="adaan">
            <Divider sx={{ my: 3, borderColor: '#b2ebf2' }} />

            <SectionTitle>Adaan and Iqamah</SectionTitle>
            <List>
                <CustomListItem
                    number={1}
                    text="Adaan is the call to prayer, announcing that the time for a particular obligatory prayer has begun."
                />
                <CustomListItem
                    number={2}
                    text="Iqamah is the second call to prayer, given immediately before the prayer begins."
                />
                <CustomListItem
                    number={3}
                    text={
                        <div id="adaanDua">
                            Du'a after Adaan:
                            <div style={{ fontSize: '2rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                {duas.afterAdaan.arabic}
                            </div>
                            <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '15px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                {duas.afterAdaan.english}
                            </div>
                        </div>
                    }
                />
            </List>
        </div>
    );
};

export default AadanIqamah;
