import React from 'react';
import styled from 'styled-components';

export default function AboutKiara() {
  return (
    <>
      <Name>Kiara Callender</Name>
      <Bio>
        Hey everyone its the drawing behind Botomir! It has been such an amazing time working on Botomir
        with some amazing colleagues and I really hope that all of you can enjoy Botomir to the same extent
        we have! I&apos;m honored to be a face behind the Botomir and enjoy our creation
      </Bio>
      <div style={{ textAlign: 'center' }}>
        <Link href="https://soorajmodi.com" target="_blank" rel="noreferrer">soorajmodi.com</Link>
      </div>
    </>
  );
}

const Name = styled.p`
    font-size: 28px;
    text-align: center;
    margin-top: 10px;
`;

const Bio = styled.p`
    font-size: 18px;
    line-height: 1.4;
`;

const Link = styled.a`
    text-decoration: none;
    color: #000;
`;
