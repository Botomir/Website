import React from 'react';
import { Footer, NavBar } from './components';
import { StylesDictionary } from './types/StylesDictionary';
import Router from './router';

function App() {
  return (
    <div className="App" style={styles.app}>
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

const styles:StylesDictionary = {
  app: {
    backgroundColor: '#B8D8EB',
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
  },
};

export default App;
