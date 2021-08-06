import React from 'react';
import { StylesDictionary } from '../../types/StylesDictionary';

export default function Footer() {
  return (
    <div className="footer" style={styles.footer}>
      <p style={styles.footerText}>Footer</p>
    </div>
  );
}

const styles: StylesDictionary = {
  footer: {
    background: '#0F5376',
    paddingTop: '1.0rem',
    paddingBottom: '1.0rem',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    textAlign: 'center',
    display: 'block',
    height: '2.5rem',
  },
  footerText: {
    color: 'white',
  },
};
