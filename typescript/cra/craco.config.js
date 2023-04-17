const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "providers": path.resolve(__dirname, "src/providers"),
      "utils": path.resolve(__dirname, "src/utils"),
      "auth": path.resolve(__dirname, "src/auth"),
      "pages": path.resolve(__dirname, "src/pages"),
      "routing": path.resolve(__dirname, "src/routing"),
      "theme": path.resolve(__dirname, "src/theme"),
      "configs": path.resolve(__dirname, "src/configs"),      
      "partials": path.resolve(__dirname, "src//partials"),
      "modules": path.resolve(__dirname, "src/modules"),
    },
  },
};
