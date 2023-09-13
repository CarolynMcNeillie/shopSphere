import spacing from './spacing';
/**
 * Calculate clamp() value for proportional font sizing
 * https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
 */
const calculateClamp = (minFontSize: number, maxFontSize: number) => {
  // TODO: Pull this from tailwind config
  const maxViewport = 1680;
  const minViewport = 768;

  const slope = (maxFontSize - minFontSize) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minFontSize;
  const vw = `${slope * 100}vw`;
  const scalingFactor = `${yAxisIntersection}px + ${vw}`;
  const minFontSizeRem = `${minFontSize / 16}rem`;
  const maxFontSizeRem = `${maxFontSize / 16}rem`;
  return `clamp(${minFontSizeRem}, ${scalingFactor}, ${maxFontSizeRem})`;
};

export default {
  /* fontSize */
  // Using default tailwind spacing scale, 1rem = 16px
  // https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale

  /* ======================================== */
  // 'size-title-1': [
  //   calculateClamp(80, 100),
  //   {lineHeight: '1.1', letterSpacing: '0.0125em'},
  // ],
  ...spacing,
};
