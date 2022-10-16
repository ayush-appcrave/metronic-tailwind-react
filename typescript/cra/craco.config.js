const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@base": path.resolve(__dirname, "src/_base"),
      "app/pages": path.resolve(__dirname, "src/app/pages"),
      "app/routing": path.resolve(__dirname, "src/app/routing"),
    },
  },
};
