import { Typography } from '@mui/material';

const TopicDescription = ({ children }) => {
    return (
        <Typography
            variant="body1"
            sx={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--topic-description-color)' }}
        >
            {children}
        </Typography>
    );
};

export default TopicDescription;
