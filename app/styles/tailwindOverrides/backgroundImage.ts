import colors from "./colors";

export default {
  /* Background Image */
  /* ======================================== */
  'green-turquoise': `linear-gradient(210deg, ${colors.green} 0%, ${colors.turquoise} 100%)`,
  'blue-turquoise': `linear-gradient(190deg, ${colors.blue} 0%, ${colors.turquoise} 100%)`,
  'purple-turquoise': `linear-gradient(210deg, ${colors.purple} 0%, ${colors.turquoise} 100%)`,
  'purple-pink': `linear-gradient(231deg, ${colors.purple} 8.65%, ${colors.pink} 100%)`,
  'red-orange': `linear-gradient(139deg, ${colors['dark-red']} 28.19%, ${colors.red} 100%)`,
  'orange-yellow': `linear-gradient(237deg, ${colors.red} 28.19%, ${colors.orange} 48.24%, ${colors.yellow} 100%)`,
  'primary': `linear-gradient(210deg, ${colors.blue} 0%, ${colors.purple} 100%)`,
  'logo': `linear-gradient(275deg, ${colors['dark-purple']} 0.22%, ${colors.purple} 38.55%, ${colors.blue} 63.55%, ${colors.turquoise} 100%)`,
  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  'gradient': 'url("https://cdn.shopify.com/s/files/1/0598/4822/8886/files/gradient.jpg?v=1692886964")',
  'gradient-sm': 'url("https://cdn.shopify.com/s/files/1/0598/4822/8886/files/gradient-mobile.jpg?v=1692886965")'
};
