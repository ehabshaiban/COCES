const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/assets/js/app.js'),
      path.resolve(__dirname, 'src/assets/styles/app.scss'),
    ],
    home: path.resolve(__dirname, 'src/assets/js/home.js'),
    product: path.resolve(__dirname, 'src/assets/js/product.js'),
    cart: path.resolve(__dirname, 'src/assets/js/cart.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
