import {
  Box, 
  Image,
  Flex,
  Tooltip,
  IconButton,
  Heading,
  Text,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { GiAlarmClock } from 'react-icons/gi';
import DoctorCropped from '../assets/doctor-cropped.png';
import PropTypes from 'prop-types';

function ProviderCard({ provider, onOpen }) {

  // TODO: Figure out if we'll store additional data like this
  const place = "San Juan Plaza";
  const phone = "+17872426114";
  const formattedPhone = "(787) 242-6114";

  const Description = (
    <Flex h="100%" p={2} flexDirection="column">
      <Box>
        <Heading color="teal.500" size="sm">
          {provider.full_name}
        </Heading>
        <Text fontSize="sm">
          {provider.specialty}
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Text fontSize="xs" fontStyle="italic">
          {place}
        </Text>
        <Link href={"tel:" + phone}fontSize="xs" color="teal.400">
          {formattedPhone}
        </Link>
      </Box>
    </Flex>
  );

  const Button = (
    <Tooltip label="Book Appointment" bg="teal.400">
      <IconButton
        top="0"
        right="0"
        pos="absolute"
        color="teal.600"
        bgColor="transparent"
        aria-label="book appointment"
        _hover={{backgroundColor: "transparent"}}
        icon={<GiAlarmClock size="1.5em" />}
        onClick={onOpen}
      />
    </Tooltip>
  );

  return (
    <Flex px={3} h={100} minW={280} bgColor="gray.50" shadow="md" pos="relative" borderRadius="md" boxSizing="border-box">
      <Box position="relative" h="100%" w={75} mr={2}>
        <Image h="90%" position="absolute" bottom={0} src={DoctorCropped} alt="doctor silhouette" />
      </Box>
      {Description}
      {Button}
    </Flex>
  );
}

ProviderCard.propTypes = {
  provider: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default ProviderCard;