import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SEO from '../../component/common/SEO';
import TopicWrapper from '../../component/common/TopicWrapper';
import TopicTitle from '../../component/common/TopicTitle';
import TopicDescription from '../../component/common/TopicDescription';
import AadanIqamah from '../../component/fiqh/AadanIqamah';
import PrayerRules from '../../component/fiqh/PrayerRules';
import PrayerStructure from '../../component/fiqh/PrayerStructure';
import AfterSalah from '../../component/fiqh/AfterSalah';
import PrayerRelated from '../../component/fiqh/PrayerRelated';

function Prayer() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');
        if (section) {
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <TopicWrapper>
            <SEO
                title="Salah (Prayer) - Islamic Studies"
                description="Salah is the daily ritual prayer enjoined upon all Muslims as one of the five Pillars of Islam. Learn about Fajr, Dhuhr, Asr, Maghrib, and Isha."
                keywords="Salah, Prayer, Fajr, Dhuhr, Asr, Maghrib, Isha, Islam, Pillars of Islam"
            />
            <TopicTitle>Salah (Prayer)</TopicTitle>
            <TopicDescription>
                Salah is the daily ritual prayer enjoined upon all Muslims as one of the five Pillars of Islam.
                There are five obligatory prayers every day:
                <br /><br />
                <strong>1. Fajr:</strong> Performed before sunrise.<br />
                <strong>2. Dhuhr (Luhar):</strong> Performed at noon, just after the sun passes the zenith.<br />
                <strong>3. Asr (Asar):</strong> Performed in the afternoon, usually between 3-5 PM, depending on location and season.<br />
                <strong>4. Maghrib:</strong> Performed just after sunset.<br />
                <strong>5. Isha:</strong> Performed late at night.
                <br /><br />
                The timings depend on the Sun's location and change every season and with geographical location.
            </TopicDescription>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Box onClick={() => scrollToSection('adaan')} sx={{ cursor: 'pointer', bgcolor: 'var(--highlight-box-bg)', color: 'var(--highlight-box-text)', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid var(--highlight-box-border)' }}>
                    Adaan & Iqamah
                </Box>
                <Box onClick={() => scrollToSection('fard')} sx={{ cursor: 'pointer', bgcolor: 'var(--highlight-box-bg)', color: 'var(--highlight-box-text)', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid var(--highlight-box-border)' }}>
                    Fard of Salah
                </Box>
                <Box onClick={() => scrollToSection('structure')} sx={{ cursor: 'pointer', bgcolor: 'var(--highlight-box-bg)', color: 'var(--highlight-box-text)', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid var(--highlight-box-border)' }}>
                    Prayer Structure
                </Box>
                <Box onClick={() => scrollToSection('after-salah')} sx={{ cursor: 'pointer', bgcolor: 'var(--highlight-box-bg)', color: 'var(--highlight-box-text)', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid var(--highlight-box-border)' }}>
                    After Salah
                </Box>
                <Box onClick={() => scrollToSection('prayer-related')} sx={{ cursor: 'pointer', bgcolor: 'var(--highlight-box-bg)', color: 'var(--highlight-box-text)', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid var(--highlight-box-border)' }}>
                    Prayer Related
                </Box>
            </Box>

            <AadanIqamah />
            <PrayerRules />
            <PrayerStructure />
            <div id="after-salah">
                <AfterSalah />
            </div>
            <div id="prayer-related">
                <PrayerRelated />
            </div>
        </TopicWrapper>
    );
}

export default Prayer;
