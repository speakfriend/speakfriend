var path = require("path");

//
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development" // TODO: setup NODE_ENV somehow
});

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },

  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].js"
  },

  module: {
    rules: [

      { test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        // loader: "elm-webpack-loader?verbose=true&warn=true"
        loader: "elm-webpack-loader?verbose=true&warn=true&debug=true&cache=false",
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ],

    noParse: /\.elm$/
  },

  plugins: [
    extractSass
  ],

  devServer: {
    inline: true,
    stats: { colors: true },
    contentBase: path.join(__dirname, "dist"),
    // outputPath: path.join(__dirname, './dist'), // no longer in the api?
  }
};
