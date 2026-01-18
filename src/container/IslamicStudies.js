import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import TopicWrapper from '../component/common/TopicWrapper';
import TopicTitle from '../component/common/TopicTitle';
import TopicDescription from '../component/common/TopicDescription';
import { menus } from '../utils/menus';


const IslamicStudies = () => {
    // Find the Islamic Studies menu item
    const islamicStudiesMenu = menus.find(menu => menu.label === 'Islamic Studies');
    const sections = islamicStudiesMenu?.megaMenu || [];

    return (
        <TopicWrapper>
            <TopicTitle>Islamic Studies</TopicTitle>
            <TopicDescription>
                Explore a comprehensive curriculum covering various aspects of Islamic knowledge, including Fiqh (Jurisprudence), History, and more.
            </TopicDescription>

            <Box sx={{ mt: 4 }}>
                {sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 6 }}>
                        <Typography variant="h5" sx={{
                            borderBottom: '2px solid #b2ebf2',
                            paddingBottom: 1,
                            marginBottom: 3,
                            color: '#006064',
                            fontWeight: 'bold',
                            display: 'inline-block'
                        }}>
                            {section.heading}
                        </Typography>

                        <Grid container spacing={3}>
                            {section.items.map((item, idx) => (
                                <Grid item xs={12} sm={6} md={4} key={idx}>
                                    <Card sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 20px rgba(0,96,100,0.15)'
                                        },
                                        border: '1px solid #e0f7fa'
                                    }}>
                                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="h6" component="div" sx={{ color: '#006064', fontWeight: 'bold', mb: 1.5 }}>
                                                {item.label}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                                                {getTopicDescription(item.label)}
                                            </Typography>
                                            <Button
                                                component={Link}
                                                to={item.link}
                                                variant="contained"
                                                disableElevation
                                                sx={{
                                                    alignSelf: 'flex-start',
                                                    mt: 'auto',
                                                    bgcolor: '#e0f7fa',
                                                    color: '#006064',
                                                    '&:hover': {
                                                        bgcolor: '#b2ebf2'
                                                    }
                                                }}
                                            >
                                                Explore
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Box>
        </TopicWrapper>
    );
};

// Helper to provide descriptions since they aren't in the menu object yet
const getTopicDescription = (label) => {
    if (label.includes('Ablution')) {
        return "Learn the steps of Wudu (Ablution), including mandatory (Fard) acts, Sunnah practices, and supplications.";
    }
    if (label.includes('Salah') || label.includes('Prayer')) {
        return "Understand the daily prayers, Adaan, Iqamah, Fard components, and the detailed structure of Salah.";
    }
    return "Click explore to learn more about this topic.";
};

export default IslamicStudies;
