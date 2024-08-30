/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Title from './Title';

const gradientCard = 'linear-gradient( to bottom,rgba(105,67,255,1)  0%,rgba(49,45,233,1) 100% )';
const gradientCircle = 'linear-gradient( to bottom,rgba(77,33,201,1)  0%,rgba(37,33,201,0) 100% )';

const cardStyle = css`
  background: ${gradientCard};
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
  background: ${gradientCircle};
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

const status = (theme) => css`
  color: ${theme.colors.white};
  font-size: 32px;
  line-height: 40px;
`;

const containerStatus = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 260px;
`;

const statusSubText = (theme) => css`
  color: ${theme.colors.lightBlue};
  opacity: 0.5;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
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
      <div css={containerStatus}>
        <div css={status}>Great</div>
        <div css={statusSubText}>You scored higher than 65% of the people who have taken these tests.</div>
      </div>
    </div>
  );
};

export default Card;