var path  = require('path');

module.exports = {
  target: 'electron-main',
  node: {
    __dirname: true
  },
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
                 presets: ['react', 'es2015']
             },
             exclude: [
               path.resolve(__dirname, 'node_modules/')
             ]
         }
     ]
  }
};
