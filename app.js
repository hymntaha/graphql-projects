const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		me: User
	}
	
	type User{
		name: String!
	}
`;

const resolvers = {
	Query:{
		me: () => {
			return {
				name: 'Susan'
			}
		}
	}
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({app})

app.list(3333, () =>
  console.info("Apollo GraphQL server is running on port 3333")
);
