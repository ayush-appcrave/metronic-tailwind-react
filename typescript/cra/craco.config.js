const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "utils": path.resolve(__dirname, "src/utils"),
      "pages": path.resolve(__dirname, "src/pages"),
      "routing": path.resolve(__dirname, "src/routing"),
      "theme": path.resolve(__dirname, "src/theme"),
      "configs": path.resolve(__dirname, "src/configs"),
      "i18n": path.resolve(__dirname, "src/i18n"),
      "utils": path.resolve(__dirname, "src//utils"),
      "partials": path.resolve(__dirname, "src//partials"),
      "auth": path.resolve(__dirname, "src//auth"),
      "modules/errors": path.resolve(__dirname, "src/modules/errors"),
    },
  },
};
