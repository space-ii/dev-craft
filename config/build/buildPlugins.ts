import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

// export function buildPlugins({
//   paths,
//   isDev,
// }: BuildOptions): webpack.WebpackPluginInstance[] {

//   return [
//     new HtmlWebpackPlugin({
//       template: paths.html,
//     }),
//     // new webpack.AutomaticPrefetchPlugin(),
//     new MiniCssExtractPlugin({
//       filename: "css/[name].[contenthash:8].css",
//       chunkFilename: "css/[name].[contenthash:8].css",
//     }),
//     new webpack.DefinePlugin({
//       __IS_DEV__: JSON.stringify(isDev),
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//   ];
// }

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  plugins.push(
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin()
  );

  return plugins;
}
