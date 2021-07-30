import React from "react";
import {Button, makeStyles, TextField, Theme} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {TransitionProps} from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme: Theme) => ({
    startButton: {
        textAlign: "center",
        backgroundColor: "#005EA2",
        width: "490px",
        height: "112px",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "47px",
        display: "flex",
        alignItems: "center",
        color: "#F0F0F0",
        marginTop: "24px",
        '&:hover':{
            backgroundColor: "#1A4480"
        },
    },

    input: {
        width: "237px",
        height: "24px",
    },

    playerNameField: {
        background: "#E6E6E6",
        marginBottom: "16px",
        border: "1px solid #000000",
    },

    addPlayerBackground: {
        backgroundColor: "#DCDEE0",
        width: "934px",
        height: "720px",
        margin: "28px auto 0px auto",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
    },

    header: {
        marginTop: "8px",
        marginBottom: "0px",
    },

    errorDialogBox:{
        width: "522px",
        height: "337px"
    },

    errorDialogContent:{
        width: "360px",
        height: "144px",
    },

    errorDialogMainText: {
        fontSize: "22px",
        textAlign: "center",
        color: "black",
        width: "375px",
        margin: "20px 0px 0px 80px",
    },

    errorDialogSecondaryText: {
        fontSize: "16px",
        textAlign: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: "black",
        width: "360px",
        padding: "15px 0px 0px 80px",
    },

    okErrorDialogButton:{
        width: "315px",
        height: "62px",
        background: "#005EA2",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#005EA2",
        '&:hover':{
            backgroundColor: "#1A4480"
        },
        color: "#F0F0F0",
        fontSize: "32px",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px 103.5px 48px 103.5px",
    },
}));

const StartPage: React.FC = () => {
  const styles = useStyles();
  const [playerList, setPlayerList] = React.useState(new Map<String, String>());
  const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

  function handlePlayerNameInput(event: any) {
     if(event.target.value != "") {
          setPlayerList(playerList.set(event.target.name, event.target.value));
      }
  }

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & { children?: React.ReactElement<any, any> },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

  function getErrorDialog(){
      return (
          <div>
              <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  onClose={handleClose}>
                  <DialogContent className={styles.errorDialogBox}>
                      <DialogContentText className={styles.errorDialogMainText}>
                         PLEASE HAVE A MINIMUM OF TWO PLAYERS TO START A GAME.
                      </DialogContentText>
                      <DialogContentText className={styles.errorDialogSecondaryText}>
                          *IF YOU WANT TO HAVE FUN AND CHALLENGE YOURSELF, PLEASE ENTER A NAME AS PLAYER TWO.
                      </DialogContentText>
                      <Button onClick={handleClose} className={styles.okErrorDialogButton}> OK </Button>
                  </DialogContent>
              </Dialog>
          </div>
      )
  }

  const history = useHistory();

  const handleStartButtonClick = () => {
    let count = 0;
    playerList.forEach((key, value) => {
      if (value != "") {
        count++;
      }
    });

    if (count > 1) {
      history.push("/game");
    }else{
        setOpen(true);
    }
  };

  return (
    <div className={styles.addPlayerBackground}>
      <h1 className={styles.header}>You-Kno</h1>
      <h2>PLEASE ADD UP TO TEN PLAYERS</h2>
      <TextField
        name="player1"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player2"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player3"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player4"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player5"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player6"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player7"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player8"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player9"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player10"
        onChange={(event) => handlePlayerNameInput(event)}
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
        {open && getErrorDialog()}
      <Button
        className={styles.startButton}
        onClick={() => {
          handleStartButtonClick();
        }}>Start Game</Button>
    </div>
  );
};

export default StartPage;
