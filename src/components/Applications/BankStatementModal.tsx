import { Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import BS from "../../assets/images/statement.png"

interface BankStatement {
  openStatement: boolean;
  closeStatement: () => void;
}

const BankStatementModal = ({
  openStatement,
  closeStatement,
}: BankStatement) => {
  return (
    <>
      <Modal isOpen={openStatement} onClose={closeStatement} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={"50px"}>
            <Image src={BS} width={'100%'} height={'100%'} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BankStatementModal
