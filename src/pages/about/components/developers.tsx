import React from 'react';
import { Grid } from '@material-ui/core';
import Sooraj from './sooraj';
import Marshall from './marshall';
import Kiara from './kiara';

export default function Developers() {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item md={4} sm={12}>
        <img src="./soorajmodi.jpg" alt="Sooraj Modi" style={imgStyle} />
      </Grid>
      <Grid item md={8} sm={12} style={{ width: '100%' }}>
        <Sooraj />
      </Grid>

      <Grid item md={4} sm={12}>
        <img src="./marshallasch.jpg" alt="Sooraj Modi" style={imgStyle} />
      </Grid>
      <Grid item md={8} sm={12} style={{ width: '100%' }}>
        <Marshall />
      </Grid>

      <Grid item md={4} sm={12}>
        <img src="./kiaracallender.jpg" alt="Sooraj Modi" style={imgStyle} />
      </Grid>
      <Grid item md={8} sm={12} style={{ width: '100%' }}>
        <Kiara />
      </Grid>
    </Grid>
  );
}

const imgStyle = {
  width: '100%',
  borderRadius: '5px',
};
