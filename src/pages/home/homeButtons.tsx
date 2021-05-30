import React from 'react';
import styled from 'styled-components';
import { HomeBtn } from '../../components/buttons';

export default function HomeButtons() {
  return (
    <>
      <HomeBtn text="Add to Server" href="/" />
      <ButtonSpacing />
      <HomeBtn text="Donate" href="/" />
    </>
  );
}

const ButtonSpacing = styled.div`
    padding-bottom: 2vh;
`;
