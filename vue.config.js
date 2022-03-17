const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/roundtable/'
    : '/',
  pwa: {
    themeColor: '#404184',
    msTileColor: '#000000',
    manifestOptions: {
      name: 'Roundtable',
      short_name: 'Roundtable'
    },
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png'
    }
  }
});
