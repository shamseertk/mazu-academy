import React from 'react';
import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@mui/material';

class SimpleDialog extends React.Component {
  render() {
    const { openDialog, dialogContent, closeDialog, title, dialogActions } = this.props;
    return <Dialog
    onClose={closeDialog}
    open={openDialog}
    >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      {dialogContent}
    </DialogContent>
    <DialogActions>
      {dialogActions
      ? dialogActions
      : <Button onClick={closeDialog}>Close</Button>}
    </DialogActions>
  </Dialog>
  }
}

export default SimpleDialog;
