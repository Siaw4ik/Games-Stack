/* eslint-disable global-require */
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EslintPlugin = require("eslint-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
      },
      {
        test: /\.(svg|png|jpe?g|gif|mp3)$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".html"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({ extensions: "ts" }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/favicon.ico",
          to: "assets/favicon.ico",
        },
        {
          from: "src/assets/images_game_3/background.png",
          to: "assets/background.png",
        },
        {
          from: "src/assets/images_game_3/meteor_1.png",
          to: "assets/meteor_1.png",
        },
        {
          from: "src/assets/images_game_3/meteor_2.png",
          to: "assets/meteor_2.png",
        },
        {
          from: "src/assets/images_game_3/meteor_3.png",
          to: "assets/meteor_3.png",
        },
        {
          from: "src/assets/images_game_3/meteor_4.png",
          to: "assets/meteor_4.png",
        },
        {
          from: "src/assets/images_game_3/meteor_5.png",
          to: "assets/meteor_5.png",
        },
        {
          from: "src/assets/images_game_3/meteor_6.png",
          to: "assets/meteor_6.png",
        },
        {
          from: "src/assets/images_game_3/meteor_7.png",
          to: "assets/meteor_7.png",
        },
        {
          from: "src/assets/images_game_3/meteor_8.png",
          to: "assets/meteor_8.png",
        },
        {
          from: "src/assets/images_game_3/meteor_9.png",
          to: "assets/meteor_9.png",
        },
        {
          from: "src/assets/images_game_3/meteor_10.png",
          to: "assets/meteor_10.png",
        },
        {
          from: "src/assets/images_game_3/meteor_11.png",
          to: "assets/meteor_11.png",
        },
        {
          from: "src/assets/images_game_3/meteor_12.png",
          to: "assets/meteor_12.png",
        },
        {
          from: "src/assets/sounds/back-game5-starwars.mp3",
          to: "assets/back-game5-starwars.mp3",
        },
        {
          from: "src/assets/sounds/failAudio-starwars.mp3",
          to: "assets/failAudio-starwars.mp3",
        },
        {
          from: "src/assets/sounds/game5-one-card.mp3",
          to: "assets/game5-one-card.mp3",
        },
        {
          from: "src/assets/images/background.png",
          to: "assets/background_game2.png",
        },
      ],
    }),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === "prod";
  const envConfig = isProductionMode
    ? require("./webpack.prod.config")
    : require("./webpack.dev.config");

  return merge(config, envConfig);
};
