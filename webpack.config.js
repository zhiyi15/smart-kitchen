const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /s?css$/,
        use: ['style-loader','css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      // match the output path
      directory: path.join(__dirname, '/dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    proxy: {
      '/api': 'http://localhost:3000/',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Developpment',
      template: "./index.html",
    }),
  ],
};
