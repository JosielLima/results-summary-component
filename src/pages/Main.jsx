/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '../components/Card'
import Title from '../components/Title';

const container = (theme) => css`
  background: ${theme.colors.white};
  width:736px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 32px;
  border: 1px solid red;
  height: 512px;
`;

const details = (theme) => css`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 0px 38px 40px 40px;
`;

const btn = (theme) => css`
  background: ${theme.colors.primary};
  border-radius: 128px;
  border: none;
  color: ${theme.colors.white};
  font-weight: 500;
  width: 100%;
  height: 56px;
  cursor: pointer;
  &:hover {
     background: ${theme.colors.gradientPrimary};
  }
`;

const Main = () => {
  return (
    <div css={container}>
      <Card/>
      <div css={details}>
        <Title primary>Summary</Title>
        <div>
          Reaction 80 / 100
          Memory 92 / 100
          Verbal 61 / 100
          Visual 72 / 100
        </div>
        <button css={btn}>Continue</button>
      </div>
    </div>
  )
}

export default Main