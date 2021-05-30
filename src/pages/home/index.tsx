import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import HomeLogo from './homeLogo';
import { HomeBtn } from '../../components';

export default function Home() {
  return (
    <HomeDiv>
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
        <HomeBtn text="Add to Server" href="/" />
        <ButtonSpacing />
        <HomeBtn text="Donate" href="/" />
      </Grid>
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
    background-color: #B8D8EB;
`;

const Title = styled.p`
    font-size: 64px;
    margin-top: 0;
    margin-bottom: 0;
`;

const SubText = styled.p`
    font-size: 22px;
`;

const ButtonSpacing = styled.div`
    padding-bottom: 2vh;
`;
