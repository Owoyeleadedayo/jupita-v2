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
} from "@chakra-ui/react";

import { BsFunnel } from "react-icons/bs";
import { CiExport, CiSearch } from "react-icons/ci";

const Logs = () => {
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Flex gap={{ md: "10px", base: "4px" }} flexDirection={"row-reverse"}>
            <InputGroup
              bg="#FFFFFF"
              width={"281px"}
              height={"40px"}
              variant={"none"}
              borderRadius={"10px"}
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
            >
              <Flex pr={"5px"}>
                <CiExport color="#FFFFFF" fontSize={"20px"} />
              </Flex>
              Export
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Table>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Time Stamp
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Action
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  User
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg={'#FFFFFF'}>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  25/09/2025 11:24
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Logged in
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Williams Adeyemi
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};

export default Logs;
