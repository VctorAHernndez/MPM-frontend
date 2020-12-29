import { useEffect, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { getProviders } from '../../services';
import Header from './Header';
import Main from './Main';
import AppointmentModal from './AppointmentModal';
import Footer from '../Reusable/Footer';

function SearchPage({query, providers, isLoading, isOpen, setQuery, setLoading, setProviders, onSearch, onOpen, onClose}) {

  const toast = useToast();
  const [ currentProvider, setCurrentProvider ] = useState({});

  useEffect(() => {

    // Get all providers only if string is empty
    // and providers haven't been searched for yet
    if(query !== '' || providers.length) {
      return;
    }

    setLoading(true);
    
    getProviders()
      .then(res => {
        const newProviders = res.data;
        console.log(newProviders);
        setProviders(newProviders);
      })
      .catch(err => {
        console.error(err);
        toast({
          title: "Error",
          description: "Unable to fetch providers.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(setLoading(false));
      
  }, [query, providers, toast, setProviders, setLoading]);

  return (
    <div>
    <Box minH="100vh" position="relative">
      <Header query={query} setQuery={setQuery} onSearch={onSearch} />
      <Main providers={providers} isLoading={isLoading} onOpen={onOpen} setCurrentProvider={setCurrentProvider} />
      <Footer skipImages={true} />
    </Box>
    <AppointmentModal isOpen={isOpen} onClose={onClose} currentProvider={currentProvider} />
    </div>
  );
}

export default SearchPage;