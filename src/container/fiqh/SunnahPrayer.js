import { List, ListItem, ListItemText, Typography, Divider, Box } from '@mui/material';
import SEO from '../../component/common/SEO';
import TopicWrapper from '../../component/common/TopicWrapper';
import TopicTitle from '../../component/common/TopicTitle';
import TopicDescription from '../../component/common/TopicDescription';
import SectionTitle from '../../component/common/SectionTitle';

function SunnahPrayer() {
    return (
        <TopicWrapper>
            <SEO
                title="Optional Prayers (Salathul Sunnah) - Islamic Studies"
                description="Learn about the optional prayers (Sunnah) recommended by Prophet Muhammad (PBUH) which bring us closer to Allah."
                keywords="Sunnah Prayer, Salathul Sunnah, Optional Prayers, Islam, Fiqh"
            />
            <TopicTitle>Optional Prayers (Salathul Sunnah)</TopicTitle>
            <TopicDescription>
                <p>In addition to the five obligatory prayers, the Prophet (PBUH) has taught us several Sunnah (voluntary) prayers as well. Sunnah deeds are those for which there is no sin in omitting them, but there is great merit and reward in performing them.</p>
                <p>Our obligatory prayers may have various deficiencies or shortcomings. Sunnah prayers serve as a great means to compensate for and rectify those flaws. By increasing our voluntary prayers, we draw ourselves closer and closer to Allah.</p>
            </TopicDescription>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <SectionTitle>Ravathib Prayers (الرَّوَاتِبُ)</SectionTitle>
                <Typography variant="body1" sx={{ mt: 2, mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Ravathib Prayers (الرَّوَاتِبُ) are the most important of all Sunnah prayers. There are ten Ravathib prayers:
                </Typography>
                <p>1. Two raka'ths before and after Luhar prayer (ظُهْر)</p>
                <p>2. Two raka'ths after Magrib prayer (مَغْرِب) and after Isha prayer (عِشَاء)</p>
                <p>3. Two raka'ths before Subh prayer (صُبْح)</p>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <SectionTitle>Witr (الْوِتْرُ)</SectionTitle>
                <Typography variant="body1" sx={{ mt: 2, mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Witr is a highly emphasized Sunnah prayer. The time for Witr begins after Isha prayer and extends until dawn (Subh). It is typically performed after the post-Isha Sunnah prayers.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    It can be performed as 1, 3, 5, 7, 9, or 11 Rak'ahs. The last Rak'ah must be single (odd).
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, color: '#006064' }}>Methods for 3 Rak'ahs:</Typography>
                <List dense>
                    <ListItem><ListItemText primary="• Option 1: 2 Rak'ahs + Salam, then 1 separate Rak'ah (Preferred)." /></ListItem>
                    <ListItem><ListItemText primary="• Option 2: 3 continuous Rak'ahs without sitting for the first Tashahhud." /></ListItem>
                </List>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, color: '#006064' }}>Recommended Recitation (for 3 Rak'ahs):</Typography>
                <List dense>
                    <ListItem><ListItemText primary="• 1st Rak'ah: Surah Al-A'la (سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى)" /></ListItem>
                    <ListItem><ListItemText primary="• 2nd Rak'ah: Surah Al-Kafirun (قُلْ يَا أَيُّهَا الْكَافِرُونَ)" /></ListItem>
                    <ListItem><ListItemText primary="• 3rd Rak'ah: Surah Al-Ikhlas, Al-Falaq, An-Nas (الإخلاص، الفلق، الناس)" /></ListItem>
                </List>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, color: '#006064' }}>Recommended Dhikr after Witr:</Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#546e7a', mb: 1 }}>
                    "Subhanal Malikil Quddus" (3 times) <br /> (سُبْحَانَ الْمَلِكِ الْقُدُّوس)
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#546e7a' }}>
                    "Rabbul Malaikati war-Rooh" <br /> (رَبُّ الْمَلَائِكَةِ وَالرُّوح)
                </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <SectionTitle>Tarawih (التَّرَاوِيحُ)</SectionTitle>
                <Typography variant="body1" sx={{ mt: 2, mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    This is a special Sunnah prayer performed during the nights of Ramadan. The time for Tarawih is between Isha prayer and Fajr.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    It is highly recommended to perform this prayer in congregation (Jama'ah) during Ramadan, although it can be prayed individually. It usually consists of 8 or 20 Rak'ahs, performed in sets of two.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Tarawih is concluded with the Witr prayer.
                </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <SectionTitle>Tahiyyatul Masjid (Greeting the Mosque)</SectionTitle>
                <Typography variant="body1" sx={{ mt: 2, mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    It is a Sunnah to pray two Rak'ahs upon entering the mosque before sitting down. This is known as "Tahiyyatul Masjid".
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    The Prophet (PBUH) said: "When one of you enters the mosque, let him not sit until he prays two Rak'ahs."
                </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <SectionTitle>Duha Prayer (صَلَاةُ الضُّحَى)</SectionTitle>
                <Typography variant="body1" sx={{ mt: 2, mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Duha is a voluntary prayer performed in the forenoon. Its time starts after the sun has risen to the height of a spear (about 20 minutes after sunrise) and ends just before the sun reaches its zenith (about 15-20 minutes before Zhuhr).
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    The minimum number of Rak'ahs for Duha is two, and the maximum is eight (some say twelve).
                </Typography>
            </Box>
        </TopicWrapper >
    );
}

export default SunnahPrayer;
