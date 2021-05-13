import React from 'react';
import { Button } from '@material-ui/core';

function DonateBtn({ text, href }: Props) {
  return (
    <div className="DonateBtn">
      <Button variant="contained" color="primary" href={href}>{text}</Button>
    </div>
  );
}

interface Props {
    text: string
    href: string
}

export default DonateBtn;
