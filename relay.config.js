module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./",
  schema: "./generated/schema.gen.graphql",
  language: "typescript",
  extensions: ["ts", "tsx"],
  artifactDirectory: "./generated/__relay_artifacts__",
  include: ["**"],
  exclude: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/generated/**",
    "**/.next/**",
  ],
  watchman: true,
};
