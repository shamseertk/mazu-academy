import React from 'react';
import { ListItem, ListItemIcon, Avatar, ListItemText, Typography } from '@mui/material';

const CustomListItem = ({ number, text }) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemIcon sx={{ mt: 0.5 }}>
                <Avatar sx={{ bgcolor: '#00838f', width: 32, height: 32, fontSize: '1rem' }}>
                    {number}
                </Avatar>
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography sx={{ fontSize: '1.1rem', color: '#37474f' }}>
                        {text}
                    </Typography>
                }
            />
        </ListItem>
    );
};

export default CustomListItem;
