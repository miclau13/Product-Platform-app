import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    display: 'flex',
  },
}));

const Update = (props) => {
  const { formik } = props;
  const { handleSubmit, handleChange, handleBlur, values, initialValues } = formik;
  const classes = useStyles();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  }
  return (
    <FormControl 
      component="form" 
      className={classes.formControl} 
      onSubmit={handleOnSubmit}
    >
      <TextField
        id="aboutUs"
        label="About Us"
        variant="outlined"
        name="aboutUs"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['aboutUs'],
        }}
        defaultValue={initialValues['aboutUs']}
      />
      <TextField
        id="privacy"
        label="Privacy"
        variant="outlined"
        name="privacy"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['privacy'],
        }}
        defaultValue={initialValues['privacy']}
      />
      <TextField
        id="terms"
        label="Terms"
        variant="outlined"
        name="terms"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['terms'],
        }}
        defaultValue={initialValues['terms']}
      />
      <TextField
        id="version"
        label="Version"
        variant="outlined"
        name="version"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['version'],
        }}
        defaultValue={initialValues['version']}
      />
      <TextField
        id="questions"
        label="FAQ"
        variant="outlined"
        name="questions"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['questions'],
        }}
        defaultValue={initialValues['questions']}
      />
      <Button 
        color="primary"
        variant="contained" 
        aria-label="update"
        type="submit"
      >
        Update
      </Button>
    </FormControl>
  )
}
export default Update