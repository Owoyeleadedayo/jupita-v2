import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import PDF from "../../assets/images/pdf.png";
import { RiMore2Line } from "react-icons/ri";

const Documents = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"420px"}
        bgColor={"#FFFFFF"}
        my={"20px"}
        p={"20px"}
        direction={"column"}
        gap={"20px"}
        borderRadius={"10px"}
        boxShadow={"md"}
      >
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"16px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            Documents
          </Text>
          <Flex>
            <Button
              variant={"none"}
              width={"108px"}
              height={"32px"}
              bgColor={"#1F5AA3"}
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
              color={"#FFFFFF"}
              gap={"5px"}
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <FaPlus color="#FFFFFF" />
              </Flex>
              Add New
            </Button>
          </Flex>
        </Flex>
        <Flex gap={"20px"}>
          <Flex
            width={"518px"}
            height={"70px"}
            justifyContent={"space-between"}
          >
            <Flex gap={"10px"}>
              <Flex
                width={"44px"}
                height={"44px"}
                bg={"#6D5DD319"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"12px"}
              >
                <Box width={"24px"} height={"24px"}>
                  <Image
                    src={PDF}
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
              <Flex direction={"column"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  bank statement.pdf
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={400}
                  color={"#91929E"}
                >
                  10 MB PDF
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#0A1629"}
              >
                Bank Statement
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={"44px"}
            height={"44px"}
            bgColor={"#F4F9FD"}
            borderRadius={"12px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RiMore2Line />}
                fontSize={"20px"}
                fontWeight={700}
                color="#0A1629"
              />
              <MenuList>
                <MenuItem>View file</MenuItem>
                <MenuItem>Analyze file</MenuItem>
                <MenuItem>Delete file</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Documents;
