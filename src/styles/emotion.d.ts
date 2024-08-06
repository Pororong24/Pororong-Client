import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: typeof import('@/styles/color').color;
    font: typeof import('@/styles/font').font;
  }
}
