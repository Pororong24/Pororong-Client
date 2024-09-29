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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Noto Sans KR';
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
