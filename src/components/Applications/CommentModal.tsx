import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Textarea } from "@chakra-ui/react";

interface CommentModalPage {
    isOpenComment: boolean;
    onCloseComment: () => void;
}


const CommentModal = ({ isOpenComment, onCloseComment }: CommentModalPage) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onCloseComment}
        isOpen={isOpenComment}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton p={"10px"} bg={"#F4F9FD"} />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            gap={"50px"}
            my={"50px"}
          >
            <Textarea
              placeholder="Add your comment"
              width={"400px"}
              height={"150px"}
              fontFamily={"Nunito Sans"}
              fontSize={"16px"}
              fontWeight={700}
              color={"#FFFFFF"}
            />
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

export default CommentModal
