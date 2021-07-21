const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, './src/index')],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ baseUrl: 'src' })],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new CSSMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico|ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: path.resolve(__dirname, './build/images'),
        },
      ],
    }),
  ],
};
