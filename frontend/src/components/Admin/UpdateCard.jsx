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
  // const { id } = useParams();
  const { data } = props;
  const adminFields = (data && data[0]) || {};
  const {    
    id="",   
    aboutUs="",
    questions="[]",
    privacy="",
    terms="",
    version="", 
  } = adminFields;

  const formik = useFormik({
    initialValues: {
      aboutUs,
      questions,
      privacy,
      terms,
      version,
    },
    onSubmit: async values => {
      console.log("values", values)
      setLoading(true);
      if (id) {
        await axios.post(`/admin/update/` + id, values);
      } else {
        await axios.post(`/admin/add/`, values);
      }
      setLoading(false);
    },
  });

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