import React from 'react';
import './App.css';
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from '@material-ui/core'
import Header from "./Header";
import Content from "./Content";

const App = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header/>
            </Grid>
            <Grid item container>
                <Grid xs={false} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <Content />
                </Grid>
                <Grid xs={false} sm={2}></Grid>
            </Grid>
        </Grid>
    );
};
export default App;
