import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Search(props) {
  const { onSubmit, onChange } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmit}>
      <InputBase
        autoFocus
        onChange={onChange}
        className={classes.input}
        placeholder="Search By Name"
        inputProps={{ 'aria-label': 'name' }}
      />
      <IconButton 
        className={classes.iconButton} 
        aria-label="search"
        type="submit"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}