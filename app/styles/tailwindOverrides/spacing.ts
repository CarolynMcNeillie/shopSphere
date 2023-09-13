const spacing: {[key: number]: string} = {};

// Calculate all possibly requred pixel values up to the container width of 1680px
//and calculate as base-16 rems
for (let i = 1; i <= 1680; i++) {
  spacing[i] = `${i / 16}rem`;
}

/**
 * Spacing affects:
 * - [border spacing](https://tailwindcss.com/docs/border-spacing) // Note: TABLES, not border-width
 * - [flex basis](https://tailwindcss.com/docs/flex-basis)
 * - [gap](https://tailwindcss.com/docs/gap)
 * - [height](https://tailwindcss.com/docs/height)
 * - [inset](https://tailwindcss.com/docs/top-right-bottom-left)
 * - [letter spacing](https://tailwindcss.com/docs/letter-spacing)
 * - [margin](https://tailwindcss.com/docs/margin)
 * - [max height](https://tailwindcss.com/docs/max-height)
 * - [padding](https://tailwindcss.com/docs/padding)
 * - [scroll margin](https://tailwindcss.com/docs/scroll-margin)
 * - [scroll padding](https://tailwindcss.com/docs/scroll-padding)
 * - [space](https://tailwindcss.com/docs/space) // For FLEXBOX space-between
 * - [text indent](https://tailwindcss.com/docs/text-indent)
 * - [transform: translate](https://tailwindcss.com/docs/translate)
 * - [width](https://tailwindcss.com/docs/width)
 * - [max width] - custom addition
 * - [min width] - custom addition
 */

export default {
  ...spacing,
  'modal-width': '62.5rem' // 1000px
};
