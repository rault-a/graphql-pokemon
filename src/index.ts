import 'reflect-metadata';
import * as functions from 'firebase-functions';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';
import { RecipeResolver } from './resolvers/RecipeResolver';
import { HelloResolver } from './resolvers/HelloResolver';

const schema = buildSchemaSync({ resolvers: [ RecipeResolver, HelloResolver ] });
const apolloServer = new ApolloServer({ schema });
const app = express();

apolloServer.applyMiddleware({ app });

app.get('/', (_req, res) => {
  return res.send('test');
});

// If we're not in the Cloud Functions environment, spin up a Node server
if (!process.env.FUNCTION_NAME) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
}

export const api = functions.https.onRequest(app);