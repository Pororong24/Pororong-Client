import { css } from '@emotion/css';
import emotionReset from 'emotion-reset';

const globalStyles = css`
  ${emotionReset}
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/src/assets/fonts/NotoSans.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: 'Noto Sans KR';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
  }
  div {
    box-sizing: border-box;
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default globalStyles;
