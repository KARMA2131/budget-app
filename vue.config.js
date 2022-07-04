const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true
});

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/budget-app/'
//     : '/'
// }

module.exports = {
  devServer: {
    port: 5000
  }
};