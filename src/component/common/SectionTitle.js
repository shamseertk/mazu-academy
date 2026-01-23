import { Typography } from '@mui/material';

const SectionTitle = ({ children }) => {
    return (
        <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: 'var(--section-title-color)', fontWeight: 'bold', mt: 2 }}
        >
            {children}
        </Typography>
    );
};

export default SectionTitle;
