const data = require('../FakeData');

module.exports = {
   Query: {
      products:  () => {
         return data.products;
      } ,
      product: (_, args) => {
         return data.products.find((product) => product.id === args.id)
      },
      productsByPrice: (_, args) => {
         return data.products.filter((product) => {
            return product.price >= args.min && product.price <= args.max;
      
         });
      }
      
   }
};