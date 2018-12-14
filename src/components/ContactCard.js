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
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {removeContact} from '../redux/actions'
import Header from './Header'

const styles = {
  card: {
    maxWidth: 345,
    margin:30
  },
  media: {
    height: 140,
  },
  text: {
    marginLeft:100
  },
  button: {
    justify:'space-evenly'
  }
};

function ContactCard(props) {
  const { classes } = props;
  const handleDelete = ()=>{
    props.removeContact(props.contact.id)
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.text}>
          <Typography gutterBottom component="h3" >
            {props.contact.phoneNumber}
          </Typography>
          <Typography gutterBottom component="h3" >
            {props.contact.firstName} {props.contact.lastName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="primary">
          <Link to ={`/view/${props.contact.id}`}>View</Link>
        </Button>
        <Button size="small" color="primary">
          <Link to ={`/edit/${props.contact.id}`}>Edit</Link>
        </Button>
        <Button size="small" color="primary" onClick ={handleDelete}>
        Delete
        </Button>
      </CardActions>
    </Card>
  );
}

ContactCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



const mapStateToProps= state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeContact: (id)=>{
      dispatch(removeContact(id))
    }
  }
}

const CreateWithRedux = connect(mapStateToProps, mapDispatchToProps)(ContactCard)

export default withStyles(styles)(CreateWithRedux);
