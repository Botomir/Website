import React from 'react';
import styled from 'styled-components';
import HomeLogo from './homeLogo';
import { HomeBtn } from '../../components';

export default function Home() {
  return (
    <HomeDiv>
      <HomeLogo />
      <Title>Botomir</Title>
      <SubText>Your friendly neighbourhood Discord bot</SubText>
      <HomeBtn text="Add to Server" href="/" />
      <div style={{ paddingBottom: '2vh' }} />
      <HomeBtn text="Donate" href="/" />
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
    background-color: #B8D8EB;
    padding-top: 10vh;
    padding-bottom: 2.5rem;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 56px;
    margin-top: 0;
    margin-bottom: 0;
`;

const SubText = styled.p`
    font-size: 22px;
`;
