import { ApolloServer, gql } from "apollo-server";
import store from "./storedata.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
// import store from "./storedata.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Mens {
    # name: String
    Shirt: [Shirt]
    Jeans: [Jeans]
  }

  type Women {
    Shirt: [Shirt]
    Jeans: [Jeans]
  }

  type Jeans {
    name: String
    price: Int
    image: String
    description: String
  }

  type Shirt {
    name: String
    price: Int
    image: String
    description: String
  }

  type Store {
    # collection: String
    Mens: [Mens]
    Women: [Women]
  }
  type Query {
    store: [Store]
  }
`;

// Resolvers define the technique for fetching the types defined in the

const resolvers = {
  Query: {
    store: () => store,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
