//schema.js
// const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolver');

const typeDefs = 
`type Product {
  _id: ID
  name: String!
  description: String
  price: Float
}
type Query {
  products: [Product]
}

input ProductInput {
  name: String!
  description: String
  price: Float
 }

 type Mutation {
  createProduct(input: ProductInput) : Product
 }
`;


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});


module.exports = schema;