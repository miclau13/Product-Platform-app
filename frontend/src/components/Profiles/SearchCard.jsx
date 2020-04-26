import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Search from './Search';
import UpdateCard from './UpdateCard';
import LoadingComponent from "../common/LoadingComponent";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
  },
  table: {
    maxHeight: '100vh'
  },
  hover: {
		cursor: 'pointer',
  }
}));

export default function SearchCard(props) {
  const { data = [] } = props;
  const classes = useStyles();
  const history = useHistory();
  // const [data, setData] = React.useState([]);
  const [input, setInput] = React.useState();
  const [loading, setLoading] = React.useState(false);
  
  const onChange = React.useCallback((e) => {
    setInput(e.target.value);
  }, [setInput]);

  const onSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.get(`/profiles?id=${input}`);
    setLoading(false);
  }, [input]);

  const handleTableRowOnClick = React.useCallback((id) =>(e) => {
    history.push(`/profile/${id}`);
  }, []);

  if (loading) {
    return (
      <LoadingComponent />
    )
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Search onSubmit={onSubmit} onChange={onChange} />
          <TableContainer className={classes.table}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DeviceId</TableCell>
                  <TableCell align="right">Comments</TableCell>
                  <TableCell align="right">Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => {
                  const { id, deviceId, rating, comments } = row;
                  return (
                    <TableRow hover key={id} className={classes.hover} onClick={handleTableRowOnClick(row.id)} >
                      <TableCell component="th" scope="row">
                        {deviceId}
                      </TableCell>
                      <TableCell align="right">{comments}</TableCell>
                      <TableCell align="right">{rating}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer> 
      </CardContent>
    </Card>
  );
}