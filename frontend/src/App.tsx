import React from "react";
import "./App.css";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import StartPage from "./StartPage";
import GamePlayPage from "./GamePlayPage";
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#E5E5E5",
  },
}));

function App() {
  const styles = useStyles();
  const [isSetupCompleted, setIsSetupCompleted] = React.useState(false);

  return (

    <main className={styles.main}>
        <Router>
            <Switch>
                <Route path="/" component={StartPage} exact />
                <Route path="/game" component={GamePlayPage} />
            </Switch>
        </Router>
    </main>
  );
}

export default App;
