const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    "./js/app.js",
    "./scss/main.scss",
  ],
  output: {
   path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  watch: true, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env"] 
      },
     },
    ],
  },
};