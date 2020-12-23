import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { getProviders } from '../../services';
import Header from './Header';
import Main from './Main';
import AppointmentModal from './AppointmentModal';

function Search({query, providers, isLoading, isOpen, setQuery, setLoading, setProviders, onSearch, onOpen, onClose}) {

  const toast = useToast();

  useEffect(() => {

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
      
  }, [toast, setProviders, setLoading]);

  return (
    <div>
      <Header query={query} setQuery={setQuery} onSearch={onSearch} />
      <Main providers={providers} isLoading={isLoading} onOpen={onOpen} />
      <AppointmentModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default Search;