const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  entry: './src/index.ts',
  watch: process.env.NODE_ENV === 'development',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: 'ts-loader',
      },
      {
        test: /\.sql$/i,
        exclude: /(node_modules|bower_components)/,
        use: 'raw-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.json', '.sql'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  externals: [webpackNodeExternals()],
};
