const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        users: [User]
        user(id: ID!): User
        me: User
    }

    type Mutation {
        makeUser(id: Int!, name: String!): User!
        removeUser(id: Int!): Boolean
    }

    type User {
        id: ID!
        name: String!
        car: [Car]
    }
`;
