module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-class-properties",
  ],
};
