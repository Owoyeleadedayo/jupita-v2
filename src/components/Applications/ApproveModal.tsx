import {
    Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import AI from "../../assets/images/approveImg.png"

interface ApproveModalPage {
  isOpenApprove: boolean;
  onCloseApprove: () => void;
}

const ApproveModal = ({ isOpenApprove, onCloseApprove }: ApproveModalPage) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onCloseApprove}
        isOpen={isOpenApprove}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton p={"10px"} bg={"#F4F9FD"} />
          <ModalBody display={"flex"} flexDirection={"column"} gap={'20px'} my={"50px"}>
            <Flex direction={'column'}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
              >
                Are you sure you want to approve this request?
              </Text>
              <Box>
                <Image src={AI} width={"100%"} height={"100%"} />
              </Box>
            </Flex>
            <Flex justifyContent={"flex-end"}>
              <Button
                bg={"#1F5AA3"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#FFFFFF"}
              >
                Save Comment
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ApproveModal;
