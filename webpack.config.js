const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // path에는 절대경로를 명시해줘야함
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true, // 필요하지 않은 내용 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // scss 또는 css를 검색
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  // 로컬 호스트를 서버로지정
  devServer: {
    host: "localhost",
  },
};
