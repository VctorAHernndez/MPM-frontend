import {
  Box,
  Heading,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function LogoBox({ flex }) {
  return (
    <Box flex={flex ? flex : ''}>
      <Heading letterSpacing="wide" fontWeight="normal" size="md" lineHeight="none">
        Medical Provider
      </Heading>
      <Heading letterSpacing="wider" fontWeight="normal" color="teal.300" size="2xl" lineHeight="none">
        Marketplace
      </Heading>
    </Box>
  );
}

LogoBox.propTypes = {
  flex: PropTypes.number,
}

export default LogoBox;