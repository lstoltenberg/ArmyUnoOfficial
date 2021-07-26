import React from "react";
import {Button, Link, makeStyles, TextField, Theme} from "@material-ui/core";
import { inspect } from "util";
import { Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  startButton: {
    textAlign: "center",
    backgroundColor: "#A9AEB1",
    width: "490px",
    height: "112px",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "47px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    marginTop: "24px", //40-16
  },

  input: {
    width: "237px",
    height: "24px",
  },

  playerNameField: {
    // width: "237px",
    //  height: "24px",
    background: "#E6E6E6",
    marginBottom: "16px",
    // margin: theme.spacing(1),
    // padding: "0",
  },

  addPlayerBackground: {
    backgroundColor: "#C4C4C4",
    width: "934px",
    height: "720px",
    margin: "28px auto 0px auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    //console.log("start button click")
    //console.log(playerNames)
    //check that two names exist


    let count = 0;
    playerNames.forEach((key, value) => {
      //console.log("foreach"+" "+key+" "+value+" "+count)
      if (value != "") {
        count++;
      }
    });

    //then do the startbuttonclick function
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
        //value={props.playerNames.get("player1)}
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
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player4"
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player5"
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player6"
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player7"
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player8"
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player9"
        variant="outlined"
        InputProps={{ className: styles.input }}
        className={styles.playerNameField}
      />
      <TextField
        name="player10"
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
