import './App.css';
import Card from './components/Card'
import theme from './theme'
import { Global, css } from '@emotion/react'
import { ThemeProvider } from '@emotion/react';

const container = (theme) => css`
  background: ${theme.colors.white};
  width:736px;
  display: grid;
  template-columns: 1fr 1fr;
  border-radius: 32px;
  border: 1px solid red;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Global
          styles={css`
            @font-face {
                  font-family: 'HankenGrotesk';
                  font-style: normal;
                  font-weight: 700;
                  src: local(''), 
                      url('/fonts/HankenGrotesk-VariableFont_wght.ttf') format('truetype');
              }

              * {
                  box-sizing: border-box;
                  font-family: HankenGrotesk;
              }
          `}
        />
        <section css={container}>
          <Card/>
          <div>
                Summary
            Reaction 80 / 100
            Memory 92 / 100
            Verbal 61 / 100
            Visual 72 / 100
            Continue
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
