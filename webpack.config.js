var path  = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
     loaders: [
         {
             test: /\.js$/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'react']
             },
             exclude: [
               path.resolve(__dirname, 'node_modules/')
             ]
         }
     ]
  },
  watch: true
};
