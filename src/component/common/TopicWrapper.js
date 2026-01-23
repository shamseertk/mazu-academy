import { Box, Paper } from '@mui/material';

const TopicWrapper = ({ children }) => {
    return (
        <Box sx={{ mt: 4, mb: 4, width: '100%', px: 2 }}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'var(--topic-wrapper-bg)',
                    border: '1px solid var(--topic-wrapper-border)'
                }}
            >
                {children}
            </Paper>
        </Box>
    );
};

export default TopicWrapper;
