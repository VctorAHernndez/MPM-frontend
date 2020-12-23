import {
  Box,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import LogoBox from './LogoBox';
import SearchBar from '../SearchBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ onSearch, query, setQuery }) {
  return (
    <Box p="4">
      <Flex flexDirection={{base: "column", md: "row"}}>
        <Link to="/">
          <LogoBox flex={1} />
        </Link>
        <Spacer m={{base: 3, md: 0}} />
        <SearchBar flex={2} onSearch={onSearch} query={query} setQuery={setQuery} />
      </Flex>
    </Box>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default Header;