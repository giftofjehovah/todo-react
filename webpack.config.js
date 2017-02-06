const path = require('path')
const config = {
  entry: './src/components/App.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
}
module.exports = config
