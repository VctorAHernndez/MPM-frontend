import { 
  Select,
  Center,
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  FormControl,
  FormLabel,
  useToast,
  Textarea,
} from '@chakra-ui/react';
import { ImPhone } from 'react-icons/im';
import { useState } from 'react';
import moment from 'moment';
import { bookAppointment } from '../../services';
import { prepareAppointmentBody } from '../../utils';

import { DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

import PropTypes from 'prop-types';

function AppointmentForm({ currentProvider, onClose }) {

  const toast = useToast();
  
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ DOB, setDOB ] = useState(moment());
  const [ date, setDate ] = useState(moment());
  const [ time, setTime ] = useState(moment());
  const [ reason, setReason ] = useState('');
  const [ isLoading, setLoading ] = useState(false);

  const onFirstNameChange = (event) => {
    const newFirstName = event.target.value;
    setFirstName(newFirstName);
  }

  const onLastNameChange = (event) => {
    const newLastName = event.target.value;
    setLastName(newLastName);
  }

  const onGenderChange = (event) => {
    const newGender = event.target.value;
    setGender(newGender);
  }

  const onPhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
  }

  const onDOBChange = (newDOB, dobString) => {
    setDOB(newDOB);
  }

  const onDateChange = (newDate, dateString) => {
    setDate(newDate);
  }

  const onTimeChange = (newTime, timestring) => {
    setTime(newTime);
  }

  const onReasonChange = (event) => {
    const newReason = event.target.value;
    setReason(newReason);
  }

  const onSubmit = (event) => {

    setLoading(true);

    const providerID = currentProvider.id; // TODO: get this from props
    const body = prepareAppointmentBody(firstName, lastName, gender, 
          phone, DOB, date, time, reason, providerID);
    console.log(body);

    bookAppointment(body)
      .then(res => {
        onClose(); // Close modal
        toast({
          title: "Success",
          description: "Appointment booked!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(err => {
        console.error(err);
        // TODO: accent with red the fields that caused error
        toast({
          title: "Error",
          description: "Couldn't book appointment.", // use server response?
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(setLoading(false));

    // TODO:
    // * Validate (check appointment doesn't clash with other appointments)
    // * Parse Response (check server response and make a message out of it)

  }

  return (
    <Box>

      {/*** Patient Information ***/}
      <Box mb={4}>
        <Heading color="gray.600" mb={2} size="sm">Patient Information</Heading>

        {/* First Row */}
        <Stack mb={2} direction={{base: "column", sm: "row"}}>
          <Input placeholder="First Name" value={firstName} onChange={onFirstNameChange} isRequired />
          {/* <PinInput placeholder="I.">
            <PinInputField />
          </PinInput> */}
          <Input placeholder="Last Names" value={lastName} onChange={onLastNameChange} isRequired />
        </Stack>

        {/* Second Row */}
        <Stack mb={2} direction={{base: "column", sm: "row"}}>
          {/* <Input placeholder="Date of Birth"/> */}
          <Select value={gender} onChange={onGenderChange} placeholder="Gender" isRequired>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </Select>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<ImPhone color="gray.600" />}
            />
            <Input type="phone" value={phone} onChange={onPhoneChange} placeholder="Phone" isRequired/>
          </InputGroup>
        </Stack>

        {/* Third Row */}
        <Stack direction={{base: "column", sm: "row"}}>
          <FormControl>
            <FormLabel>
              <small>Date of Birth</small>
            </FormLabel>
            {/* <SingleDatePicker
              id="dob"
              numberOfMonths={1} 
              date={DOB}
              focused={DOBFocused} 
              onDateChange={onDOBChange} 
              onFocusChange={onDOBFocusedChange}
              placeholder="Date of Birth"
              showDefaultInputIcon
              showClearDate
              small
            /> */}
            <DatePicker value={DOB} onChange={onDOBChange} isRequired />
            {/* <FormHelperText>Select your date of birth.</FormHelperText> */}
          </FormControl>
        </Stack>
      </Box>

      {/*** Appointment Preferences ***/}
      <Box mb={4}>
        <Heading color="gray.600" mb={2} size="sm">Appointment Preferences</Heading>
        <Stack direction={{base: "column", sm: "row"}}>
          <FormControl>
            <FormLabel>
              <small>Preferred Date</small>
            </FormLabel>
            {/* <SingleDatePicker
              id="date"
              numberOfMonths={1} 
              date={date}
              focused={dateFocused} 
              onDateChange={onDateChange} 
              onFocusChange={onDateFocusedChange}
              placeholder="Preferred Date"
              showDefaultInputIcon
              showClearDate
              small
            /> */}
            <DatePicker value={date} onChange={onDateChange} isRequired />
            {/* <FormHelperText>Select your preferred date.</FormHelperText> */}
          </FormControl>


          <FormControl>
            <FormLabel>
              <small>Preferred Time</small>
            </FormLabel>
            <TimePicker 
              use12Hours
              value={time}
              format="h:mm a" 
              onChange={onTimeChange} 
              isRequired
            />
            {/* <FormHelperText>Select your preferred time.</FormHelperText> */}
          </FormControl>
        </Stack>
      </Box>

      {/* Appointment Reason */}
      <Box mb={4}>
        <Heading color="gray.600" mb={2} size="sm">Appointment Reason</Heading>
        <Textarea 
          value={reason}
          onChange={onReasonChange}
          placeholder="i.e. My stomach hurts ever since I took a medicine prescripted for my backache..."
          rows={6}
          isRequired
        />
      </Box>

      {/* Submit Button */}
      <Center mb={2}>
        <Button colorScheme="teal" onClick={onSubmit} disabled={isLoading}>
          Book
        </Button>
      </Center>

    </Box>
  );
}

AppointmentForm.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default AppointmentForm;