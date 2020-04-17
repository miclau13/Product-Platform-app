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
    width: '80vw',
  },
  table: {
    maxHeight: '60vh'
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
    await axios.get(`/products?name=${input}`);
    setLoading(false);
  }, [input]);

  const handleTableRowOnClick = React.useCallback((id) =>(e) => {
    history.push(`/product/${id}`);
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
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Origin</TableCell>
                  <TableCell align="right">Labels</TableCell>
                  <TableCell align="right">Rating</TableCell>
                  {/* <TableCell align="right">Saved</TableCell> */}
                  <TableCell align="right">Production Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => {
                  const { id, category, labels, origin, price, productName, productionDate, rating } = row;
                  return (
                    <TableRow hover key={id} className={classes.hover} onClick={handleTableRowOnClick(row.id)} >
                      <TableCell component="th" scope="row">
                        {productName}
                      </TableCell>
                      <TableCell align="right">{category}</TableCell>
                      <TableCell align="right">{price}</TableCell>
                      <TableCell align="right">{origin}</TableCell>
                      <TableCell align="right">{labels}</TableCell>
                      <TableCell align="right">{rating}</TableCell>
                      {/* <TableCell align="right">{saved}</TableCell> */}
                      <TableCell align="right">{productionDate}</TableCell>
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