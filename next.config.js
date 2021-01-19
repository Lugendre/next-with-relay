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
    return config;
  },
});
