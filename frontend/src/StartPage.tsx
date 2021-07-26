import React from "react";
import {Button, Link, makeStyles, TextField, Theme} from "@material-ui/core";
import { inspect } from "util";
import { Redirect, useHistory } from "react-router-dom";

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
    marginTop: "24px", //40-16
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
}));

const StartPage: React.FC = () => {
  const styles = useStyles();
  const playerNames: Map<String, String> = new Map<String, String>();


  function handlePlayerNameInput(event: any) {
    playerNames.set(event.target.name, event.target.value);
  }

  const history = useHistory();

  const handleStartButtonClick = () => {
    let count = 0;
    playerNames.forEach((key, value) => {
      if (value != "") {
        count++;
      }
    });

    if (count > 1) {
      history.push("/game");
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
      <Button
        className={styles.startButton}
        onClick={() => {
          handleStartButtonClick();
        }}
      >
        Start Game
      </Button>
    </div>
  );
};

export default StartPage;
