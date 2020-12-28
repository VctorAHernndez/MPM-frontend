import { Image, Flex, Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import FemaleDoc from '../../assets/doctor-female.png';
import MaleDoc from '../../assets/doctor-male.png';

function Footer() {

  const footerHeight = "80px";

  const DoctorImages = (
    <Box w="100%" position="absolute" bottom={footerHeight} textAlign="right" pr={8}>
      <Image w={50} src={MaleDoc} display="inline" alt="male doctor" />
      <Image w={50} src={FemaleDoc} display="inline" alt="female doctor" />
    </Box>
  );

  const BlueStrip = (
    <Box h={footerHeight} w="100%" position="absolute" bottom={0} bgColor="teal.300" >
      <Flex h="100%" alignItems="center" justifyContent="center" flexDirection="column">
        <Text color="white">
          Are you a provider? {" "}
          <Link to="/provider-form">
            <ChakraLink as="span" fontWeight="bold" color="blue.700">
              Join Us
            </ChakraLink>
          </Link>
        </Text>
      </Flex>
    </Box>
  );

  return (
    <div>
      { DoctorImages }
      { BlueStrip }
    </div>
  )
}

export default Footer;