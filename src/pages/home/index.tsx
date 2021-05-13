import React from 'react';
import HomeLogo from './homeLogo';
import { StylesDictionary } from '../../types/StylesDictionary';
import { AddToServerBtn, DonateBtn } from '../../components';

function Home() {
  return (
    <div className="Home" style={styles.home}>
      <HomeLogo />
      <h1>Botomir</h1>
      <h2>Your friendly neighbourhood Discord bot</h2>
      <AddToServerBtn text="Add to Server" href="/" />
      <div style={styles.donateBtn}>
        <DonateBtn text="Donate" href="/" />
      </div>
    </div>
  );
}

const styles: StylesDictionary = {
  home: {
    backgroundColor: '#B8D8EB',
    paddingBottom: '2.5rem',
    textAlign: 'center',
  },
  donateBtn: {
    paddingTop: '2vh',
  },
};

export default Home;
