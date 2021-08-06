import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Footer, NavBar } from './components';
import Router from './router';

// const endpoint: string = 'http://localhost:8000/';

export default function App() {
  useEffect(() => {
    axios.get('http://localhost:8000/ping/')
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

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
