import { Router } from '@/routers/router';
import globalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
);
