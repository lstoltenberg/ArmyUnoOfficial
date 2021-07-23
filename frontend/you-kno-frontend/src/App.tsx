import React from "react";
import "./App.css";
import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import StartPage from "./StartPage";
import GamePlayPage from "./GamePlayPage";

const useStyles = makeStyles((theme) => ({
main: {
    backgroundColor: "#E5E5E5"
}

}));

function App() {
  const styles = useStyles();
  const [isSetupCompleted, setIsSetupCompleted] = React.useState(false);
  const playerNames : Map<String, String> = new Map<String, String>();

  const handleStartButtonClick = () => {
      //console.log("start button click")
      //console.log(playerNames)
      //check that two names exist
      let count = 0;
      playerNames.forEach((key, value)=>{
          //console.log("foreach"+" "+key+" "+value+" "+count)
          if(value != ""){ count++;}
      })

      //then do the startbuttonclick function
      if(count > 1){ setIsSetupCompleted(true)}

  }

  return (
    <div className={styles.main}>
      <header >

          {isSetupCompleted ?
              <GamePlayPage />
              :
              <StartPage
              startButtonClick={handleStartButtonClick}
              playerNames={playerNames}
              />
          }


      </header>
    </div>
  );
};

export default App;
