var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.json$/, loader: "json" }
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
