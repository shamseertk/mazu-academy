import React from 'react';
import TopicWrapper from '../../component/common/TopicWrapper';
import TopicTitle from '../../component/common/TopicTitle';
import TopicDescription from '../../component/common/TopicDescription';
import AblutionRules from '../../component/fiqh/AblutionRules';
import AblutionSunnah from '../../component/fiqh/AblutionSunnah';

function Ablution() {
    return (
        <TopicWrapper>
            <TopicTitle>Ablution (Wudu)</TopicTitle>
            <TopicDescription>
                Wudu is the act of washing the body in a specific way to purify oneself before prayer.
                The prayer is one of the pillars of Islam and is a necessary condition for prayer.
            </TopicDescription>
            <AblutionRules />
            <AblutionSunnah />
        </TopicWrapper>
    );
}

export default Ablution;