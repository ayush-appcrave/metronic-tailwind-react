const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@kt": path.resolve(__dirname, "src/_kt"),
    },
  },
};
