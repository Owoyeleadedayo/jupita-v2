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
import D1 from '../../assets/images/dataImg.png'
import D2 from "../../assets/images/dataImg1.png";

interface DataModalPage {
  openData: boolean;
  closeData: () => void;
}

const DataModal = ({ openData, closeData }: DataModalPage) => {
  return (
    <>
      <Modal isOpen={openData} onClose={closeData} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={"50px"}>
            <Flex flexDirection={"column"} gap={"30px"}>
              <Flex gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#000000"}
                >
                  Biometric KYC:{" "}
                </Text>
                <Button
                  variant={"none"}
                  width={"78px"}
                  height={"19px"}
                  bgColor={"#BDFEE8"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"10px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  SUCCESSFUL
                </Button>
              </Flex>
              <Flex justifyContent={"center"} alignItems={'center'} gap={'80px'}>
                <Flex direction={"column"} gap={"5px"}>
                  <Box>
                    <Image
                      src={D1}
                      width={"100%"}
                      height={"100%"}
                      objectFit={"contain"}
                    />
                  </Box>
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                    >
                      Incoming selfie
                    </Text>
                  </Flex>
                </Flex>
                <Flex direction={"column"} gap={"5px"}>
                  <Box>
                    <Image
                      src={D2}
                      width={"100%"}
                      height={"100%"}
                      objectFit={"contain"}
                    />
                  </Box>
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                    >
                      Photo from id authority
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                  >
                    BVN Data
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Flex direction={"column"} gap={"10px"}>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        First Name:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        Williams
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        Last Name:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        Adeyemi
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        Other Name:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        Olalekan
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        Enrolment Date:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        25-Sep-2021
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        BVN:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        223344552277
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        NIN:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        12345678909
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        Phone Number:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        09065512222
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        Enrolment Bank:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                      >
                        Guaranty Trust Bank
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataModal;
