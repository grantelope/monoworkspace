import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        loadComment: Comment!
    }

    extend type Mutation {
        saveComment(input: CommentInput!): Comment!
    }

    type Comment {
        name: String!
        text: String!
        version: Int!
    }

    input CommentInput {
        name: String!
        text: String!
        version: Int!
    }
`;
