module.exports = {
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
    ["@babel/plugin-transform-react-jsx", { pragma: "h" }],
  ],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
