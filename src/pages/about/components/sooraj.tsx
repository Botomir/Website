import React from 'react';
import styled from 'styled-components';

export default function Sooraj() {
  return (
    <>
      <Name>Sooraj Modi</Name>
      <Bio>
        Hello, and welcome to Botomir! This project originally because I wanted to add fun features
        to a server I shared with some friends. Ever since then its grown and gained tons of cool
        features. I loved seeing the application evolve, adding to new pieces, and watching it take
        shape. We have big plans for the future of Botomir, and we are constantly in an effort to
        improve it. If you notice any bugs or what to request features, please feel free to contact
        us.
      </Bio>
      <Bio>
        Botomir taught me a ton about application development and I&apos;m very proud of what we&apos;ve built.
        This includes a greater understanding of MongoDB, JavaScript, and how to reliably deploy web
        applications. I love creating and building things that people love to use, so I am
        constantly working on side projects. If you have any questions, or would like to learn more
        about me, please take a look at my website.
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
