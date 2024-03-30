const graphql = require('graphql');
const axios = require('axios');

const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLInt,
   GraphQLNonNull,
   GraphQLSchema
}= graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    name: {
      type:  GraphQLString,
    },
    price: {
      type:  GraphQLString,
    }, 
    id: {
      type: GraphQLInt,
    },
  },
});

//query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
    product:{
      type:ProductType,
    args:{
        id:{
            type:GraphQLInt
        }
    },
    resolve(parentValue,args){
        return axios.get(`http://localhost:3000/products?id=${args.id}`)
        .then(resp =>{
            return resp.data[0];
        })
        .catch(err => err);
    }
}
    }
});

//Mutation
const mutation = new GraphQLObjectType({
    name :"Mutation",
    fields:{
        addProduct:{
            type:ProductType,
            args:{
             name:{
                type: new GraphQLNonNull(GraphQLString)
             },
            price:{
                type:new GraphQLNonNull(GraphQLString)
             },
             id:{
                type:GraphQLInt
             }

            },
            resolve(parentValue,args){
                const{
                    name,
                    price,
                    id
                }= args;
                return axios.post(`http://localhost:3000/products`,{name,price,id})
                .then(resp =>{
                    return resp.data;
                })
                .catch(err => err);
            } 
        }
    }
})

//create and export a schema with query mutation
module.exports = new GraphQLSchema({
    query: RootQuery,
    Mutation:mutation
});