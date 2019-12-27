module.exports = {
  webpack: {
    performance: {
      hints: true
    },
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
};
