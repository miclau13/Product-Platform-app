import axios from 'axios';
import { useFormik, Formik } from 'formik';
import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Update from './Update';
import LoadingComponent from "../common/LoadingComponent";

const useStyles = makeStyles(theme => ({
  root: {
    width: '50vw',
  },
}));

export default function UpdateCard(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const { data } = props;
  const profile = data.filter(item => item.id === id)[0] || {};
  const { deviceId, rating, comments } = profile;

  console.log("deviceId",deviceId)

  const formik = useFormik({
    initialValues: {
      deviceId, 
      rating, 
      comments,
    },
    onSubmit: async values => {
      setLoading(true);
      await axios.post(`/profiles/update/`+ id, values);
      setLoading(false);
    },
  });

  React.useEffect(() => {
    formik.resetForm();
  }, [data])

  if (loading) {
    return (
      <LoadingComponent />
    )
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.onSubmit}
        >
          <Update formik={formik} />
        </Formik>
      </CardContent>
    </Card>
  );
}