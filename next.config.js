const path = require("path");
const withSourceMaps = require("@zeit/next-source-maps");
const WorkerPlugin = require("worker-plugin");

module.exports = withSourceMaps({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new WorkerPlugin({
          globalObject: "self",
        })
      );
    }
    config.resolve.alias["@"] = path.resolve(__dirname, ".");
    return config;
  },
});
