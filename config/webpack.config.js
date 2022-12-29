const paths = require('./paths');
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const deps = require('../package.json').dependencies;

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
        test: /\.?js|jsx$/,
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
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
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