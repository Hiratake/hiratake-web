// ================================================================================
// (c) 2020 Hiratake
// Webpack.config.js
// ================================================================================

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ]
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
