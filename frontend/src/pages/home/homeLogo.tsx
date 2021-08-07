import React from 'react';
import styled from 'styled-components';

export default function HomeLogo() {
  return (
    <BotomirLogo src="/static/botomir.png" alt="Botomir Logo" />
  );
}

const BotomirLogo = styled.img`
  height: 40vh;
  max-height: 500px;
  min-height: 250px;
`;
