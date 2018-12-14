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
import { Form, Field } from 'react-final-form'
import { render } from 'react-dom'
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {addContact} from '../redux/actions'
import Header from './Header'

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
    width:200
  },
  input: {
    display: 'none',
  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: 400,
 },
 errorText:{
   color:'red',
 }
});

const required = value => (value ? undefined : "Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
 const validateEmail = value => {
  if (!value) {
    return 'Required';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return null;
};

class Create extends React.Component {
  state = {
    phoneNumber: '',
    firstName:'',
    lastName:'',
    email:'',

  };

  componentDidMount() {
    this.forceUpdate();
  }

  onSubmit =  values => {
    this.props.addContact(values);
    this.setState({redirect: true})
  }



  render() {
    const { classes } = this.props;


    if(this.state.redirect) {
      return <Redirect to="/"/>
    }

    let contact = {};
    const id = parseInt(this.props.match.params.id);
    for(let i=0;i<this.props.contacts.length;i++){
      if(this.props.contacts[i].id===id){
        contact = this.props.contacts[i];
        break;
      }
    }

    return (
      <React.Fragment>
        <Header type = "Add"/>
          <Grid container className={classes.root} justify="center" alignItems="center" >

            <Grid container xs={12} justify="center" alignItems="center">
              <h3>Add Contact</h3>
            </Grid>

    <Form
      onSubmit={this.onSubmit}
      initialValues={ contact}
      render={({ handleSubmit, form, submitting, pristine, values, invalid }) => (
        <form onSubmit={handleSubmit}>

        <Grid container xs={12} justify="center" alignItems="center">
           <Grid item xs={12} sm={6} md={4} lg={3}>
            <Field name="phoneNumber" validate={composeValidators(required, mustBeNumber, minValue(10))}>
              {({ input, meta }) => (
                <div>
                <TextField
                {...input}
                label="Phone Number"
                id="margin-none"
                className={classes.textField}/>
       {meta.touched && meta.error && <FormHelperText className={classes.errorText}>{meta.error}</FormHelperText>}
         </div>
       )}
       </Field>
       </Grid>
     </Grid>

     <Grid container xs={12} justify="center" alignItems="center">
       <Grid item xs={12} sm={6} md={4} lg={3}>
        <Field name="firstName" validate={required}>
               {({ input, meta }) => (
                 <div>
                <TextField
                 {...input}
                 label="First Name"
                 id="margin-none"
                 className={classes.textField}/>
                 {meta.error && meta.touched && <FormHelperText className={classes.errorText} >{meta.error}</FormHelperText>}
                 </div>
               )}
             </Field>
            </Grid>
           </Grid>

     <Grid container xs={12} justify="center" alignItems="center">
             <Grid item xs={12} sm={6} md={4} lg={3}>
              <Field name="lastName" validate={required}>
           {({ input, meta }) => (
             <div>
             <TextField
              {...input}
              label="Last Name"
              id="margin-none"
              className={classes.textField}/>
              {meta.error && meta.touched && <FormHelperText className={classes.errorText}>{meta.error}</FormHelperText>}
             </div>
           )}
         </Field>
         </Grid>
        </Grid>

      <Grid container xs={12} justify="center" alignItems="center">
              <Grid item xs={12} sm={6} md={4} lg={3}>
              <Field name="email" validate={validateEmail}>
                 {({ input, meta }) => (
                   <div>
                  <TextField
                   {...input}
                   label="Email"
                   id="margin-none"
                   className={classes.textField}/>
                     {meta.error && meta.touched && <FormHelperText className={classes.errorText}>{meta.error}</FormHelperText>}
                   </div>
                 )}
               </Field>
               </Grid>
             </Grid>

      <Grid container xs={12} justify="center" alignItems="center">
               <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button variant="contained" color="primary" className={classes.button} type="submit" disabled={pristine || invalid} >
                  {!contact.id?'ADD':'UPDATE'}
                </Button>
                </Grid>
              </Grid>
            </form>
      )}
    />
  </Grid>
   </React.Fragment>
    );
  }
}

Create.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps= state => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addContact: (contact)=>{

      dispatch(addContact(contact))
    }
  }
}

const CreateWithRedux = connect(mapStateToProps, mapDispatchToProps)(Create)

export default withStyles(styles)(CreateWithRedux);
