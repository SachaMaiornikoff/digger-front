import Config from 'webpack-config'

export default new Config({
  output: {
    filename: '[name].js'
  },
  resolve: {
    root: [__dirname],
    modulesDirectories: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      }
    ]
  }
})
