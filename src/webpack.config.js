const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // other webpack configurations...
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "url": require.resolve("url/"),
      "https": require.resolve("https-browserify"),
    },
  },
};
