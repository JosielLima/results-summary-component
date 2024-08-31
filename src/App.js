import theme from './theme'
import { Global, css } from '@emotion/react'
import { ThemeProvider } from '@emotion/react';
import Main from './pages/Main'

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
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
