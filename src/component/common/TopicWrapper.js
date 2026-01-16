import React from 'react';
import { Box, Paper } from '@mui/material';

const TopicWrapper = ({ children }) => {
    return (
        <Box sx={{ mt: 4, mb: 4, width: '100%', px: 2 }}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)',
                    border: '1px solid #b2ebf2'
                }}
            >
                {children}
            </Paper>
        </Box>
    );
};

export default TopicWrapper;
