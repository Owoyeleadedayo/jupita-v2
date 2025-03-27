import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsFunnel } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import NewProductModal from "./NewProductModal";

const LoanProduct = () => {
    const {isOpen: isOpen, onClose: onClose, onOpen: onOpen} = useDisclosure()
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        direction={"column"}
        gap={"20px"}
        my={"20px"}
        pr={"10px"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex gap={{ md: "10px", base: "4px" }} flexDirection={"row-reverse"}>
            <InputGroup
              bg="#FFFFFF"
              width={"281px"}
              height={"40px"}
              variant={"none"}
              borderRadius={"10px"}
              boxShadow={"md"}
            >
              <InputLeftElement pointerEvents="none">
                <CiSearch color="#0A1629" fontSize={"18px"} />
              </InputLeftElement>
              <Input
                placeholder="Search here..."
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                color={"#000"}
                fontWeight={400}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
            <Button
              width={"40px"}
              height={"40px"}
              bgColor="#FFFFFF"
              p={0}
              color={"#737791"}
              borderRadius={"10px"}
              variant={"none"}
              boxShadow={"md"}
            >
              <BsFunnel color="#000000" fontSize={"18px"} />
            </Button>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Button
              px={{ md: "12px", base: "3px" }}
              py={{ md: "5px", base: "1px" }}
              variant={"none"}
              bgColor={"#1F5AA3"}
              color={"white"}
              fontFamily={"Nunito Sans"}
              fontSize={{ md: "16px", base: "14px" }}
              onClick={onOpen}
            >
              Add New
            </Button>
            <NewProductModal isOpen={isOpen} onClose={onClose} />
          </Flex>
        </Flex>
        <Flex>
          <Table borderRadius={"14px"} boxShadow={"md"}>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  ID
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Scorecard Name
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Status
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Created By
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                ></Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                ></Th>
              </Tr>
            </Thead>
            <Tbody bg={"#FFFFFF"} borderRadius={"20px"}>
              <Tr>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  001
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  Jupita Default
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#067B58"}
                >
                  Active
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  Adeyemi Williams
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  <Button height={"35px"} p={0} borderRadius={"12px"}>
                    <FiEdit fontSize={"18px"} />
                  </Button>
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  <Button height={"35px"} p={0} borderRadius={"12px"}>
                    <RiDeleteBin6Line fontSize={"18px"} />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};

export default LoanProduct;
