import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SEO from '../../component/common/SEO';
import TopicWrapper from '../../component/common/TopicWrapper';
import TopicTitle from '../../component/common/TopicTitle';
import TopicDescription from '../../component/common/TopicDescription';
import AblutionRules from '../../component/fiqh/AblutionRules';
import AblutionSunnah from '../../component/fiqh/AblutionSunnah';

function Ablution() {
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
                title="Ablution (Wudu) - Islamic Studies"
                description="Learn the steps of Wudu (Ablution), including mandatory (Fard) acts, Sunnah practices, and supplications."
                keywords="Wudu, Ablution, Fard, Sunnah, Dua, Purification, Islam"
            />
            <TopicTitle>Ablution (Wudu)</TopicTitle>
            <TopicDescription>
                Wudu is the act of washing the body in a specific way to purify oneself before prayer.
                The prayer is one of the pillars of Islam and is a necessary condition for prayer.
            </TopicDescription>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Box onClick={() => scrollToSection('fard')} sx={{ cursor: 'pointer', bgcolor: '#e0f7fa', color: '#006064', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid #b2ebf2' }}>
                    Wudu Rules
                </Box>
                <Box onClick={() => scrollToSection('sunnah')} sx={{ cursor: 'pointer', bgcolor: '#e0f7fa', color: '#006064', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid #b2ebf2' }}>
                    Sunnah Steps
                </Box>
                <Box onClick={() => scrollToSection('dua')} sx={{ cursor: 'pointer', bgcolor: '#e0f7fa', color: '#006064', px: 2, py: 1, borderRadius: 2, fontWeight: 'bold', border: '1px solid #b2ebf2' }}>
                    Wudu Du'a
                </Box>
            </Box>

            <AblutionRules />
            <AblutionSunnah />
        </TopicWrapper>
    );
}

export default Ablution;