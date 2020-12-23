import { 
  Image,
  Center,
  Box,
  Heading,
} from '@chakra-ui/react';
import BandAid from '../../assets/band-aid.png'

function HomeLogo() {
  return (
    <Box mb={20}>
      <Center mb={1}>
        <Heading letterSpacing="wide" fontWeight="normal" size="lg" lineHeight="none">
          Medical Provider
        </Heading>
      </Center>
      <Center>
        <Heading letterSpacing="widest" fontWeight="normal" color="teal.300" size="3xl" lineHeight="none" position="relative">
          Marketplace
          <Image 
            src={BandAid} 
            position="absolute" 
            right={{ base: "-40px", md: "-45px"}}
            bottom={{ base: "-40px", md: "-45px"}}
            boxSize={{ base: "70px", md: "80px"}}
          />
        </Heading>
      </Center>
    </Box>
  );
}

export default HomeLogo;