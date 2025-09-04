import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

/** Apollo Client setup for Rick and Morty GraphQL API */
export const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
    cache: new InMemoryCache(),
});