import { Typography } from '@mui/material';

const SectionTitle = ({ children }) => {
    return (
        <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: '#006064', fontWeight: 'bold', mt: 2 }}
        >
            {children}
        </Typography>
    );
};

export default SectionTitle;
