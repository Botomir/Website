import React from 'react';
import { StylesDictionary } from '../../types/StylesDictionary';

function HomeLogo() {
  return (
    <img src="./botomir.png" alt="Botomir Logo" style={styles.HomeLogo} />
  );
}

const styles: StylesDictionary = {
  HomeLogo: {
    height: '313px',
  },
};

export default HomeLogo;
