// ================================================================================
// (c) 2020 Hiratake
// Webpack.config.js
// ================================================================================

const path = require( 'path' );
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
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use:[
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require( 'autoprefixer' )({
                  grid: true
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, './src/sass/_reset.scss'),
                path.resolve(__dirname, './src/sass/_colors.scss'),
                path.resolve(__dirname, './src/sass/_variables.scss'),
                path.resolve(__dirname, './src/sass/_mixin.scss'),
                path.resolve(__dirname, './src/sass/_base.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ],
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
