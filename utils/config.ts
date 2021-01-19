const dev = process.env.NODE_ENV !== "production";

export const graphqlPath = dev
  ? "http://localhost:3000/api/graphql"
  : "https://example.com/hoge/api/graphql";
