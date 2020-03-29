import axios from 'axios';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import ImportData from './ImportData';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70vw',
  },
  table: {
    maxHeight: '50vh'
  }
}));


export default function ImportDataCard() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const fileInputRef = React.useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    setLoading(true);
    // const response = await axios.post(`/import_data`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   responseType: 'blob'
    // });  
    const response = await axios.post(`http://localhost:5000/products/import`, formData, {
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'blob'
    });  

    // const url = window.URL.createObjectURL(new Blob([response.data]));
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('download', 'import_after_treatment.csv');
    // document.body.appendChild(link);
    // link.click();
    setLoading(false);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <ImportData onSubmit={onSubmit} ref={fileInputRef}/>
        {loading ?  
          <CircularProgress height={300}/> :
            null
        }
      </CardContent>
    </Card>
  );
}