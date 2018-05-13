const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "/dist");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader',
            {
              loader: 'stylus-loader',
            },
         ],
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.styl'] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    host: '192.168.253.128'
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin() 
  ]
};
