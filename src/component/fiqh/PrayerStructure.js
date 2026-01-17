import { List, Divider } from '@mui/material';
import CustomListItem from '../common/CustomListItem';
import SectionTitle from '../common/SectionTitle';
import { duas } from '../../data/dua';

const PrayerStructure = () => {
    return (
        <div id="structure">
            <Divider sx={{ my: 3, borderColor: '#b2ebf2' }} />
            <SectionTitle>Prayer Structure and Duas</SectionTitle>
            <List>
                <CustomListItem
                    number={1}
                    text={
                        <div>
                            <strong>Standing (if able):</strong>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li style={{ marginBottom: '8px' }}>Stand facing towards the Qibla direction.</li>
                                <li style={{ marginBottom: '8px' }}>
                                    <strong>Niyyah (Intention):</strong> Have the intention in your heart: "For Allah, I am performing this obligatory prayer of [number] rak'ahs facing the Qibla."
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <strong>Takbeeratul Ihram:</strong> Raise your hands above to the level of your shoulders or earlobes and say "Allahu Akbar". Place your hands on your chest/between belly and heart, with the right hand over the left hand.
                                </li>
                                <li id="dua-iftitah" style={{ marginBottom: '8px' }}>
                                    <strong>Recite Dua Al-Iftitah (Opening Supplication):</strong>
                                    <p>This dua is only recited in the first rak'ah of the prayer after the takbeer.</p>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaIfthihah.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaIfthihah.english}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <CustomListItem
                    number={2}
                    text="Recite portions of the Quran: Recite Surah Al-Fatiha and then recite another Surah or a few Ayahs (verses) from the Quran."
                />
                <CustomListItem
                    number={3}
                    text={
                        <div>
                            <strong>Ruku (Bowing):</strong>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li style={{ marginBottom: '8px' }}>Bend down in bowing position, keeping your back straight.</li>
                                <li style={{ marginBottom: '8px' }}>Place both hands on the respective knees with fingers spread apart.</li>
                                <li style={{ marginBottom: '8px' }}>
                                    <strong>Recite:</strong>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaRuku.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaRuku.english}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
            </List>
        </div>
    );
};

export default PrayerStructure;
