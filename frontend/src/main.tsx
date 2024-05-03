import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'


// const base_url = import.meta.env.VITE_BASE_URL + "/graphql"

const base_url = 'http://pokemonko.com:4000'
console.log(base_url, 'checking for sanity in prod')

// const base_url = 'http://localhost:4000'




const client = new ApolloClient({
  uri: base_url,
  cache: new InMemoryCache()
})



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
