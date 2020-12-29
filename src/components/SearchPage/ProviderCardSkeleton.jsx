import { 
  Icon,
  Skeleton,
  Box, 
  Image,
  Flex,
  Spacer,
  Grid,
} from '@chakra-ui/react';
import { GiAlarmClock } from 'react-icons/gi';
import DoctorCropped from '../../assets/doctor-cropped.png';
import PropTypes from 'prop-types';

function ProviderCardSkeleton() {

  const Description = (
    <Flex h="100%" p={2} flexDirection="column">
      <Box>
         {/* Provider Name */}
        <Skeleton startColor="teal.500" endColor="gray.400" mb={2} height="15px" width="50px" />
         {/* Specialty */}
        <Skeleton height="15px" width="70px" />
      </Box>
      <Spacer />
      <Box>
        {/* Place */}
        <Skeleton mb={3} height="12px" width="100px" />
        {/* Phone */}
        <Skeleton startColor="teal.400" endColor="gray.400" height="14px" width="90px" />
      </Box>
    </Flex>
  );

  const Button = (
    <Icon
      top="0"
      right="0"
      pos="absolute"
      color="gray.400"
      p={2}
      h={10}
      w={10}
      as={GiAlarmClock}
    />
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

function ProviderCardSkeletonList({length}) {
  const count = length ? length : 12;
  const skeletonCards = [];
  for(let i = 0; i < count; i++) {
    skeletonCards.push(<ProviderCardSkeleton />);
  }
  return (
    <Grid 
      templateColumns={[
        "repeat(1, 1fr)", // for some reason, not changing to 1fr
        "repeat(2, 1fr)", 
        "repeat(3, 1fr)", 
        "repeat(4, 1fr)" 
      ]} 
      gap={{base: 5, md: 4}}
      // display={{base: "block", md: "grid"}}
    >
      {skeletonCards}
    </Grid>
  );
}

ProviderCardSkeletonList.propTypes = {
  length: PropTypes.number
}

export default ProviderCardSkeleton;
export { ProviderCardSkeletonList };