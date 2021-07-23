import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Input, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  },

  playerNameField: {
    width: "237px",
    height: "24px",
    background: "#E6E6E6",
    //marginBottom: "16px",
    margin: theme.spacing(1),
    padding: "0",
  },
}));

function App() {
  const styles = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="outlined"
          size="small"
          className={styles.playerNameField}
        />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />
        <TextField variant="outlined" className={styles.playerNameField} />

        <Button className={styles.startButton}>Start Game</Button>
      </header>
    </div>
  );
}

export default App;
