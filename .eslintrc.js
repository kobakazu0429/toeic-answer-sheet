module.exports = {
  extends: "@kobakazu0429/eslint-config-typescript-react",
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack.config.common.js"
      }
    }
  },
  rules: {
    "import/prefer-default-export": "off"
  }
};
