module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    '@csstools/postcss-oklab-function': {preserve: true},
    autoprefixer: {},
    'postcss-preset-env': {
      features: {'nesting-rules': false},
    },
  },
};
