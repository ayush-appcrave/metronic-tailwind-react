const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@base": path.resolve(__dirname, "src/_base"),
      "app/pages": path.resolve(__dirname, "src/app/pages"),
      "app/routing": path.resolve(__dirname, "src/app/routing"),
      "app/setup/theme": path.resolve(__dirname, "src/app/setup/theme"),
      "app/setup/configs": path.resolve(__dirname, "src/app/setup/configs"),
      "app/setup/i18n": path.resolve(__dirname, "src/app/setup/i18n"),
      "app/setup/auth": path.resolve(__dirname, "src/app/setup/auth"),
      "app/modules/errors": path.resolve(__dirname, "src/app/modules/errors"),
    },
  },
};
