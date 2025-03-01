import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";

interface ProfileModalPage {
  isOpenProfile: boolean;
  onCloseProfile: () => void;
}


const ProfileModal = ({ onCloseProfile, isOpenProfile }: ProfileModalPage) => {
  return (
    <>
      <Modal onClose={onCloseProfile} isOpen={isOpenProfile} isCentered>
        <ModalOverlay />
        <ModalContent pt="20px">
          <ModalHeader
            fontFamily={"Nunito Sans"}
            fontSize={"22px"}
            fontWeight={700}
            color={"#1F5AA3"}
            textTransform={'capitalize'}
          >
            Personal profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            flexDirection={"column"}
            gap={"20px"}
            maxH="450px"
            overflowY="auto"
          >
            <Flex direction={"column"} gap={"20px"}>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  First name
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="Williams"
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Last name
                </Text>
                <Input
                  variant={"none"}
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Other name
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="Enter Phone Number"
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Phone number
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="09065512525"
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  NIN
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="12345678909"
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  email address
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="justme@gmail.com"
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Date of birth
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
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Home address
                </Text>
                <Input
                  variant={"none"}
                  border={"1px solid #B8C8E039"}
                  placeholder="14, Amazing Grace Estate, Oloko road"
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
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  State
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  <option value="selectRole">Select state</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  L.G.A
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  <option value="selectRole">Select L.G.A</option>
                </Select>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"flex-end"} alignItems={"end"}>
            <Button
              variant={"none"}
              bgColor={"#1F5AA3"}
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
              color={"#FFFFFF"}
              borderRadius={'12px'}
            >
              Save changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal
