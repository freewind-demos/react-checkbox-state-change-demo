module.exports = {
  entry: './entry.jsx',
  output: {
    path: __dirname + '/assets/',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  }
};