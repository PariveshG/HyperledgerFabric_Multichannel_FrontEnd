import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import metadatakyc from "./metadatakyc";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: 300,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    
    <div>
   
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fixed">
        
        <form className={classes.root}>
      <h5 align= "justify">KYC Form</h5>
        <TextField id="standard-basic" label="Unique ID" />
        
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="DOB" />
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Address" />
      <TextField id="standard-basic" label="City" />
      

      <Button variant="contained" color="primary"  text-align= "center"  component={Link} to="/metadatakyc">
        Submit
      </Button>
    
     
      
      </form>
      </Container>
    </React.Fragment>
    </div>
  );
}
