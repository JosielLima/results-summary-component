/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '../components/Card'
import Title from '../components/Title';
import ResultDetail from '../components/ResultDetail';

const container = (theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100vh;
`;

const content = (theme) => css`
  background: ${theme.colors.white};
  max-width:736px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 32px;
  box-shadow: 10px 0px 30px rgba(61, 108, 236, 0.1);
  @media (max-width: 375px) {
     grid-template-columns: 1fr;
  }
`;

const details = (theme) => css`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 0px 38px 40px 40px;
  border-radius-top-right: 32px;
  border-radius: 32px;
`;

const boxResults = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const btn = (theme) => css`
  background: ${theme.colors.primary};
  border-radius: 128px;
  border: none;
  color: ${theme.colors.white};
  font-weight: 500;
  width: 100%;
  height: 56px;
  font-size: ${theme.typographySize.body};
  cursor: pointer;
  &:hover {
     background: ${theme.colors.gradientPrimary};
  }
`;

const Main = () => {
  return (
    <div css={container}>
      <div css={content}>
      <Card/>
      <div css={details}>
        <Title primary>Summary</Title>
        <div css={boxResults}>
          <ResultDetail type="Reaction" value="80" />
          <ResultDetail type="Memory" value="92" />
          <ResultDetail type="Verbal" value="61" />
          <ResultDetail type="Visual" value="72" />
        </div>
        <button css={btn}>Continue</button>
      </div>
    </div>
    </div>
  )
}

export default Main