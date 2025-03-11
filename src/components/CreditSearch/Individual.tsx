import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import FC from "../../assets/images/FirstCentral.png";
import CR from "../../assets/images/CRedReg.png";
import CRC from "../../assets/images/crc.png";

const Individual = () => {
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
      >
        <Flex direction={"column"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"14px"}
            fontWeight={700}
            color={"#7D8592"}
          >
            Reason for Enquiry
          </Text>
          <Select
            width={"300px"}
            fontFamily={"Nunito Sans"}
            fontSize={"14px"}
            fontWeight={700}
            color={"#7D8592"}
          >
            <option>Select Reason</option>
          </Select>
        </Flex>
        <Flex direction={"column"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"14px"}
            fontWeight={700}
            color={"#7D8592"}
          >
            BVN
          </Text>
          <Input
            placeholder="xyz@gmail.com"
            type="email"
            width={"300px"}
            fontFamily={"Nunito Sans"}
            fontSize={"14px"}
            fontWeight={700}
            color={"#7D8592"}
          />
        </Flex>
        <Flex alignItems={"center"} gap={"20px"}>
          <Flex gap={"20px"}>
            <Checkbox />
            <Flex gap={"10px"} justifyContent={"space-between"}>
              <Box display={"flex"} width={"24px"} height={"24px"}>
                <Image
                  src={FC}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                First Central
              </Text>
            </Flex>
          </Flex>
          <Flex gap={"20px"}>
            <Checkbox />
            <Flex gap={"10px"} justifyContent={"space-between"}>
              <Box display={"flex"} width={"24px"} height={"24px"}>
                <Image
                  src={CR}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Credit Registry
              </Text>
            </Flex>
          </Flex>
          <Flex gap={"20px"}>
            <Checkbox />
            <Flex gap={"10px"} justifyContent={"space-between"}>
              <Box display={"flex"} width={"24px"} height={"24px"}>
                <Image
                  src={CRC}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                CRC
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex my={'10px'}>
          <Button
            variant={"none"}
            bgColor={"#1F5AA3"}
            borderRadius={"12px"}
            boxShadow={"lg"}
            fontFamily={"Nunito Sans"}
            fontSize={"16px"}
            fontWeight={700}
            color={"#FFFFFF"}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Individual;
