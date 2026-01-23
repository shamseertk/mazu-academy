import { Typography } from '@mui/material';

const TopicTitle = ({ children }) => {
    return (
        <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: 'var(--section-title-color)', fontWeight: 'bold' }}
        >
            {children}
        </Typography>
    );
};

export default TopicTitle;
