import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, TableContainer } from '@mui/material';
import { arabicMonths } from '../../utils/months';

function MonthLearn(props) {
  return <TableContainer><Table
    style={{
      width: '50%'
    }}
    stickyHeader={true}
    aria-label="sticky table"
    size="small">
    <TableHead>
      <TableRow>
        <TableCell>Month</TableCell>
        <TableCell>Arabic</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {arabicMonths && arabicMonths.map(arCol => <TableRow key={arCol.english}>
        <TableCell>{arCol.id}</TableCell>
        <TableCell align="right" style={{fontSize: '1.75em'}}>{arCol.arabic}</TableCell>
      </TableRow>)}
    </TableBody>
  </Table></TableContainer>
}

export default MonthLearn;
