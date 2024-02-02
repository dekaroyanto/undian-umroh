import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalBody>
        {/* Your terms and conditions content goes here */}
        <p>This is the terms and conditions content.</p>
      </ModalBody>
      <ModalFooter>
        <Button auto color="success" onClick={onClose}>
          Agree
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TermsModal;
