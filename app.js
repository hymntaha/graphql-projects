const express = require('express');
const app = express();
const {ApolloServer} = require('apollo-server-express')


const typeDefs = null;
const resolvers = null;


const server = new ApolloServer ({
	typeDefs,
	resolvers
});


app.list(3333, ()=> console.info('Apollo GraphQL server is running on port 3333'));
