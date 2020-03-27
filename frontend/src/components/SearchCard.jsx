import axios from 'axios';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';

import Search from './Search';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70vw',
  },
  table: {
    maxHeight: '50vh'
  }
}));

const dataTypeMap = new Map([
  [1, "masculine"],
  [2, "feminine"],
  [0, "ambiguous"]
])
const dataGenderMap = new Map([
  [1, "male"],
  [2, "female"]
])
const dataColorMap = new Map([
  [1, blue[500]],
  [2, pink[200]]
])

export default function SearchCard() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [input, setInput] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const onChange = (e) => {
    setInput(e.target.value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await axios.get(`/users?firstname=${input}`);
    setLoading(false);
    setData(result.data) 
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Search onSubmit={onSubmit} onChange={onChange} />
        {loading ?  
          <CircularProgress height={300}/> :
          <TableContainer className={classes.table}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Priority gender</TableCell>
                  <TableCell align="right">Origin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => {
                  const { type, gender, origin } = row;
                  const _type = dataTypeMap.get(type);
                  const _gender = dataGenderMap.get(gender);
                  const _color = dataColorMap.get(type);
                  return(
                    <TableRow key={row.id} style={{ backgroundColor: _color }}>
                      <TableCell component="th" scope="row">
                        {row.label}
                      </TableCell>
                      <TableCell align="right">{_type}</TableCell>
                      <TableCell align="right">{_gender}</TableCell>
                      <TableCell align="right">{origin}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>    
        }
      </CardContent>
    </Card>
  );
}