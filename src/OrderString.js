import React, {useState} from "react";
import {TextField, Button, FormControlLabel, Radio, Grid, Container} from "@material-ui/core"


const OrderString = () => {

    const [ordering, setOrder] = useState(0);
    const [currentSelected, setSelected] = useState("");
    const [currentInput, setInput] = useState("");

    const chooseString = () => {     
        if (currentInput.replace(/\n/gi,"").replace(/ /gi,"") !== "" ) {
            var stringsToChoose = (currentInput.replace(/\n/gi," ").trim().split(/[ ]+/));
            var setOfStrings = new Set(stringsToChoose);
            stringsToChoose = Array.from(setOfStrings)
            if (ordering == 0) {
                stringsToChoose.sort();
            }
            else if (ordering == 1) {
                stringsToChoose.sort();
                stringsToChoose.reverse();
            }
            else {
                stringsToChoose.sort((a,b) => {return a.length - b.length});
            }
            var outputString = "\n";
            var i = 0;
            for (i = 0; i < stringsToChoose.length - 1; ++i) {
                outputString = outputString.concat((i + 1) + ". ");
                outputString = outputString.concat(stringsToChoose[i]).concat("\n");
            }
            outputString = outputString.concat((stringsToChoose.length) + ". ").concat(stringsToChoose[stringsToChoose.length - 1]);
            setSelected(outputString);
        }
    }

    const clear = () => {
        setInput("");
        setSelected("");
    }

    return (
        <div>
            <Container maxWidth={'xs'}>
                <Grid container spacing={2}>
                    <Grid item xs = {12}>
                        <div>
                            This application takes in a list of strings and outputs an ordered version.
                            Strings may be split by spaces or newlines.
                            The ordered output only contains unique values.
                            The ordering can be selected between alphabetical ascending, alphabetical descending, and increasing string length.
                        </div>
                        <br>
                        </br>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Input"
                            value={currentInput}
                            onChange={(event) => {setInput(event.target.value)}}
                            multiline="true"
                            rowsMax={5}/>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <TextField
                                value={currentSelected}
                                label="Output"
                                multiline="true"
                                InputProps={{
                                    readOnly: true,
                                }}
                            variant="filled"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>Ordering:</div>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel value={0} control={<Radio />} label="Ascending" checked={ordering == 0} onChange={(event) => {setOrder(event.target.value)}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel value={1} control={<Radio />} label="Descending" checked={ordering == 1} onChange={(event) => {setOrder(event.target.value)}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel value={2} control={<Radio />} label="Increasing string length" checked={ordering == 2} onChange={(event) => {setOrder(event.target.value)}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={chooseString} variant="outlined">Order Input Strings</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={clear} variant="outlined">Clear Input and Output</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

};

export default OrderString;