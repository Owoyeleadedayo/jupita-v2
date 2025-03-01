import {
    Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";

interface NewUserPage {
  openNewUser: boolean;
  closeNewUser: () => void;
}

const NewUserModal = ({ openNewUser, closeNewUser }: NewUserPage) => {
  return (
    <>
      <Modal isOpen={openNewUser} onClose={closeNewUser}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            py={"50px"}
          >
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"22px"}
                fontWeight={700}
                color={"#1F5AA3"}
              >
                New User
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"20px"}>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Full Name
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="Enter Full Name"
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#000000"}
                  borderRadius={"12px"}
                />
              </Flex>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Email address
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="Enter Email Address"
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#000000"}
                  borderRadius={"12px"}
                />
              </Flex>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Phone number
                </Text>
                <Input
                  variant={"none"}
                  type="number"
                  border={"1px solid #B8C8E039"}
                  placeholder="Adeyemi"
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#000000"}
                  borderRadius={"12px"}
                />
              </Flex>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Role
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  <option value="selectRole">Select role</option>
                </Select>
              </Flex>
            </Flex>
            <Flex my={'10px'} justifyContent={'end'}>
              <Button
                variant={"none"}
                bg={"#1F5AA3"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#FFFFFF"}
                textTransform={"capitalize"}
              >
                Invite User
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewUserModal;
