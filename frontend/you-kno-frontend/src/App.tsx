import React from "react";
import "./App.css";
import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import StartPage from "./StartPage";
import GamePlayPage from "./GamePlayPage";

const useStyles = makeStyles((theme) => ({


}));

function App() {
  const styles = useStyles();
  const [isSetupCompleted, setIsSetupCompleted] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">

          {isSetupCompleted ?
              <GamePlayPage />
              :
              <StartPage
              startButtonClick={()=>{setIsSetupCompleted(true)}}
              />
          }


      </header>
    </div>
  );
};

export default App;
