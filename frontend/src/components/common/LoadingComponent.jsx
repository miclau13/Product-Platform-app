import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadingComponent({ loading=true }) {
  if (!loading) return null
  return (
    <CircularProgress height={300}/> 
  );
}