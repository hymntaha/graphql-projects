const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const cors = require('cors');


const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// const me = models.users[0];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:{
    models,
    // me
  }
});

server.applyMiddleware({ app });
app.use(cors());

app.listen(3333, () =>
  console.info("Apollo GraphQL server is running on port 3333")
);
