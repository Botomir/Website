import React from 'react';
import styled from 'styled-components';

export default function Marshall() {
  return (
    <>
      <Name>Marshall Asch</Name>
      <Bio>
        Hey, I started working on Botomir because &quoot;why not do one more little project?&quoot;
        I love the idea of having one big super configurable bot for the server that can
        do all the things, so I started making all the things.
      </Bio>
      <figure>
        <blockquote cite="http://www.imdb.com/title/tt0107290/quotes">
          <p>
            &quoot;[We] were so preoccupied with whether or not [we] could that [we] didn&apos;t
            stop to think if [we] should [add the cool new feature].&quot;
            — Dr. Ian Malcolm,
            {' '}
            <cite>Jurassic Park.</cite>
          </p>
        </blockquote>
      </figure>
      <Bio>
        I think that
        {' '}
        <i>slight</i>
        {' '}
        misquote from the movie Jurassic Park, accurately describes what we have done with Botomir. For me
        working on this project has been an awesome way to work on writing more modular code, and
        {' '}
        <b>willingly</b>
        {' '}
        work with a friend on a project that the University is not forcing us to do.

        If you want to checkout what else I have done checkout my website and my Github page.
      </Bio>
      <div style={{ textAlign: 'center' }}>
        <Link href="https://marshallasch.ca" target="_blank" rel="noreferrer">marshallasch.ca</Link>
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
