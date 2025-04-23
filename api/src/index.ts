import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "./db/client";
import { buildSchema } from "type-graphql";
import "dotenv/config";
// Some code here
import { TrainersResolver } from "./trainers/trainer.resolver";
import { ServerResponse } from "http";
// Some code here

export type Context = {
  res: ServerResponse;
};

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [TrainersResolver],
    // Some code here
    // Some code here
  });

  const server = new ApolloServer({ schema });
  await startStandaloneServer(server, {
    listen: { port: +process.env.SERVER_PORT },
    // Some code here
  });
})();
