import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";
import * as models from "./schema/models";
import * as resolvers from "./schema/resolvers";

export const schema = makeSchema({
  types: [models, resolvers],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-type.gen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.gen.graphql"),
  },
});
