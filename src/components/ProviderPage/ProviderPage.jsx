import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LogoBox from '../Reusable/LogoBox';

function ProviderPage() {
  return (
    <Box minH="100vh" position="relative">
      {/* Header */}
      <Box p="4">
        <Flex flexDirection={{base: "column", md: "row"}}>
          <Link to="/">
            <LogoBox flex={1} />
          </Link>
          <Spacer m={{base: 3, md: 0}} />
          {/* <SearchBar flex={2} onSearch={onSearch} query={query} setQuery={setQuery} /> */}
        </Flex>
      </Box>
      {/* TODO: Form Maybe */}
    </Box>
  );
}

export default ProviderPage;