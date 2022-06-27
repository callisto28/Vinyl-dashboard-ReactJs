import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import  Nav  from './components/Nav';

const client = new ApolloClient({
  uri: 'http://nestvinyl.herokuapp.com/graphq',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
    <App />    
   </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root')
);



