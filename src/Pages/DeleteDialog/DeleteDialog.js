import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';

const DeleteDialog = ({ open, handleClose ,handleDelete}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" color={'error'}>
            Are you sure you want to delete
            </DialogTitle>
            {/* <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete
                </DialogContentText>
            </DialogContent> */}
            <DialogActions>
                <Button color='error' variant='contained' size='small' onClick={handleClose}>No</Button>
                <Button color='secondary' size='small' onClick={handleDelete} variant='contained'>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;