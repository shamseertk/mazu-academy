import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemText, Box, Link as MuiLink } from '@mui/material';
import { School, Translate, Abc, Apps, MenuBook } from '@mui/icons-material';
import logo from '../images/mail-emblem.jpg';

function Syllabus() {
  return (
    <Box sx={{
      maxWidth: 800,
      margin: '20px auto',
      padding: 2,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        opacity: 0.15,
        zIndex: -1
      }
    }}>
      <Card elevation={5}>
        <CardContent>
          <Typography variant="h4" component="div" sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            color: 'primary.main',
            fontWeight: 'bold'
          }}>
            <School sx={{ mr: 1 }} />
            Mazu Academy Syllabus
          </Typography>
          <Divider />

          {/* Chapter 1: Letters and its practices - Level One with Link */}
          {/* MuiLink renders as react-router-dom Link, using 'to' prop for routing */}
          <MuiLink to="/level1" component={Link} underline="none" sx={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mt: 3,
                mb: 1,
                color: 'secondary.dark',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <Abc sx={{ mr: 1 }} />
              Chapter 1: Letters and its practices - Level One
            </Typography>
          </MuiLink>

          <List dense>
            <ListItem>
              <ListItemText primary="Practice Alphabets: Interactive self-testing for letter recognition." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Writing Alphabets: Learn the stroke order and shape." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Writing Practice: Use the drawing tool to practice writing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vowels: Learn short vowels (Harakat) and long vowels." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vowel Practice: Test knowledge of vowel sounds." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fun: Engaging games and activities." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Test: Comprehensive test covering all letters and vowels." />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Chapter 2: Words and Its Excercises in Chapter 2 with Link */}
          <MuiLink to="/level2" component={Link} underline="none" sx={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mt: 3,
                mb: 1,
                color: 'secondary.dark',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <Translate sx={{ mr: 1 }} />
              Chapter 2: Words and Its Excercises in Chapter 2 (Level Two)
            </Typography>
          </MuiLink>

          <List dense>
            <ListItem>
              <ListItemText primary="Words - Beginners: Learn basic words organized by letter." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Word Exercise: Matching images to words (Drag and Drop)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="More Words & Vocabulary: Expanded vocabulary sets." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Exercise 2: Multiple choice quizzes for word recall." />
            </ListItem>
            <ListItem sx={{ mt: 1 }}>
              <ListItemText
                primary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  <Apps sx={{ mr: 0.5, fontSize: 'medium' }} />
                  Additional Level 2 Topics:
                </Typography>}
                secondary="Numbers, Months, Colors, and Family relations."
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Islamic Studies Section */}
          <MuiLink to="/islamic-studies" component={Link} underline="none" sx={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mt: 3,
                mb: 1,
                color: 'secondary.dark',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                '&:hover': { color: 'primary.main' }
              }}
            >
              <MenuBook sx={{ mr: 1 }} />
              Islamic Studies (Fiqh & Pillars)
            </Typography>
          </MuiLink>

          <List dense>
            <ListItem>
              <ListItemText
                primary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#006064' }}>Prayer & Purification</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary" display="block">
                      <strong>Ablution (Wudu):</strong> Steps, Fard, Sunnah, and Duas for purification.
                    </Typography>
                    <Typography component="span" variant="body2" color="text.primary" display="block">
                      <strong>Salah (Prayer):</strong> Complete guide to the 5 daily prayers, including Adaan, Fard components, Prayer Structure, and special prayers (Funeral, Sunnah).
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#006064' }}>Other Pillars & Duas</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary" display="block">
                      <strong>Fasting (Sawm):</strong> Rules and significance of Ramadan.
                    </Typography>
                    <Typography component="span" variant="body2" color="text.primary" display="block">
                      <strong>Hajj & Zakath:</strong> Understanding the pilgrimage and obligatory charity.
                    </Typography>
                    <Typography component="span" variant="body2" color="text.primary" display="block">
                      <strong>Duas:</strong> Important daily Duas and supplications (Hisnul Muslim).
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>

        </CardContent>
      </Card>
    </Box>
  );
}

export default Syllabus;