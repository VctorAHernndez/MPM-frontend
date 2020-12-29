import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

function SearchBar({ query, setQuery, search }) {

  const onChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  }

  const onKeyUp = (event) => {
    if(event.key === 'Enter') {
      search();
    }
  }

  return (
    <div>
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
            onClick={search}
          />
        </InputRightElement>
      </InputGroup>
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default SearchBar;