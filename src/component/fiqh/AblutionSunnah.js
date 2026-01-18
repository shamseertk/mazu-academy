import { List, Divider } from '@mui/material';
import CustomListItem from '../common/CustomListItem';
import SectionTitle from '../common/SectionTitle';
import { duas } from '../../data/dua';

const AblutionSunnah = () => {
    return (
        <div id="sunnah">
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
                    text="Brushing the teeth before rinsing the mouth"
                />
                <CustomListItem
                    number={4}
                    text="Rinsing the mouth three times and sniffing water into the nose and blowing it out."
                />
                <CustomListItem
                    number={5}
                    text="Wipe the entire head and both ears. Wipe the back of the ears with the thumbs and the inside with the index fingers."
                />
                <CustomListItem
                    number={6}
                    text="Comb the wet beard with fingers."
                />
                <CustomListItem
                    number={7}
                    text="Rub the limbs while washing."
                />
                <CustomListItem
                    number={8}
                    text="Wash the forearms and legs beyond the elbows and ankles."
                />
                <CustomListItem
                    number={9}
                    text="Wash each limb three times."
                />
                <CustomListItem
                    number={10}
                    text="Start with the right side before the left."
                />
                <CustomListItem
                    number={11}
                    text={
                        <div id="dua">
                            Recite the Shahada and Du'a after Wudu:
                            <div style={{ fontSize: '2rem', color: '#006064', marginTop: '15px', textAlign: 'right', fontFamily: 'serif', lineHeight: '2.2', whiteSpace: 'pre-line' }}>
                                {duas.afterWudu.arabic}
                            </div>
                            <div style={{ fontSize: '1rem', color: '#546e7a', marginTop: '15px', fontStyle: 'italic', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                {duas.afterWudu.english}
                            </div>
                        </div>
                    }
                />
            </List>
        </div>
    );
};

export default AblutionSunnah;
