const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    // Entry point for files
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    // Output for bundles
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
            // Webpack plugin that generates html file and injects bundles
            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'PWA Text Editor'
              }),
             
              // Injects CUSTOM service worker
              new InjectManifest({
                swSrc: './src-sw.js',
                swDest: 'src-sw.js',
              }),
        
              // Creates a manifest.json file.
              new WebpackPwaManifest({
                fingerprints: false,
                inject: true,
                name: 'PWA Text Editor',
                short_name: 'Text Editor',
                description: 'Progressive Web Application',
                background_color: '#225ca3',
                theme_color: '#225ca3',
                start_url: './',
                publicPath: './',
                icons: [
                  {
                    src: path.resolve('src/images/logo.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    destination: path.join('assets', 'icons'),
                  },
                ],
              }),
    ],

    module: {
    // CSS loaders
      rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            // babel-loader to ensure backward compatibility with browsers for ES6
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
              },
            },
          },
      ],
    },
  };
};
