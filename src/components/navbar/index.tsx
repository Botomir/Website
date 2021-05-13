import React from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@material-ui/core';

function NavBar() {
  return (
    <div className="navbar">
      <AppBar position="static" style={{ backgroundColor: '#0F5376' }}>
        <Toolbar>
          <Typography variant="h6">
            <a href="/" style={styles.homeLink}>Botomir</a>
          </Typography>
          <div style={styles.links}>
            <Button color="inherit" href="/documentation">Docs</Button>
            <Button color="inherit" href="/statistics">Stats</Button>
            <Button color="inherit" href="/about">About</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
  links: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  homeLink: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default NavBar;
