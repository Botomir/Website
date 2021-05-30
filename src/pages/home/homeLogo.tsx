import React from 'react';
import styled from 'styled-components';

function HomeLogo() {
  return (
    <BotomirLogo src="./botomir.png" alt="Botomir Logo" />
  );
}

const BotomirLogo = styled.img`
  height: 40vh;
  max-height: 500px;
`;

export default HomeLogo;
