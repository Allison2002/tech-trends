module.exports = {
  plugins: [
    require('postcss-purgecss')({
      content: ['./src/**/*.html'],
    }),
  ],
};
