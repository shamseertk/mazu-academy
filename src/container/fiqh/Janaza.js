import React from 'react';
import JanazaPrayer from '../../component/fiqh/JanazaPrayer';
import TopicWrapper from '../../component/common/TopicWrapper';
import SEO from '../../component/common/SEO';
import TopicTitle from '../../component/common/TopicTitle';
import TopicDescription from '../../component/common/TopicDescription';

const Janaza = () => {
    return (
        <TopicWrapper>
            <SEO
                title="Funeral Prayer (Janaza) - Islamic Studies"
                description="Learn how to perform the Funeral Prayer (Salat al-Janaza) in Islam. Step-by-step guide with Duas and Takbeers."
                keywords="Janaza, Funeral Prayer, Islam, Salah, Dua, Mayyith Namaskaram"
            />
            <TopicTitle>Funeral Prayer (Janaza Prayer)</TopicTitle>
            <TopicDescription>
                The Funeral Prayer (Salat al-Janaza) is a collective obligation (Fard Kifaya) upon the Muslim community. It is a prayer performed for the deceased Muslim to seek pardon and mercy for them.
            </TopicDescription>
            <JanazaPrayer />
        </TopicWrapper>
    );
};

export default Janaza;
