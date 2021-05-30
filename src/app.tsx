import React from 'react';
import styled from 'styled-components';
import { Footer, NavBar } from './components';
import Router from './router';

export default function App() {
  return (
    <AppContainer>
      <NavBar />
      <Router />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
    background-color: #B8D8EB;
    position: relative;
    min-height: 100vh;
    width: 100vw;
`;
