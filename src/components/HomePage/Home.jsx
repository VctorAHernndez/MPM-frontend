import { Flex, Box, Text } from '@chakra-ui/react';
import HomeLogo from './HomeLogo';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

function Home({ query, setQuery, onSearch }) {
  return (
    <Box pt={40} maxH="100vh" h="100vh" position="relative">
      <Flex w="80%" maxW="1000px" mx="auto" flexDirection="column" justifyContent="center">
        <HomeLogo />
        <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      </Flex>

      {/* footer with doctor images */}
      <Box h="100px" w="100%" position="absolute" bottom={0}>
        <Flex h="100%" alignItems="center" justifyContent="center" flexDirection="column" color="white" bgColor="teal.500">
          <Text size="xs">
            Are you a provider interested in being added?
          </Text>
          <Link to="/provider-form">
            Get Started
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;