// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
        {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.css$/,
                /\.json$/,
                /\.svg$/,
                /\.scss$/
            ],
            loader: 'url',
            query: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]'
            }
        },
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, '../src'),
            loader: 'babel',
            query: {
                cacheDirectory: true
            }
        },
        {
            test: /\.css$/,
            loader: 'style!css?importLoaders=1!postcss'
        },
        {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.svg$/,
            loader: 'file',
            query: {
                name: 'static/media/[name].[hash:8].[ext]'
            }
        },
        {
            test: /\.scss$/,
            loader: 'style!css?importLoaders=1!postcss!sass'
        }
    ],
  },
  postcss: function() {
      return [
          autoprefixer({
              browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
              ]
          }),
      ];
  },
};
