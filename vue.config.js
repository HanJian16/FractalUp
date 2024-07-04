const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'react': path.resolve(__dirname, 'node_modules/empty-module'),
        'react-dom': path.resolve(__dirname, 'node_modules/empty-module'),
      }
    },
    // plugins: [
    //   new webpack.DefinePlugin({
    //     __VUE_OPTIONS_API__: JSON.stringify(true),
    //     __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    //     __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
    //   })
    // ]
  }
})
