import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} from "@apollo/client";
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById('root');
const root = createRoot(container!)


const client = new ApolloClient({
  uri: 'http://nestvinyl.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});


root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,

);



