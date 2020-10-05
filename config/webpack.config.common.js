"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: { app: path.resolve(__dirname, "../src/index.tsx") },

  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}"
      }
    })
  ],

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          cache: true
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { transpileOnly: true }
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { url: false } }
        ]
      }
    ]
  }
};
