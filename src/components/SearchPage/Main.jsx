import {
  Grid,
  GridItem,
  Box,
  Center,
  Heading,
 } from '@chakra-ui/react';
import ProviderCard from '../ProviderCard';
import { ProviderCardSkeletonList } from '../ProviderCardSkeleton';
import PropTypes from 'prop-types';

function Main({ providers, isLoading, onOpen }) {

  const NoProvidersNotice = (
    <Box mt={5}>
      <Center mb={2}>
        <Heading size="lg" color="gray.600">No providers to display</Heading>
      </Center>
      <Center>
        <Heading size="md" color="gray.400">Come back later!</Heading>
      </Center>
    </Box>
  );

  const ProvidersList = (
    <Grid 
      // for some reason, not changing to 1fr
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} 
      gap={{base: 5, md: 4}}
      // display={{base: "block", md: "grid"}}
    >
      {
        providers.map((provider) =>
          <GridItem key={provider.id}>
            <ProviderCard key={provider.id} provider={provider} onOpen={onOpen} />
          </GridItem>
        )            
      }
    </Grid>
  );

  return (
    <Box>
      <Box p={4} w="100%">
        {
          isLoading ? <ProviderCardSkeletonList /> :
            providers.length ? ProvidersList : NoProvidersNotice
        }
      </Box>
    </Box>
  );
}

Main.propTypes = {
  providers: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default Main;