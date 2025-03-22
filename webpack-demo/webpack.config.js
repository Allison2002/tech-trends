const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = {
  // Entry and Output (adjust as needed)
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                  require('@fullhuman/postcss-purgecss')({
                    content: [
                      path.join(__dirname, 'src/**/*.html'),
                      path.join(__dirname, 'src/**/*.js'),
                    ],
                    // Whitelist any classes you want to keep
                    safelist: ['safelist-class'],
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
    }),
  ],
};
