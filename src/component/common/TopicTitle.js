import { Typography } from '@mui/material';

const TopicTitle = ({ children }) => {
    return (
        <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: '#006064', fontWeight: 'bold' }}
        >
            {children}
        </Typography>
    );
};

export default TopicTitle;
