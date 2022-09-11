const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const { override, addWebpackPlugin } = require('customize-cra')

// 对webpack config 进行增量覆盖
module.exports = override(
  addWebpackPlugin(new ArcoWebpackPlugin({ style: true }))
)