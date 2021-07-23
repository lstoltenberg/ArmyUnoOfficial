import React from "react";
import "./App.css";
import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import AddPlayerScreen from "./AddPlayerScreen";

const useStyles = makeStyles((theme) => ({


}));

function navigateToGameplayScreen(){

}

function App() {

  const styles = useStyles();
  return (
    <div className="App">
      <header className="App-header">

        <AddPlayerScreen />

      </header>
    </div>
  );
}

export default App;
