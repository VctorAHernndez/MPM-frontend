import { useState } from 'react';
import { useToast, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getProvidersByName } from './services';
import Home from './components/HomePage/Home';
import Search from './components/SearchPage/Search';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ providers, setProviders ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ isLoading, setLoading ] = useState(false);
  const toast = useToast();

  const onSearch = (event) => {

    setLoading(true);

    getProvidersByName(query)
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
      .finally(setLoading(false));

  }


  return (
    <Router>
      <Route exact path="/">
        <Home
          query={query}
          providers={providers}
          isLoading={isLoading}
          isOpen={isOpen}
          setQuery={setQuery}
          onSearch={onSearch}
          onOpen={onOpen}
          onClose={onClose}
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
    </Router>
  );
}

export default App;