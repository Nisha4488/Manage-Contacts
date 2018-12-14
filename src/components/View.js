import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import Header from './Header'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root:{
    margin: 100,
  },
  style:{
    padding:10
  },
  styleText:{
  marginTop:240,
  marginLeft:480,
  fontSize:30
 }
});

class View extends React.Component {
  render() {
    const { classes } = this.props;
    let contact;
    const id = parseInt(this.props.match.params.id);
    for(let i=0;i<this.props.contacts.length;i++){
      if(this.props.contacts[i].id===id){
        contact = this.props.contacts[i];
        break;
      }
    }
    if(!contact) {
      return (
        <React.Fragment>
          <Header type = "View"/>
          <div className={classes.styleText}>No contacts found </div>
        </React.Fragment>
      )
    }

    return (
     <React.Fragment>
      <Header type = "View"/>
        <Grid container className={classes.root} justify="center" alignItems="center" >
          <Grid container xs={12} justify="center" alignItems="center" className={classes.style} >
            <Grid xs={4} >  Phone Number:</Grid>
            <Grid xs={4}>{contact.phoneNumber} </Grid >
          </Grid>

          <Grid container xs={12} justify="center" alignItems="center" className={classes.style}>
            <Grid xs={4}>First Name: </Grid>
            <Grid xs={4}>{contact.firstName} </Grid>
         </Grid>

        <Grid container xs={12} justify="center" alignItems="center" className={classes.style}>
            <Grid xs={4}>Last Name: </Grid>
            <Grid xs={4}>{contact.lastName}</Grid>
        </Grid>

        <Grid container xs={12} justify="center" alignItems="center" className={classes.style}>
          <Grid xs={4}>Email:</Grid>
          <Grid xs={4}> {contact.email} </Grid>
        </Grid>

        </Grid>
      </React.Fragment>
    );
  }
}

View.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps= state => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const CreateWithRedux = connect(mapStateToProps, mapDispatchToProps)(View)

export default withStyles(styles)(CreateWithRedux);
