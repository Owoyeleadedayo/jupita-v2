import { Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import { HiArrowSmRight } from "react-icons/hi";

interface AddProduct {
    isOpen: boolean;
    onClose: () => void;
}

const NewProductModal = ({isOpen, onClose}: AddProduct) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size={"lg"} isCentered>
        <ModalOverlay />
        <ModalContent pt={"30px"}>
          <ModalHeader
            fontFamily={"Nunito Sans"}
            fontSize={"24px"}
            fontWeight={700}
          >
            Create New Product
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Flex direction={"column"} gap={"15px"}>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                >
                  Product Name
                </Text>
                <Input
                  width={"100%"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                />
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  >
                    Minimum Amount
                  </Text>
                  <Input
                    width={"220px"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  />
                </Flex>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  >
                    Maximum Amount
                  </Text>
                  <Input
                    width={"220px"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  />
                </Flex>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  >
                    Minimum Tenor
                  </Text>
                  <Input
                    width={"220px"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  />
                </Flex>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  >
                    Maximum Tenor
                  </Text>
                  <Input
                    width={"220px"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  />
                </Flex>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  >
                    Minimum Interest Rate
                  </Text>
                  <Input
                    width={"220px"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  />
                </Flex>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  >
                    Maximum Interest Rate
                  </Text>
                  <Input
                    width={"220px"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#7D8592"}
                  />
                </Flex>
              </Flex>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                >
                  Scorecard Applicable
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#7D8592"}
                >
                  <option>Jupita Default</option>
                </Select>
              </Flex>
            </Flex>
            <Flex justifyContent={'flex-end'}>
              <Flex
                width={"120px"}
                height={"40px"}
                px={"5px"}
                my={"20px"}
                bg={"#1F5AA3"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"7px"}
                borderRadius={"10px"}
              >
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#FFFFFF"}
                >
                  Continue
                </Text>
                <HiArrowSmRight color={"#FFFFFF"} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewProductModal
