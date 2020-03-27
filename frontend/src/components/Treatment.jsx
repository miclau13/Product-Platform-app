import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  button: {
    marginLeft: 10,
  },
}));

const Treatment = React.forwardRef((props, ref) => {
  const { onSubmit } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmit}>
      <TextField
        name="upload-file"
        type="file"
        inputRef={ref}
      />
      <Button 
        className={classes.button} 
        color="primary"
        variant="contained" 
        aria-label="upload"
        type="submit"
      >
        Validate
      </Button>
    </Paper>
  );
} )
export default Treatment