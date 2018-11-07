const Product = require('../models/product');
module.exports = resolvers = {
    Query: {
      products: async () => {
        return (await Product.find({}))
      },
    },
    Mutation: {
        async createProduct(root, {
            input
        }) {
            return await Product.create(input);
        }
    }
  }
  