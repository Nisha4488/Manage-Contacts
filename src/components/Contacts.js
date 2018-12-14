import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import ContactCard from './ContactCard';
import View from './View'
import {connect} from 'react-redux';
import Header from './Header'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  style:{
    alignItems:"center",
  },
 styleText:{
 marginTop:240,
 marginLeft:480,
 fontSize:30

}
};

function Contacts(props) {
  const { classes } = props;
  if(props.contacts.length ===0) {
    return   <React.Fragment>
        <Header type = "Dashboard"/>
    <Grid container xs={12} className={classes.styleText}>
      No contacts found
    </Grid>
    </React.Fragment>
  }
  return (
    <div>
    <Header type = "Dashboard"/>
    <Grid container className={classes.root} >
    {
      props.contacts.map(contact =>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <ContactCard  key={contact.phoneNumber} contact={contact}/>
        </Grid>
      )
    }
    </Grid>
    </div>
  );
}

Contacts.propTypes = {
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

const CreateWithRedux = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default withStyles(styles)(CreateWithRedux);
