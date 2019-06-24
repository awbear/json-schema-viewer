"use strict";
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'json-schema-viewer.js',
    library: 'JsonSchemaViewer',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.css$/, loader: 'css-loader' },
    ],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}
