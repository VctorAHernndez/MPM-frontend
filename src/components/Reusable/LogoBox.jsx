import { Heading } from '@chakra-ui/react';

function LogoBox() {
  return (
    <div>
      <Heading letterSpacing="wide" fontWeight="normal" size="md" lineHeight="none">
        Medical Provider
      </Heading>
      <Heading letterSpacing="wider" fontWeight="normal" color="teal.300" size="2xl" lineHeight="none">
        Marketplace
      </Heading>
    </div>
  );
}

export default LogoBox;