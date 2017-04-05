// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = function(storybookBaseConfig, configType) {
    storybookBaseConfig.module.loaders.push(
        {
            test: /\.css$/,
            loader: 'style!css?importLoaders=1!postcss'
        }, {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            loader: 'file',
            query: {
                name: 'static/media/[name].[hash:8].[ext]'
            }
        },
        {
            test: /\.scss$/,
            loader: 'style!css?importLoaders=1!postcss!sass'
        }
    );

    storybookBaseConfig.postcss = function() {
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
    };

    // Return the altered config
    return storybookBaseConfig;
};
