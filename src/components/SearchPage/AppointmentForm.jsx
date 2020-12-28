import { 
  Select,
  Center,
  Box,
  Heading,
  Input,
  PinInput,
  PinInputField,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import { ImPhone } from 'react-icons/im';
import { FiClock } from 'react-icons/fi';
import { IoCalendarOutline } from 'react-icons/io5';
import { useState } from 'react';

function AppointmentForm() {

  const { date, setDate } = useState('');
  const { time, setTime } = useState('');

  const onDateChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    if(name === 'date') {
      setDate(value);
    } else if(name === 'time') {
      setTime(value);
    }

    if(date !== '' && time !== '') {
      // TODO: verify solicited appointment date is available in server
      // TODO: disable button while this is happening
    }
    
  }

  const onSubmit = (event) => {
    // TODO:
    // 1. Set loading state
    // 2. Send to backend
    // 3. Validate
    // 4. Parse response
    // 4. Set error/success state 
    //    - onSuccess: close modal and make success toast
    //    - onFailure: accent with red the fields that caused the error and make error toast
  }

  return (
    <Box>

      {/*** Patient Information ***/}
      <Box mb={4}>
        <Heading color="gray.600" mb={2} size="sm">Patient Information</Heading>

        {/* First Row */}
        <Stack mb={2} direction={{base: "column", sm: "row"}}>
          <Input placeholder="First Name"/>
          <PinInput placeholder="I.">
            <PinInputField />
          </PinInput>
          <Input placeholder="Last Names"/>
        </Stack>

        {/* Second Row */}
        <Stack direction={{base: "column", sm: "row"}}>
          <Input placeholder="Date of birth"/>
          <Select placeholder="Gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </Select>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<ImPhone color="gray.600" />}
            />
            <Input placeholder="Phone"/>
          </InputGroup>
        </Stack>
      </Box>

      {/*** Appointment Preferences ***/}
      <Box mb={4}>
        <Heading color="gray.600" mb={2} size="sm">Appointment Preferences</Heading>
        <Stack direction={{base: "column", sm: "row"}}>
          <InputGroup>
            <Input name="date" placeholder="Preferred Date" onChange={onDateChange}/>
            <InputRightElement
              pointerEvents="none"
              children={<IoCalendarOutline color="gray.600" />}
            />
          </InputGroup>
          <InputGroup>
            <Input name="time" placeholder="Preferred Time" onChange={onDateChange}/>
            <InputRightElement
              pointerEvents="none"
              children={<FiClock color="gray.600" />}
            />
          </InputGroup>
        </Stack>
      </Box>

      {/* Submit Button */}
      <Center mb={2}>
        <Button colorScheme="teal" onClick={onSubmit}>
          Book
        </Button>
      </Center>

    </Box>
  );
}

export default AppointmentForm;