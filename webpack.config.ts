import webpackNodeExternals from 'webpack-node-externals';
import path from 'path';

export default {
  mode: process.env.NODE_ENV || 'development',
  target: 'node' as const,
  entry: './src/index.ts',
  watch: process.env.NODE_ENV === 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
