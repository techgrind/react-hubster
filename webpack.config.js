var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');


var config = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      chunkFilename: 'chunk.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;