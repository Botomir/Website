import React from 'react';
import styled from 'styled-components';

function HomeLogo() {
  return (
    <BotomirLogo src="./botomir.png" alt="Botomir Logo" />
  );
}

const BotomirLogo = styled.img`
  height: 313px;
`;

export default HomeLogo;
