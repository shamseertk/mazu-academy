import { Table, TableHead, TableRow, TableBody, TableCell, TableContainer } from '@mui/material';
import { arabicNumbers, convertNumberToAR } from '../../utils/numbers';

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
        <TableCell>Number</TableCell>
        <TableCell>Arabic</TableCell>
        <TableCell>Arabic Number</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {arabicNumbers && arabicNumbers.map(arNum => <TableRow key={arNum.number}>
        <TableCell>{arNum.number}</TableCell>
        <TableCell align="right" style={{fontSize: '1.75em'}}>{arNum.arabic}</TableCell>
        <TableCell style={{fontSize: '1.75em'}}> {convertNumberToAR(arNum.number)} </TableCell>
      </TableRow>)}
    </TableBody>
  </Table></TableContainer>
}

export default NumberLearn;
