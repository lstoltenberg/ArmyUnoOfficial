import React from "react";
import {Button, makeStyles, TextField, Theme} from "@material-ui/core";
import {inspect} from "util";

const useStyles = makeStyles((theme:Theme)=>({
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

}))

interface StartPageInterface {
    startButtonClick: ()=>void;
}

const StartPage : React.FC<StartPageInterface> = (props:StartPageInterface) => {
    const styles = useStyles();
    return (<div className={"App-header"}>
        <TextField
            variant="outlined"
            // size="small"
            InputProps={{className:styles.input}}
            className={styles.playerNameField}
        />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />
        <TextField variant="outlined"
                   InputProps={{className:styles.input}} className={styles.playerNameField} />

        <Button className={styles.startButton} onClick={()=>props.startButtonClick()}>Start Game</Button>

    </div>)


}

export default StartPage