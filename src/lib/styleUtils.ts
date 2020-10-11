import memoizeOne from 'memoize-one';
import { css } from 'styled-components';

export const boxShadow = memoizeOne((blurLevel: number = 0) => {
  const boxShadowBlurPixel = (blurLevel * 2 + 3) * 2;
  return `box-shadow: 0 4px ${boxShadowBlurPixel}px 0 rgba(0, 0, 0, 0.37)`;
});

export const focusedInputStyle = css`
  outline: none;
  border: 1px solid #5d95ff;
  transition: border 0.25s ease;
`;
