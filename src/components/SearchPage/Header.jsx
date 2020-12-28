import {
  Box,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import LogoBox from '../Reusable/LogoBox';
import SearchBar from '../Reusable/SearchBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ query, setQuery, onSearch }) {
  return (
    <Box p="4">
      <Flex flexDirection={{base: "column", md: "row"}}>
        <Link to="/">
          <Box flex={1}>
            <LogoBox />
          </Box>
        </Link>
        <Spacer m={{base: 3, md: 0}} />
        <Box flex={2}>
          <SearchBar onSearch={onSearch} query={query} setQuery={setQuery} />
        </Box>
      </Flex>
    </Box>
  );
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
}

export default Header;