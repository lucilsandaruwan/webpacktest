
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'main.js'),
      path.resolve(__dirname, 'modules/operations.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]'
  },
  watch: true
};