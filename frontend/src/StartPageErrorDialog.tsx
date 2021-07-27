import React, { Component }from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {render} from "react-dom";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const StartPageErrorDialog = (props:any) => {

        const [open, setOpen] = React.useState(true);

        const handleClickOpen = () => {
            props.isOpen = true;
        };

        const handleClose = () => {
            props.isOpen = false;
        };

        return (
            <div>
                <Dialog
                    open={props.isOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            PLEASE HAVE A MINIMUM OF TWO PLAYERS TO START A GAME.
                            <br/>
                            <br/>
                            *IF YOU WANT TO HAVE FUN AND CHALLENGE YOURSELF, PLEASE ENTER A NAME AS PLAYER TWO.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
}
export default StartPageErrorDialog;