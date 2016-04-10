var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" }
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
Status API Training Shop Blog About
