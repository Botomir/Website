import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import AboutBotomir from './aboutBotomir';

export default function About() {
  return (
    <Container>
      <Title>About Botomir</Title>
      <AboutBotomir />
      <SubTitle>Meet the Devs</SubTitle>
    </Container>
  );
}

const Title = styled.p`
    font-size: 64px;
    margin-top: 5vh;
    margin-bottom: 0;
    font-weight: 300;
    text-align: center;
`;

const SubTitle = styled.p`
    font-size: 36px;
    font-weight: 300;
    margin-top: 0;
`;
