const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');

const extractCSS = new ExtractTextPlugin({filename: 'css/bundle.css'});
const src = './src';
const dist = './dist';

const MODE = 'none';
// const enableSourceMap = (MODE === 'none');

module.exports = [
    {
        mode: MODE,
        entry: {
            'js/main': `${src}/js/main/index.js`
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(dist),
            // publicPath: '/'
            publicPath: 'http://localhost:8888/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        target: 'electron-main',
        node: {
            __dirname: false
        }
    },
    {
        mode: MODE,
        entry: {
            'js/renderer': `${src}/js/renderer/index.js`
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(dist),
            // publicPath: '/'
            publicPath: 'http://localhost:8888/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.(scss)$/,
                    use: extractCSS.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader?modules&camelCase&importLoaders=2&localIdentName=[name]---[local]---[hash:base64:5]',
                            'postcss-loader',
                            'sass-loader'
                        ]
                    })
                }
            ]
        },
        resolve: {
            alias: {
                Js: path.resolve(`${src}/js`),
                Scss: path.resolve(`${src}/scss`),
            },
            extensions: ['.js', '.jsx', '.scss'],
        },
        // target: 'electron-renderer',
        target: 'web',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'dist/index.html'
            }),
            extractCSS
        ],
        node: {
            __dirname: false
        }
    }
];
