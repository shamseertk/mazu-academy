import React, { useState } from 'react';
import { 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton
} from '@mui/material';
import { Info } from '@mui/icons-material';
import SubNav from '../component/common/SubNav';
import PageTitle from '../component/common/PageTitle';

// Verb database
const verbsData = {
  faala: {
    arabic: 'فَعَلَ',
    translation: 'To do / to make (Sound Verb - فِعْل صَحِيح)',
    root: 'ف - ع - ل',
    explanation: {
      patternName: 'Sound Verb (فِعْل صَحِيح سَالِم)',
      details: 'A sound verb consists entirely of strong root consonants (no weak letters, no hamza, no shaddah). The root remains completely stable throughout all conjugations in both past and present tenses.'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'فَعَلَ', present: 'يَفْعَلُ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'فَعَلَا', present: 'يَفْعَلَانِ', prefix: 'يَـ', suffixPast: 'ـَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'فَعَلُوا', present: 'يَفْعَلُونَ', prefix: 'يَـ', suffixPast: 'ـُوا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'فَعَلَتْ', present: 'تَفْعَلُ', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'فَعَلَتَا', present: 'تَفْعَلَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'فَعَلْنَ', present: 'يَفْعَلْنَ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'فَعَلْتَ', present: 'تَفْعَلُ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'فَعَلْتُمَا', present: 'تَفْعَلَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'فَعَلْتُمْ', present: 'تَفْعَلُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'فَعَلْتِ', present: 'تَفْعَلِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'فَعَلْتُمَا', present: 'تَفْعَلَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'فَعَلْتُنَّ', present: 'تَفْعَلْنَ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'فَعَلْتُ', present: 'أَفْعَلُ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'فَعَلْنَا', present: 'نَفْعَلُ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  kataba: {
    arabic: 'كَتَبَ',
    translation: 'To write (Sound Verb - فِعْل صَحِيح)',
    root: 'ك - ت - ب',
    explanation: {
      patternName: 'Sound Verb (فِعْل صَحِيح سَالِم)',
      details: 'A sound verb consists entirely of strong root consonants (no weak letters, no hamza, no shaddah). The root remains completely stable throughout all conjugations in both past and present tenses.'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'كَتَبَ', present: 'يَكْتُبُ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'كَتَبَا', present: 'يَكْتُبَانِ', prefix: 'يَـ', suffixPast: 'ـَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'كَتَبُوا', present: 'يَكْتُبُونَ', prefix: 'يَـ', suffixPast: 'ـُوا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'كَتَبَتْ', present: 'تَكْتُبُ', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'كَتَبَتَا', present: 'تَكْتُبَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'كَتَبْنَ', present: 'يَكْتُبْنَ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'كَتَبْتَ', present: 'تَكْتُبُ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'كَتَبْتُمَا', present: 'تَكْتُبَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'كَتَبْتُمْ', present: 'تَكْتُبُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'كَتَبْتِ', present: 'تَكْتُبِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'كَتَبْتُمَا', present: 'تَكْتُبَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'كَتَبْتُنَّ', present: 'تَكْتُبْنَ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'كَتَبْتُ', present: 'أَكْتُبُ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'كَتَبْنَا', present: 'نَكْتُبُ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  nasara: {
    arabic: 'نَصَرَ',
    translation: 'To help / to support (Sound Verb - فِعْل صَحِيح)',
    root: 'ن - ص - ر',
    explanation: {
      patternName: 'Sound Verb (فِعْل صَحِيح سَالِم)',
      details: 'A sound verb consists entirely of strong root consonants (no weak letters, no hamza, no shaddah). The root remains completely stable throughout all conjugations in both past and present tenses.'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'نَصَرَ', present: 'يَنْصُرُ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'نَصَرَا', present: 'يَنْصُرَانِ', prefix: 'يَـ', suffixPast: 'ـَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'نَصَرُوا', present: 'يَنْصُرُونَ', prefix: 'يَـ', suffixPast: 'ـُوا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'نَصَرَتْ', present: 'تَنْصُرُ', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'نَصَرَتَا', present: 'تَنْصُرَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'نَصَرْنَ', present: 'يَنْصُرْنَ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'نَصَرْتَ', present: 'تَنْصُرُ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'نَصَرْتُمَا', present: 'تَنْصُرَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'نَصَرْتُمْ', present: 'تَنْصُرُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'نَصَرْتِ', present: 'تَنْصُرِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'نَصَرْتُمَا', present: 'تَنْصُرَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'نَصَرْتُنَّ', present: 'تَنْصُرْنَ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'نَصَرْتُ', present: 'أَنْصُرُ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'نَصَرْنَا', present: 'نَنْصُرُ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  dahaba: {
    arabic: 'ذَهَبَ',
    translation: 'To go (Sound Verb - فِعْل صَحِيح)',
    root: 'ذ - هـ - ب',
    explanation: {
      patternName: 'Sound Verb (فِعْل صَحِيح سَالِم)',
      details: 'A sound verb consists entirely of strong root consonants (no weak letters, no hamza, no shaddah). The root remains completely stable throughout all conjugations in both past and present tenses.'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'ذَهَبَ', present: 'يَذْهَبُ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'ذَهَبَا', present: 'يَذْهَبَانِ', prefix: 'يَـ', suffixPast: 'ـَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'ذَهَبُوا', present: 'يَذْهَبُونَ', prefix: 'يَـ', suffixPast: 'ـُوا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'ذَهَبَتْ', present: 'تَذْهَبُ', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'ذَهَبَتَا', present: 'تَذْهَبَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'ذَهَبْنَ', present: 'يَذْهَبْنَ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'ذَهَبْتَ', present: 'تَذْهَبُ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'ذَهَبْتُمَا', present: 'تَذْهَبَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'ذَهَبْتُمْ', present: 'تَذْهَبُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'ذَهَبْتِ', present: 'تَذْهَبِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'ذَهَبْتُمَا', present: 'تَذْهَبَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'ذَهَبْتُنَّ', present: 'تَذْهَبْنَ', prefix: 'تَـ', suffixPast: 'ـtُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'ذَهَبْتُ', present: 'أَذْهَبُ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'ذَهَبْنَا', present: 'نَذْهَبُ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  khaala: {
    arabic: 'خَالَ',
    translation: 'To think / to imagine (Hollow Verb - فِعْل أَجْوَف)',
    root: 'خ - ي - ل',
    explanation: {
      patternName: 'Hollow Verb (فِعْل أَجْوَف)',
      details: 'A hollow verb has a weak middle root letter (و or ي), which manifests as Alif (ا) in the past tense. The weak middle letter drops when conjugated with consonant-starting suffixes in past tense (e.g. خِلْتُ, قُلْتُ) and in feminine plurals in present tense (e.g. يَخَلْنَ, يَقُلْنَّ).'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'خَالَ', present: 'يَخَالُ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'خَالَا', present: 'يَخَالَانِ', prefix: 'يَـ', suffixPast: 'ـَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'خَالُوا', present: 'يَخَالُونَ', prefix: 'يَـ', suffixPast: 'ـُوا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'خَالَتْ', present: 'تَخَالُ', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'خَالَتَا', present: 'تَخَالَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'خِلْنَ', present: 'يَخَلْنَ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'خِلْتَ', present: 'تَخَالُ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'خِلْتُمَا', present: 'تَخَالَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'خِلْتُمْ', present: 'تَخَالُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'خِلْتِ', present: 'تَخَالِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'خِلْتُمَا', present: 'تَخَالَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'خِلْتُنَّ', present: 'تَخَلْنَ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'خِلْتُ', present: 'أَخَالُ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'خِلْنَا', present: 'نَخَالُ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  qaala: {
    arabic: 'قَالَ',
    translation: 'To say (Hollow Verb - فِعْل أَجْوَف)',
    root: 'ق - و - ل',
    explanation: {
      patternName: 'Hollow Verb (فِعْل أَجْوَف)',
      details: 'A hollow verb has a weak middle root letter (و or ي), which manifests as Alif (ا) in the past tense. The weak middle letter drops when conjugated with consonant-starting suffixes in past tense (e.g. خِلْتُ, قُلْتُ) and in feminine plurals in present tense (e.g. يَخَلْنَ, يَقُلْنَّ).'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'قَالَ', present: 'يَقُولُ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'قَالَا', present: 'يَقُولَانِ', prefix: 'يَـ', suffixPast: 'ـَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'قَالُوا', present: 'يَقُولُونَ', prefix: 'يَـ', suffixPast: 'ـُوا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'قَالَتْ', present: 'تَقُولُ', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'قَالَتَا', present: 'تَقُولَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'قُلْنَ', present: 'يَقُلْنَّ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'قُلْتَ', present: 'تَقُولُ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'قُلْتُمَا', present: 'تَقُولَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'قُلْتُمْ', present: 'تَقُولُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'قُلْتِ', present: 'تَقُولِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'قُلْتُمَا', present: 'تَقُولَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'قُلْتُنَّ', present: 'تَقُلْنَّ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'قُلْتُ', present: 'أَقُولُ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'قُلْنَا', present: 'نَقُولُ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  daaa: {
    arabic: 'دَعَا',
    translation: 'To call / to invite (Defective Verb - فِعْل نَاقِص)',
    root: 'د - ع - و',
    explanation: {
      patternName: 'Defective Verb (فِعْل نَاقِص)',
      details: 'A defective verb has a weak final root letter (و or ي), appearing as Alif (ا) in the past tense. The weak letter converts to a vowel (e.g. دَعَوَا) or drops completely when plural masculine suffixes are added (e.g. دَعَوْا, يَدْعُونَ).'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'دَعَا', present: 'يَدْعُو', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'دَعَوَا', present: 'يَدْعُوَانِ', prefix: 'يَـ', suffixPast: 'ـوَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'دَعَوْا', present: 'يَدْعُونَ', prefix: 'يَـ', suffixPast: 'ـوْا', suffixPresent: 'ـُونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'دَعَتْ', present: 'تَدْعُو', prefix: 'تَـ', suffixPast: 'ـَتْ', suffixPresent: 'ـُ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'دَعَتَا', present: 'تَدْعُوَانِ', prefix: 'تَـ', suffixPast: 'ـَتَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'دَعَوْنَ', present: 'يَدْعُونَ', prefix: 'يَـ', suffixPast: 'ـوْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'دَعَوْتَ', present: 'تَدْعُو', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'دَعَوْتُمَا', present: 'تَدْعُوَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'دَعَوْتُمْ', present: 'تَدْعُونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'دَعَوْتِ', present: 'تَدْعِينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'دَعَوْتُمَا', present: 'تَدْعُوَانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'دَعَوْتُنَّ', present: 'تَدْعُونَ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'دَعَوْتُ', present: 'أَدْعُو', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'دَعَوْنَا', present: 'نَدْعُو', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُ' },
    ]
  },
  madda: {
    arabic: 'مَدَّ',
    translation: 'To stretch / to extend (Doubled Verb - فِعْل مُضَاعَف)',
    root: 'م - د - د',
    explanation: {
      patternName: 'Doubled Verb (فِعْل مُضَاعَف)',
      details: 'A doubled verb has identical second and third root letters, merged with a Shaddah (ّ). The letters remain merged in vowel-starting conjugations (e.g. مَدَّ, يَمُدُّ) but split when conjugated with consonant-starting suffixes (e.g. مَدَدْتُ, يَمْدُدْنَ).'
    },
    conjugations: [
      { pronoun: 'هُوَ', type: '3rd P. M. Sing. (He)', past: 'مَدَّ', present: 'يَمُدُّ', prefix: 'يَـ', suffixPast: '—', suffixPresent: 'ـُّ' },
      { pronoun: 'هُمَا', type: '3rd P. M. Dual (They two)', past: 'مَدَّا', present: 'يَمُدَّانِ', prefix: 'يَـ', suffixPast: 'ـَّا', suffixPresent: 'ـَّانِ' },
      { pronoun: 'هُمْ', type: '3rd P. M. Plur. (They)', past: 'مَدُّوا', present: 'يَمُدُّونَ', prefix: 'يَـ', suffixPast: 'ـُّوا', suffixPresent: 'ـُّونَ' },
      { pronoun: 'هِيَ', type: '3rd P. F. Sing. (She)', past: 'مَدَّتْ', present: 'تَمُدُّ', prefix: 'تَـ', suffixPast: 'ـَّتْ', suffixPresent: 'ـُّ' },
      { pronoun: 'هُمَا', type: '3rd P. F. Dual (They two)', past: 'مَدَّتَا', present: 'تَمُدَّانِ', prefix: 'تَـ', suffixPast: 'ـَّتَا', suffixPresent: 'ـَّانِ' },
      { pronoun: 'هُنَّ', type: '3rd P. F. Plur. (They)', past: 'مَدَدْنَ', present: 'يَمْدُدْنَ', prefix: 'يَـ', suffixPast: 'ـْنَ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنْتَ', type: '2nd P. M. Sing. (You)', past: 'مَدَدْتَ', present: 'تَمُدُّ', prefix: 'تَـ', suffixPast: 'ـتَ', suffixPresent: 'ـُّ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. M. Dual (You two)', past: 'مَدَدْتُمَا', present: 'تَمُدَّانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَّانِ' },
      { pronoun: 'أَنْتُمْ', type: '2nd P. M. Plur. (You all)', past: 'مَدَدْتُمْ', present: 'تَمُدُّونَ', prefix: 'تَـ', suffixPast: 'ـتُمْ', suffixPresent: 'ـُّونَ' },
      { pronoun: 'أَنْتِ', type: '2nd P. F. Sing. (You)', past: 'مَدَدْتِ', present: 'تَمُدِّينَ', prefix: 'تَـ', suffixPast: 'ـتِ', suffixPresent: 'ـِّينَ' },
      { pronoun: 'أَنْتُمَا', type: '2nd P. F. Dual (You two)', past: 'مَدَدْتُمَا', present: 'تَمُدَّانِ', prefix: 'تَـ', suffixPast: 'ـتُمَا', suffixPresent: 'ـَّانِ' },
      { pronoun: 'أَنْتُنَّ', type: '2nd P. F. Plur. (You all)', past: 'مَدَدْتُنَّ', present: 'تَمْدُدْنَ', prefix: 'تَـ', suffixPast: 'ـتُنَّ', suffixPresent: 'ـْنَ' },
      { pronoun: 'أَنَا', type: '1st P. Sing. (I)', past: 'مَدَدْتُ', present: 'أَمُدُّ', prefix: 'أَـ', suffixPast: 'ـتُ', suffixPresent: 'ـُّ' },
      { pronoun: 'نَحْنُ', type: '1st P. Plur. (We)', past: 'مَدَدْنَا', present: 'نَمُدُّ', prefix: 'نَـ', suffixPast: 'ـنَا', suffixPresent: 'ـُّ' },
    ]
  }
};

// Map descriptive type to a short, mobile-friendly translation
const getMobileShortType = (type) => {
  if (type.includes('3rd P. M. Sing.')) return 'He';
  if (type.includes('3rd P. M. Dual')) return 'They 2 (M)';
  if (type.includes('3rd P. M. Plur.')) return 'They (M)';
  if (type.includes('3rd P. F. Sing.')) return 'She';
  if (type.includes('3rd P. F. Dual')) return 'They 2 (F)';
  if (type.includes('3rd P. F. Plur.')) return 'They (F)';
  if (type.includes('2nd P. M. Sing.')) return 'You (M)';
  if (type.includes('2nd P. M. Dual')) return 'You 2 (M)';
  if (type.includes('2nd P. M. Plur.')) return 'You all (M)';
  if (type.includes('2nd P. F. Sing.')) return 'You (F)';
  if (type.includes('2nd P. F. Dual')) return 'You 2 (F)';
  if (type.includes('2nd P. F. Plur.')) return 'You all (F)';
  if (type.includes('1st P. Sing.')) return 'I';
  if (type.includes('1st P. Plur.')) return 'We';
  return type;
};

const Sarf = () => {
  const [selectedVerbKey, setSelectedVerbKey] = useState('faala');
  const [tenseTab, setTenseTab] = useState('past');
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const activeVerb = verbsData[selectedVerbKey];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleVerbChange = (event) => {
    setSelectedVerbKey(event.target.value);
  };

  const handleTenseTabChange = (event, newValue) => {
    setTenseTab(newValue);
  };

  const handleOpenInfoDialog = () => setInfoDialogOpen(true);
  const handleCloseInfoDialog = () => setInfoDialogOpen(false);

  return (
    <React.Fragment>
      <SubNav />
      <div className="container">
        <PageTitle pageTitle="Sarf ➩ Active Voice Conjugation" />

        <div className="instruction">
          <Typography component="p" sx={{ mb: 1 }}>
            <strong>Sarf (الصَّرْف)</strong> is the science of Arabic word morphology, dealing with how root letters change to form different tenses, voices, and meanings.
          </Typography>
          <Typography component="p">
            This table displays the <strong>Complete Active Voice (المَعْرُوف) Conjugation</strong> for past tense 
            (الْمَاضِي) and present/future tense (الْمُضَارِع) across the 14 standard pronoun structures.
          </Typography>
        </div>

        <Grid container spacing={3} sx={{ mt: 1, mb: 3 }}>
          {/* Control Panel */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="var(--section-title-color)" sx={{ fontWeight: 'bold' }}>
                  Select Verb
                </Typography>
                
                <FormControl fullWidth variant="outlined" sx={{ mt: 1, mb: 2 }}>
                  <InputLabel id="verb-select-label">Active Verb</InputLabel>
                  <Select
                    labelId="verb-select-label"
                    value={selectedVerbKey}
                    onChange={handleVerbChange}
                    label="Active Verb"
                  >
                    <MenuItem value="faala">فَعَلَ (To Do)</MenuItem>
                    <MenuItem value="kataba">كَتَبَ (To Write)</MenuItem>
                    <MenuItem value="nasara">نَصَرَ (To Help)</MenuItem>
                    <MenuItem value="dahaba">ذَهَبَ (To Go)</MenuItem>
                    <MenuItem value="khaala">خَالَ (To Think - Hollow)</MenuItem>
                    <MenuItem value="qaala">قَالَ (To Say - Hollow)</MenuItem>
                    <MenuItem value="daaa">دَعَا (To Call - Defective)</MenuItem>
                    <MenuItem value="madda">مَدَّ (To Stretch - Doubled)</MenuItem>
                  </Select>
                </FormControl>

                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2" color="textSecondary">
                      Arabic Verb:
                    </Typography>
                    {isMobile && (
                      <IconButton onClick={handleOpenInfoDialog} color="primary" size="small" sx={{ p: 0.5 }}>
                        <Info fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                  <Typography className="arabic-font" sx={{ fontSize: '2em', fontWeight: 'bold', color: 'var(--arabic-text-color)' }}>
                    {activeVerb.arabic}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1 }}>
                    English Translation:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>
                    {activeVerb.translation}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1 }}>
                    Root Letters (الحروف الأصلية):
                  </Typography>
                  <Chip 
                    label={activeVerb.root} 
                    className="arabic-font"
                    sx={{ 
                      fontSize: '1.1em', 
                      fontWeight: 'bold', 
                      backgroundColor: 'var(--instruction-highlight-bg)', 
                      color: 'var(--instruction-highlight-text)',
                      mt: 0.5 
                    }} 
                  />

                  {!isMobile && (
                    <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid var(--container-border-color)' }}>
                      <Typography variant="subtitle2" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                        Grammatical Pattern:
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'var(--section-title-color)', fontWeight: 'bold', mt: 0.5 }}>
                        {activeVerb.explanation.patternName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5, lineHeight: 1.4 }}>
                        {activeVerb.explanation.details}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Guide Legend */}
          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="var(--section-title-color)" sx={{ fontWeight: 'bold' }}>
                  Conjugation Patterns Guide
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  Observe how prefixes and suffixes attach to the root verb to change person, gender, and quantity.
                </Typography>
                
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 1.5, border: '1px dashed var(--highlighted-border)', borderRadius: 1, backgroundColor: 'var(--highlight-box-bg)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'red' }}>
                        Past Tense (الْمَاضِي) Suffixes:
                      </Typography>
                      <Typography variant="body2">
                        Past tense adds suffixes to the end of the root. Examples:
                        <ul>
                          <li>Singular F: adding <strong style={{ color: 'red' }}>ـَتْ</strong> (فَعَلَتْ)</li>
                          <li>Plural M: adding <strong style={{ color: 'red' }}>ـُوا</strong> (فَعَلُوا)</li>
                          <li>1st P. Sing: adding <strong style={{ color: 'red' }}>ـْتُ</strong> (فَعَلْتُ)</li>
                        </ul>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 1.5, border: '1px dashed var(--highlighted-border)', borderRadius: 1, backgroundColor: 'var(--highlight-box-bg)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'blue' }}>
                        Present Tense (الْمُضَارِع) Prefix/Suffix:
                      </Typography>
                      <Typography variant="body2">
                        Present tense uses both prefixes (beginning) and suffixes (end). Examples:
                        <ul>
                          <li>Prefixes indicate person (e.g. <strong style={{ color: 'blue' }}>يَـ</strong> for 3rd P. M., <strong style={{ color: 'blue' }}>تَـ</strong> for 2nd P.)</li>
                          <li>Suffixes indicate dual (<strong style={{ color: 'red' }}>ـَانِ</strong>) and plural (<strong style={{ color: 'red' }}>ـُونَ / ـْنَ</strong>)</li>
                        </ul>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Tense Toggle Tabs on Mobile Screen */}
        {isMobile && (
          <Paper sx={{ mb: 2, borderRadius: 2 }}>
            <Tabs 
              value={tenseTab} 
              onChange={handleTenseTabChange} 
              centered 
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Past Tense (الْمَاضِي)" value="past" />
              <Tab label="Present Tense (الْمُضَارِع)" value="present" />
            </Tabs>
          </Paper>
        )}

        {/* Conjugation Table */}
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden', mb: 4 }}>
          <Table aria-label="conjugation table" size={isMobile ? "small" : "medium"}>
            <TableHead sx={{ backgroundColor: 'var(--tab-root-bg)' }}>
              {isMobile ? (
                /* Mobile Headers */
                tenseTab === 'past' ? (
                  <TableRow>
                    <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Pronoun</TableCell>
                    <TableCell align="left" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Type</TableCell>
                    <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold', fontSize: '1em' }}>Past (الْمَاضِي)</TableCell>
                    <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Suffix</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Pronoun</TableCell>
                    <TableCell align="left" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Type</TableCell>
                    <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold', fontSize: '1em' }}>Present (الْمُضَارِع)</TableCell>
                    <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Pattern</TableCell>
                  </TableRow>
                )
              ) : (
                /* Desktop Headers */
                <TableRow>
                  <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Pronoun (الضَّمِير)</TableCell>
                  <TableCell align="left" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Person, Gender & Number</TableCell>
                  <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold', fontSize: '1.1em' }}>Past Tense (الْمَاضِي)</TableCell>
                  <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Past Suffix</TableCell>
                  <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold', fontSize: '1.1em' }}>Present Tense (الْمُضَارِع)</TableCell>
                  <TableCell align="center" sx={{ color: 'var(--tabs-root-text)', fontWeight: 'bold' }}>Present Pattern</TableCell>
                </TableRow>
              )}
            </TableHead>
            <TableBody>
              {activeVerb.conjugations.map((row, index) => {
                // Grouping rows visually by Person
                let rowBg = 'inherit';
                if (index < 6) {
                  // 3rd Person
                  rowBg = 'rgba(0, 150, 136, 0.04)';
                } else if (index < 12) {
                  // 2nd Person
                  rowBg = 'rgba(33, 150, 243, 0.04)';
                } else {
                  // 1st Person
                  rowBg = 'rgba(255, 152, 0, 0.04)';
                }

                // Render Mobile Row
                if (isMobile) {
                  if (tenseTab === 'past') {
                    return (
                      <TableRow 
                        key={row.pronoun + index}
                        sx={{ 
                          backgroundColor: rowBg,
                          '&:hover': { backgroundColor: 'var(--grid-box-hover-bg)' },
                          transition: 'background-color 0.2s'
                        }}
                      >
                        {/* Pronoun */}
                        <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.4em', fontWeight: 'bold', color: 'var(--arabic-text-color)', px: 1 }}>
                          {row.pronoun}
                        </TableCell>
                        
                        {/* Type Description */}
                        <TableCell align="left" sx={{ fontSize: '0.8em', px: 1 }}>
                          {getMobileShortType(row.type)}
                        </TableCell>
                        
                        {/* Past Tense Verb */}
                        <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.6em', direction: 'rtl', px: 1 }}>
                          {row.past}
                        </TableCell>

                        {/* Past Suffix Highlight */}
                        <TableCell align="center" sx={{ px: 1 }}>
                          <Chip 
                            label={row.suffixPast} 
                            size="small" 
                            sx={{ 
                              fontWeight: 'bold', 
                              color: row.suffixPast === '—' ? 'inherit' : 'red',
                              borderColor: row.suffixPast === '—' ? 'inherit' : 'red',
                              borderStyle: 'solid',
                              borderWidth: row.suffixPast === '—' ? 0 : 1,
                              backgroundColor: 'transparent',
                              fontSize: '0.75em'
                            }} 
                          />
                        </TableCell>
                      </TableRow>
                    );
                  } else {
                    return (
                      <TableRow 
                        key={row.pronoun + index}
                        sx={{ 
                          backgroundColor: rowBg,
                          '&:hover': { backgroundColor: 'var(--grid-box-hover-bg)' },
                          transition: 'background-color 0.2s'
                        }}
                      >
                        {/* Pronoun */}
                        <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.4em', fontWeight: 'bold', color: 'var(--arabic-text-color)', px: 1 }}>
                          {row.pronoun}
                        </TableCell>
                        
                        {/* Type Description */}
                        <TableCell align="left" sx={{ fontSize: '0.8em', px: 1 }}>
                          {getMobileShortType(row.type)}
                        </TableCell>
                        
                        {/* Present Tense Verb */}
                        <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.6em', direction: 'rtl', px: 1 }}>
                          {row.present}
                        </TableCell>

                        {/* Present Prefix/Suffix Highlight */}
                        <TableCell align="center" sx={{ px: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.2 }}>
                            <Chip 
                              label={row.prefix} 
                              size="small" 
                              sx={{ 
                                fontWeight: 'bold', 
                                color: 'blue', 
                                borderColor: 'blue',
                                borderWidth: 1, 
                                borderStyle: 'solid',
                                backgroundColor: 'transparent',
                                fontSize: '0.7em',
                                px: 0.5
                              }} 
                            />
                            <Typography sx={{ alignSelf: 'center', fontSize: '0.7em', color: 'text.secondary' }}>..</Typography>
                            <Chip 
                              label={row.suffixPresent} 
                              size="small" 
                              sx={{ 
                                fontWeight: 'bold', 
                                color: 'red', 
                                borderColor: 'red',
                                borderWidth: 1, 
                                borderStyle: 'solid',
                                backgroundColor: 'transparent',
                                fontSize: '0.7em',
                                px: 0.5
                              }} 
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  }
                }

                // Render Desktop Row
                return (
                  <TableRow 
                    key={row.pronoun + index}
                    sx={{ 
                      backgroundColor: rowBg,
                      '&:hover': {
                        backgroundColor: 'var(--grid-box-hover-bg)'
                      },
                      transition: 'background-color 0.2s'
                    }}
                  >
                    {/* Pronoun */}
                    <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.6em', fontWeight: 'bold', color: 'var(--arabic-text-color)' }}>
                      {row.pronoun}
                    </TableCell>
                    
                    {/* Type Description */}
                    <TableCell align="left" sx={{ fontSize: '0.9em', fontWeight: '500' }}>
                      {row.type}
                    </TableCell>
                    
                    {/* Past Tense Verb */}
                    <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.8em', direction: 'rtl' }}>
                      {row.past}
                    </TableCell>

                    {/* Past Suffix Highlight */}
                    <TableCell align="center">
                      <Chip 
                        label={row.suffixPast} 
                        size="small" 
                        sx={{ 
                          fontWeight: 'bold', 
                          color: row.suffixPast === '—' ? 'inherit' : 'red',
                          borderColor: row.suffixPast === '—' ? 'inherit' : 'red',
                          borderStyle: 'solid',
                          borderWidth: row.suffixPast === '—' ? 0 : 1,
                          backgroundColor: 'transparent'
                        }} 
                      />
                    </TableCell>
                    
                    {/* Present Tense Verb */}
                    <TableCell align="center" className="arabic-font" sx={{ fontSize: '1.8em', direction: 'rtl' }}>
                      {row.present}
                    </TableCell>

                    {/* Present Prefix/Suffix Highlight */}
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                        <Chip 
                          label={row.prefix} 
                          size="small" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: 'blue', 
                            borderColor: 'blue',
                            borderWidth: 1, 
                            borderStyle: 'solid',
                            backgroundColor: 'transparent' 
                          }} 
                        />
                        <Typography sx={{ alignSelf: 'center', fontSize: '0.8em', color: 'text.secondary' }}>...</Typography>
                        <Chip 
                          label={row.suffixPresent} 
                          size="small" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: 'red', 
                            borderColor: 'red',
                            borderWidth: 1, 
                            borderStyle: 'solid',
                            backgroundColor: 'transparent' 
                          }} 
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Info Dialog for Mobile View */}
      <Dialog open={infoDialogOpen} onClose={handleCloseInfoDialog} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 'bold', color: 'var(--section-title-color)' }}>
          {activeVerb.explanation.patternName}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {activeVerb.explanation.details}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInfoDialog} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Sarf;
