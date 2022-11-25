const paths = require('./paths');
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `${paths.src}/index.js`,
  output: {
    path: paths.build,
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    port: 3000,
    hot: true,
  },

  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      }
    ],
  },

  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote: `remote@http://localhost:3001/remoteEntry.js`,
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
    }),
  ],



  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  }
};