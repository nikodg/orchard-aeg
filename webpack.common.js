const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          inlineRequires: '/images/'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home | AEG',
      template: 'src/pages/home.hbs',
      filename: 'index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/component-01', to: 'assets/component-01' },
        { from: 'src/assets/component-02', to: 'assets/component-02' },
      ],
    }),
  ],
}