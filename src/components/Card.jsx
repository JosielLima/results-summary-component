/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Title from './Title';

const cardStyle = css`
  background-color: #6943FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
    height: 512px;
  width: 368px;
`;

const grade = css`
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const note = (theme) => css`
  color: ${theme.colors.white};
  font-size: 72px;
  font-weight: bold;
`;

const total = (theme) => css`
  color: ${theme.colors.white};
  opacity: 0.5;
`;

const Card = () => {
  return (
    <div css={cardStyle}>
      <Title>
        Your Result
      </Title>
      <div css={grade}>
        <div css={note}>76</div>
        <div css={total}>of 100</div>
      </div>
        Great
      You scored higher than 65% of the people who have taken these tests.
      Summary
      Reaction 80 / 100
      Memory 92 / 100
      Verbal 61 / 100
      Visual 72 / 100
      Continue
    </div>
  );
};

export default Card;