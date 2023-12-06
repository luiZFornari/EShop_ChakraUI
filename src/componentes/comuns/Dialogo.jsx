import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function Dialogo(props) {
  return (
    <Modal
      id={props.id}
      isOpen={props.open}
      onClose={() => props.setOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.titulo}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id={props.idform} onSubmit={props.acaoCadastrar}>
            {props.children}
            <Button variant="ghost" mr={3} onClick={() => props.setOpen(false)}>
              Close
            </Button>
            <Button type="submit" colorScheme="blue">
              Gravar
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Dialogo;
