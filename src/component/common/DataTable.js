import React from 'react';
import { Table } from '@mui/material';

class DataTable extends React.Component {
  renderHeaders
  render() {
    const { headerConfig } = this.props;
    return <Table>
      {this.renderHeaders(headerConfig)}
    </Table>
  }
}

export default DataTable;