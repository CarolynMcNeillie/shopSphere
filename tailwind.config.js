import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

import {
  animation,
  backgroundImage,
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  keyframes,
  maxWidth,
  minWidth,
  screens,
  spacing,
} from './app/styles/tailwindOverrides';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation,
      backgroundImage,
      borderRadius,
      boxShadow,
      colors,
      fontFamily,
      fontSize,
      keyframes,
      maxWidth,
      minWidth,
      screens,
      spacing,
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
