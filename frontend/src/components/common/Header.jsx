import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.Toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const pathMap = [
  'product',
  'profile',
  'admin-panel',
];

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname.split('/')[1];

  const [value, setValue] = React.useState(pathMap.indexOf(path));
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.replace(`/${pathMap[newValue]}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          centered
        >
          <Tab label="Product" />
          <Tab label="Profile" />
          <Tab label="Others" />
        </Tabs>
      </AppBar>
    </div>
  );
}