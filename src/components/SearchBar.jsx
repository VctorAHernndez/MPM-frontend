import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

function SearchBar({ flex, query, setQuery, onSearch }) {

  const onChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  }

  const onKeyUp = (event) => {
    if(event.key === 'Enter') {
      carryOutSearch()
    }
  }

  const carryOutSearch = (event) => {
    const path = window.location.pathname;
    if(path === '/') {
      window.location.pathname = '/search';
    }
    onSearch()
  }

  return (
    <Box flex={flex ? flex : ''}>
      <InputGroup>
        <Input
          type="text"
          backgroundColor="gray.100"
          value={query}
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder="Search by name or specialty" />
        <InputRightElement>
          <IconButton 
            bgColor="transparent"
            borderLeftRadius="0"
            icon={<GoSearch />}
            onClick={carryOutSearch}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

SearchBar.propTypes = {
  flex: PropTypes.number,
  onSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default SearchBar;