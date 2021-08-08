import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="https://github.com/Botomir" target="_blank">
        <FaGithub size={25} />
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: #0F5376;
  padding-top: 1.0rem;
  padding-bottom: 1.0rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: block;
`;

const Link = styled.a`
  color: white;
`;
