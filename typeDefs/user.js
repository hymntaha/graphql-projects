const { gql } = require("apollo-server-express");

module.exports = gql`
    extend type Query {
        users: [User]
        user(id: ID!): User
        me: User
    }

    extend type Mutation {
        makeUser( name: String!): User!
        removeUser(id: Int!): Boolean
    }

    type User {
        id: ID!
        name: String!
        car: [Car]
    }
`;
