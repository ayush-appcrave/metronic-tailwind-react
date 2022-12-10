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
      "providers": path.resolve(__dirname, "src/providers"),
      "utils": path.resolve(__dirname, "src//utils"),
      "sections": path.resolve(__dirname, "src//sections"),
      "modules/errors": path.resolve(__dirname, "src/modules/errors"),
    },
  },
};
