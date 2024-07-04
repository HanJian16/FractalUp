import { ApolloClient, InMemoryCache } from '@apollo/client'
import { provideApolloClient } from '@vue/apollo-composable';

const apolloClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

provideApolloClient(apolloClient);

export default apolloClient;