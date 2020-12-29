import {
  Box,
  Spacer,
  Flex,
  Select,
} from '@chakra-ui/react';
import LogoBox from '../Reusable/LogoBox';
import SearchBar from '../Reusable/SearchBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ query, filterType, setFilterType, setQuery, search }) {

  const filterWidth = "106px";

  const onFilterTypeChange = (event) => {
    const newFilterType = event.target.value;
    setFilterType(newFilterType);
  }

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
          <Flex>
            <Select width={filterWidth} variant="flushed" mr={2} value={filterType} onChange={onFilterTypeChange}>
              <option value="COMBINED">Either</option>
              <option value="NAME">Name</option>
              <option value="SPECIALTY">Specialty</option>
            </Select>
            <Box width={`calc(100% - ${filterWidth})`}>
              <SearchBar search={search} query={query} setQuery={setQuery} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
}

export default Header;