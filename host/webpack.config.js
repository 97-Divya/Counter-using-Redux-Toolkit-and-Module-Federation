const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true
  },
  output: {
    publicPath: "auto"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        // remote is loaded from localhost:3002
        remote: "remote@http://localhost:3002/remoteEntry.js"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        redux: { singleton: true, requiredVersion: "^4.2.1" },
        "react-redux": { singleton: true, requiredVersion: "^8.1.1" }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
