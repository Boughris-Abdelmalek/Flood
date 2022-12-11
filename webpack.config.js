const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  /* config.devServer = {
    proxy: {
      'api': 'https://go-upc.com/api/v1/code'
    }
  } */

  return config;
};