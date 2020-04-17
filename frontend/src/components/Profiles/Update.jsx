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
        id="deviceId"
        label="Device Id"
        variant="outlined"
        name="deviceId"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['deviceId'],
        }}
        defaultValue={initialValues['deviceId']}
      />
      <TextField
        id="comments"
        label="Comments"
        variant="outlined"
        name="comments"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['comments'],
        }}
        defaultValue={initialValues['comments']}
      />
      <TextField
        id="rating"
        label="Rating"
        variant="outlined"
        name="rating"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['rating'],
        }}
        defaultValue={initialValues['Rrating']}
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