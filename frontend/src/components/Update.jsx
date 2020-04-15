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
        id="productName"
        label="Product Name"
        variant="outlined"
        name="productName"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['productName'],
        }}
        defaultValue={initialValues['productName']}
      />
      <TextField
        id="category"
        label="Category"
        variant="outlined"
        name="category"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['category'],
        }}
        defaultValue={initialValues['category']}
      />
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        name="price"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['price'],
        }}
        defaultValue={initialValues['price']}
      />
      <TextField
        id="origin"
        label="Origin"
        variant="outlined"
        name="origin"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['origin'],
        }}
        defaultValue={initialValues['origin']}
      />
      <TextField
        id="labels"
        label="Labels"
        variant="outlined"
        name="labels"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['labels'],
        }}
        defaultValue={initialValues['labels']}
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
        defaultValue={initialValues['rating']}
      />
      <TextField
        disabled
        id="productionDate"
        label="Production Date"
        variant="outlined"
        name="productionDate"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['productionDate'],
        }}
        defaultValue={initialValues['productionDate']}
      />
      <Button 
        // className={classes.button} 
        value={formik.values['productName']}
        color="primary"
        variant="contained" 
        aria-label="update"
        type="submit"
        // onClick={formik.onSubmit}
      >
        Update
      </Button>
    </FormControl>
  )
}
export default Update