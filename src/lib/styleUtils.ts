import memoizeOne from 'memoize-one';

export const boxShadow = memoizeOne((blurLevel: number = 0) => {
  const boxShadowBlurPixel = (blurLevel * 2 + 3) * 2;
  return `box-shadow: 0 4px ${boxShadowBlurPixel}px 0 rgba(0, 0, 0, 0.37)`;
});
