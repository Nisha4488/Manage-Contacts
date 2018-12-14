import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  const goBack=()=>{
    props.history.goBack();
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Manage Your Contacts
          </Typography>
        {props.type==='Dashboard'&& <Link to ={`/add`} className={classes.link}>Add Contacts</Link>}
        {props.type==='View'&& <Link to ={`/`} className={classes.link}>Dashboard</Link>}
        {props.type==='Add'&& <Link to ={`/`} className={classes.link}>Dashboard</Link>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
