import { useState } from 'react';
import { useToast, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getProvidersByName, getProvidersByQuery, getProvidersBySpecialty } from './services';
import Home from './components/HomePage/HomePage';
import Search from './components/SearchPage/SearchPage';
import Provider from './components/ProviderPage/ProviderPage';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [ providers, setProviders ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ isLoading, setLoading ] = useState(false);

  const onSearch = (mode) => {

    setLoading(true);

    let searchFunction;

    switch(mode) {
      case 'COMBINED':
        searchFunction = getProvidersByQuery;
        break;
      case 'NAME':
        searchFunction = getProvidersByName;
        break;
      case 'SPECIALTY':
        searchFunction = getProvidersBySpecialty;
        break;
      default:
        searchFunction = getProvidersByQuery;
    }

    searchFunction(query)
      .then(res => {
        const newProviders = res.data;
        console.log(newProviders);
        setProviders(newProviders);
      })
      .catch(err => {
        console.error(err);
        toast({
          title: "Error",
          description: "Couldn't search for providers.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));

  }


  return (
    <Router>
      <Route exact path="/">
        <Home
          query={query}
          setQuery={setQuery}
          onSearch={onSearch}
        />
      </Route>
      <Route path="/search">
        <Search 
          query={query}
          providers={providers}
          isLoading={isLoading}
          isOpen={isOpen}
          setQuery={setQuery}
          setProviders={setProviders}
          setLoading={setLoading}
          onSearch={onSearch}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Route>
      <Route path="/provider-form">
        <Provider />
      </Route>
    </Router>
  );
}

export default App;
