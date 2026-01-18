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
                                <li id="ruku-dua" style={{ marginBottom: '8px' }}>
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
                <CustomListItem
                    number={4}
                    text={
                        <div>
                            <strong>I'tidal(إعتدال) (Standing up from Ruku):</strong>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li id="ruku-rise-dua" style={{ marginBottom: '8px' }}>
                                    <strong>Recite when you standing up from Ruku:</strong>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaRukuRise.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaRukuRise.english}
                                    </div>
                                </li>
                            </ul>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li id="dua-itidal" style={{ marginBottom: '8px' }}>
                                    <strong>Recite:</strong>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaItidal.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaItidal.english}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <CustomListItem
                    number={5}
                    text={
                        <div>
                            <strong>Say Allahu Akbar (اللّٰهُ أَكْبَر) and go to Prostration (Sujud):</strong>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li id="dua-sujud" style={{ marginBottom: '8px' }}>
                                    <strong>Recite:</strong>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaSujud.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaSujud.english}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <CustomListItem
                    number={6}
                    text={
                        <div>
                            <strong>Sit back on left leg and right leg finger touches the floor and recite:</strong>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li id="dua-sitting" style={{ marginBottom: '8px' }}>
                                    <strong>Recite:</strong>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaBetweenSujud.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaBetweenSujud.english}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <CustomListItem
                    number={7}
                    text={
                        <div>
                            <strong>Do the Sujud (Prostration) again and recite the same dua during the sujud</strong>
                        </div>
                    }
                />
                <CustomListItem
                    number={8}
                    text={
                        <div>
                            <strong>Stand up again and continue this until the end of the prayer. At every even rakat , after the second sujud sit for thashahhud and recite:</strong>
                            <ul style={{ marginTop: '10px', listStyleType: 'disc', paddingLeft: '20px', color: '#546e7a' }}>
                                <li id="dua-thashahhud" style={{ marginBottom: '8px' }}>
                                    <strong>Recite:</strong>
                                    <div style={{ fontSize: '1.8rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                        {duas.duaThashahhud.arabic}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '10px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                        {duas.duaThashahhud.english}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <CustomListItem
                    number={9}
                    text={
                        <div>
                            <strong>Once the prayer is finished, say salam. assalamualaikum</strong>
                        </div>
                    }
                />
            </List>
        </div>
    );
};

export default PrayerStructure;
