import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import HomeLogo from './HomeLogo';
import SearchBar from '../Reusable/SearchBar';
import Footer from '../Reusable/Footer';
import PropTypes from 'prop-types';

function HomePage({ query, setQuery, onSearch }) {

  const [ goToSearchPage, setGoToSearchPage ] = useState(false);

  const redirectAndSearch = () => {
    setGoToSearchPage(true);
    onSearch('COMBINED');
  }

  return (
    <Box pt={40} maxH="100vh" h="100vh" position="relative">
      <Flex w="80%" maxW="1000px" mx="auto" flexDirection="column" justifyContent="center">
        <HomeLogo />
        <SearchBar query={query} setQuery={setQuery} search={redirectAndSearch} />
      </Flex>
      <Footer />
      { goToSearchPage && <Redirect to="/search" /> }
    </Box>
  );
}

HomePage.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default HomePage;