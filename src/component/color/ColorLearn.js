import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, TableContainer } from '@mui/material';
import { arabicColors } from '../../utils/colors';

function NumberLearn(props) {
  return <TableContainer><Table
    style={{
      width: '50%'
    }}
    stickyHeader={true}
    aria-label="sticky table"
    size="small">
    <TableHead>
      <TableRow>
        <TableCell>Color Name</TableCell>
        <TableCell>Arabic</TableCell>
        <TableCell>Color</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {arabicColors && arabicColors.map(arCol => <TableRow key={arCol.english}>
        <TableCell>{arCol.english}</TableCell>
        <TableCell align="right" style={{fontSize: '1.75em'}}>{arCol.arabic}</TableCell>
        <TableCell>
          <div style={{backgroundColor: `${arCol.colorCode}`, width: '50px', height: '50px'}}></div> </TableCell>
      </TableRow>)}
    </TableBody>
  </Table></TableContainer>
}

export default NumberLearn;
