import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, createHttpLink} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

// const base_url = import.meta.env.VITE_BASE_URL + "/api"

// const base_url = 'http://localhost:4000/graphql'


const httpLink = createHttpLink({
  uri: 'http://pokemonko.com/api',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json', // Set the Content-Type header
    }
  }
});



// const client = new ApolloClient({
//   uri: 'http://pokemonko.com/api',
//   cache: new InMemoryCache()
// })

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Concatenate the middleware with the HTTP link
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
