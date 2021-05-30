import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
    text: string
    href: string
}

function HomeBtn({ text, href }: Props) {
  return (
    <>
      <Button variant="outlined" color="primary" size="large" href={href} style={style}>{text}</Button>
    </>
  );
}

const style = {
  color: '#000',
  backgroundColor: '#65C3E9',
  width: '400px',
  border: '2px solid',
};

export default HomeBtn;
