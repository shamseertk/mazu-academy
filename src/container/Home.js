import React from 'react';
// Import Link from react-router-dom for proper navigation (crucial for HashRouter)
import { Link } from 'react-router-dom'; 
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemText, Box, Link as MuiLink } from '@mui/material';
import { School, Translate, Abc, Apps } from '@mui/icons-material';

function Syllabus() {
  return (
    <Box sx={{ maxWidth: 800, margin: '20px auto', padding: 2 }}>
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
            Arabic Learning Syllabus
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

        </CardContent>
      </Card>
    </Box>
  );
}

export default Syllabus;