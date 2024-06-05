const path = require('path');
const packageJson =  require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = ({ mode }) => {
  return {
    mode: mode,
    entry: './src/index.js',
    output: {
      filename: `conversa-${packageJson.version}.js`,
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: 'umd'
      }
    },
    devServer: {
      static: './dist',
      port: 8083,
      client: { overlay: true },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/index.html',
      }),
      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.pug$/,
          use: 'pug-plain-loader'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'postcss-loader'],
        }
      ],
    },
  };
};
