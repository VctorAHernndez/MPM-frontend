import {
  Box, 
  Flex, 
  Heading, 
  Spacer,
  Stack,
  Input,
  Text,
  FormControl,
  FormHelperText,
  Center,
  FormLabel,
  Button,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addProvider } from '../../services';
import LogoBox from '../Reusable/LogoBox';

function ProviderPage() {

  const toast = useToast();
  const [ fullName, setFullName ] = useState('');
  const [ specialty, setSpecialty ] = useState('');
  const [ isLoading, setLoading ] = useState(false);
  const [ goToHome, setGoToHome ] = useState(false);

  const onFullNameChange = (event) => {
    const newFullName = event.target.value;
    setFullName(newFullName);
  }

  const onSpecialtyChange = (event) => {
    const newSpecialty = event.target.value;
    setSpecialty(newSpecialty);
  }

  const onSubmit = (event) => {
    
    setLoading(true);

    const body = {
      full_name: fullName,
      specialty: specialty,
    }

    console.log(body);

    addProvider(body)
      .then(res => {
        toast({
          title: "Success",
          description: "Registered! We'll be contacting you shortly.",
          status: "success",
          duration: null,
          isClosable: true,
        });
        setGoToHome(true);
      })
      .catch(err => {
        console.error(err);
        // TODO: accent with red the fields that caused error
        toast({
          title: "Error",
          description: "Couldn't register.", // use server response?
          status: "error",
          duration: null,
          isClosable: true,
        });
      })
      .finally(setLoading(false));

  }

  return (
    <Box minH="100vh" position="relative">
      {/* Header */}
      <Box p="4">
        <Flex>
          <Link to="/">
            <LogoBox flex={1} />
          </Link>
          <Spacer />
          <Center>
            <Heading size="sm" color="gray.400">&copy; Nández 2020</Heading>
          </Center>
        </Flex>
      </Box>
      {/* Main Section */}
      <Box p="4">
        {/* Info */}
        <Stack mb={8} direction={{base: "column", sm: "row"}}>
          <Box maxW={{base: "100%", sm: "50%"}}>
            <Heading size="lg" color="teal.600">
              What is MPM all about?
            </Heading>
            <Text color="gray.600">
              MPM is a platform that allows doctors and other
              medical providers reach out to potential patients
              by allowing them to book appointments <strong>directly and easily</strong>.
            </Text>
          </Box>
          <Box maxW={{base: "100%", sm: "50%"}}>
            <Heading size="lg" color="teal.600">
              How can I get started?
            </Heading>
            <Text color="gray.600">
              MPM was built so that connecting with patients is
              <strong>fast and simple</strong>. Just fill out the
              form below and we'll get you up and running!
            </Text>
          </Box>
        </Stack>
        {/* Form */}
        <VStack maxW="800px" mx="auto" mb={2} p={4} borderRadius="md" bgColor="gray.50" boxShadow="md">
          <Heading size="lg" color="teal.300">
            Join Us!
          </Heading>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Full Name" value={fullName} onChange={onFullNameChange} isRequired />
            <FormHelperText>Provide your full name so that patients can recognize it easily.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Specialty</FormLabel>
            <Input placeholder="Specialty" value={specialty} onChange={onSpecialtyChange} isRequired />
            <FormHelperText>Add your specialty so that patients can filter by their needs (i.e. Dentist, Cardiologist, etc.)</FormHelperText>
          </FormControl>
          <Center pt={2}>
            <Button size="md" colorScheme="teal" onClick={onSubmit} disabled={isLoading}>
              Book
            </Button>
          </Center>
        </VStack>
      </Box>
      { goToHome && <Redirect to="/" /> }
    </Box>
  );
}

export default ProviderPage;