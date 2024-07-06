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
      
   },
   Mutation: {
      addNewProduct: (_, args) => {
         const newProduct = {
            id: args.id,
            description: args.description,
            price: args.price,
            reviews: []
         };

         data.products.push(newProduct);
         return newProduct;
      },
      addNewProductReview: (_, args) => {
         const product = data.products.find((product) => product.id === args.id);

         if (product) {
            const newReview = {
               rating: args.rating,
               comment: args.comment
            };

            product.reviews.push(newReview);
            return newReview;
         } else {
            throw new Error('Product not found');
         }
      },
      updateProduct: (_, args) => {
         const product = data.products.find((product) => product.id === args.id);

         if (product) {
            if (args.description !== undefined) {
               product.description = args.description;
            }
            if (args.price !== undefined) {
               product.price = args.price;
            }
            return product;
         } else {
            throw new Error('Product not found');
         }
      }
   }
};