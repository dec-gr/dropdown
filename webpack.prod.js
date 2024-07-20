const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'dropdown-menu.js',
    globalObject: 'this',
    library: {
      name: 'dropDownMenu',
      type: 'umd',
      export: 'default',
    },
    clean: true,
  },
});
