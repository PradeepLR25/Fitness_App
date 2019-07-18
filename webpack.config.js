const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendor: ['react', 'react-dom', 'react-router-dom', 'whatwg-fetch', 'babel-polyfill'],
  },
  output: {
    path: './static',
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({
      '$': 'jquery/dist/jquery.slim.js',
      'jQuery': 'jquery/dist/jquery.slim.js',
      'Popper': 'popper.js/dist/umd/popper'
        // $: 'jquery',
        // jQuery: 'jquery',
        // 'window.jQuery': 'jquery',
        // Popper: ['popper.js', 'default'],
        // // In case you imported plugins individually, you must also require them here:
        // Util: "exports-loader?Util!bootstrap/js/dist/util",
        // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader" 
      },
      {  
        test: /\.(scss)$/,
        loaders: [{
        loader: 'style-loader', // inject CSS to page
      }, 
      {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, 
      {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, 
      {
        loader: 'sass-loader' // compiles SASS to CSS
      }]
      }
    ],
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      },
    },
  },
  devtool: 'source-map',
};
