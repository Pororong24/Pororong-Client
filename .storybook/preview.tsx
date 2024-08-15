import type { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import globalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Global styles={globalStyles} />
            <Story />
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export default preview;
