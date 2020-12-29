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

function AppointmentModal({ currentProvider, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} size="xl" scrollBehavior="inside" onClose={onClose}>
      <ModalOverlay />
      <ModalContent py={3}>
        <ModalHeader>
          <Heading size="lg" color="teal.400">
            Book Appointment
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading textAlign="right" size="xs" color="gray.500">
            { currentProvider.full_name } <small>({ currentProvider.specialty })</small>
          </Heading>
          <AppointmentForm currentProvider={currentProvider} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

AppointmentModal.propTypes = {
  currentProvider: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AppointmentModal;