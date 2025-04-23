import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_SERVER,
  cache: new InMemoryCache(),
  //Some code here
});
export default client;
