import {
  Heading,
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay,
} from '@chakra-ui/react';
import AppointmentForm from './AppointmentForm';
import PropTypes from 'prop-types';

function AppointmentModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent py={3}>
        <ModalHeader>
          <Heading size="lg" color="teal.400">
            Book Appointment
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AppointmentForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

AppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AppointmentModal;