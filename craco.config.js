const CracoAntDesignPlugin = require("craco-antd");
const WebpackBar = require("webpackbar");

const path = require("path");

module.exports = {
  webpack: {
    performance: {
      hints: true
    },
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    plugins: [new WebpackBar({ profile: true })]
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          javascriptEnabled: true,
          noIeCompat: true
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]__[hash:base64:5]"
          },
          localsConvention: "camelCase"
        }
      }
    }
  ]
};
