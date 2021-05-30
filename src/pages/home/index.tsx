import React from 'react';
import { Container } from '@material-ui/core';
import HomeLogo from './homeLogo';
import { StylesDictionary } from '../../types/StylesDictionary';
import { HomeBtn } from '../../components';

function Home() {
  return (
    <div className="Home" style={styles.home}>
      <HomeLogo />
      <h1>Botomir</h1>
      <p style={styles.subtext}>Your friendly neighbourhood Discord bot</p>
      <Container>
        <HomeBtn text="Add to Server" href="/" />
        <div style={styles.donateBtn}>
          <HomeBtn text="Donate" href="/" />
        </div>
      </Container>
    </div>
  );
}

const styles: StylesDictionary = {
  home: {
    backgroundColor: '#B8D8EB',
    paddingTop: '10vh',
    paddingBottom: '2.5rem',
    textAlign: 'center',
  },
  subtext: {
    fontSize: '22px',
  },
  donateBtn: {
    paddingTop: '2vh',
  },
};

export default Home;
