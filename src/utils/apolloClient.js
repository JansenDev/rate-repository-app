import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new createHttpLink({
  // uri: "http://localhost:4000/"
  uri: "http://192.168.1.4:4000/"
});

const createApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export default createApolloClient;
