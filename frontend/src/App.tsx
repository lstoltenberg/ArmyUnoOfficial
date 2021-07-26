import React from "react";
import "./App.css";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import StartPage from "./StartPage";
import GamePlayPage from "./GamePlayPage";
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";

function App() {
  const [isSetupCompleted, setIsSetupCompleted] = React.useState(false);

  return (

    <main>
        <Router>
            <Switch>
                <Route path="/you-kno/" component={StartPage} exact />
                <Route path="/game" component={GamePlayPage} />
            </Switch>
        </Router>
    </main>
  );
}

export default App;
