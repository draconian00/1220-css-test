import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
  width: ${props => (props.isBig ? 200 : 100)}px;
  height: 50px;
  background-color: #aaa;
`;

function Box({ size }) {
  const isBig = size === 'big';
  const label = isBig ? 'big Box from 4' : 'small box from 4';
  return <BoxCommon isBig={isBig}>{label}</BoxCommon>
}

export default Box;