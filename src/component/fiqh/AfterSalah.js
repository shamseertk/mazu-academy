import React from 'react';
import { List } from '@mui/material';
import { duas } from '../../data/dua';
import SectionTitle from '../common/SectionTitle';
import CustomListItem from '../common/CustomListItem';

const AfterSalah = () => {
    return (
        <div className="container-fluid" style={{ padding: '20px 0' }}>
            <SectionTitle>Dua and Dikr After Salah(Prayer)</SectionTitle>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#455a64' }}>
                {duas.duaAfterSalah.intro}
            </p>

            <List>
                {duas.duaAfterSalah.items.map((item, index) => (
                    <CustomListItem
                        key={index}
                        number={index + 1}
                        text={
                            <div>
                                <div style={{ fontSize: '2rem', color: '#006064', marginTop: '10px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                    {item.arabic}
                                </div>
                                <div style={{ fontSize: '1.1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                    {item.english}
                                </div>
                            </div>
                        }
                    />
                ))}
            </List>
        </div>
    );
};

export default AfterSalah;
