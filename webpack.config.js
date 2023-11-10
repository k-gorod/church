const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config({ path: "./.env" });

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.(sass|less|css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|mov|mp4)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new webpack.ProvidePlugin({
    //   "window.Quill": "quill/dist/quill.js",
    //   Quill: "quill/dist/quill.js",
    // }),
  ],
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
