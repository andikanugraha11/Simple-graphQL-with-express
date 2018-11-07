//schema.js
const buildSchema = require('graphql');

// import {
//     resolvers
// } from './resolver';

const typeDefs = `
type Product {
  _id: ID!
  title: String!
  qty: Int
 }
type Query {
  allProducts: [Product]
 }
`;
const schema = buildSchema({
    typeDefs,
    resolvers
});
export default schema;