import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import HomeLogo from './homeLogo';
import HomeButtons from './homeButtons';

export default function Home() {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: '80vh' }}
      >
        <HomeLogo />
        <Title>Botomir</Title>
        <SubText>Your friendly neighbourhood Discord bot</SubText>
        <HomeButtons />
      </Grid>
    </>
  );
}

const Title = styled.p`
    font-size: 64px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 200;
`;

const SubText = styled.p`
    font-size: 22px;
`;
