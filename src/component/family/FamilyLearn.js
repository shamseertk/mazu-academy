import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, TableContainer } from '@material-ui/core';
import { arabicRelations } from '../../utils/data/relationship';

function FamilyLearn(props) {
  return <TableContainer><Table
    style={{
      width: '50%'
    }}
    stickyHeader={true}
    aria-label="sticky table"
    size="small">
    <TableHead>
      <TableRow>
        <TableCell>English</TableCell>
        <TableCell>Arabic</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {arabicRelations && arabicRelations.map(arCol => <TableRow key={arCol.english}>
        <TableCell align="center">{arCol.english}</TableCell>
        <TableCell align="right" style={{fontSize: '1.75em'}}>{arCol.arabic}</TableCell>
        <TableCell></TableCell>
      </TableRow>)}
    </TableBody>
  </Table></TableContainer>
}

export default FamilyLearn;
