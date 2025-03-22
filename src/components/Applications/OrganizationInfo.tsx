import { Button, Flex, Text } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

const OrganizationInfo = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"244px"}
        p={"20px"}
        bgColor={"#FFFFFF"}
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
            Organization Information
          </Text>
          <Button width={"40px"} height={"40px"} p={0} borderRadius={"14px"}>
            <FiEdit fontSize={"20px"} />
          </Button>
        </Flex>
        <Flex width={"100%"} gap={"20px"}>
          <Flex
            width={"150px"}
            height={"100%"}
            direction={"column"}
            gap={"30px"}
          >
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
              >
                Employment type
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
              >
                Self Employed
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
              >
                Role
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
              >
                Director
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={"200px"}
            height={"100%"}
            direction={"column"}
            gap={"30px"}
          >
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Company name
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                DLM Capital Group
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Work email/business email
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                wadeyemi@dlm.group
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={"150px"}
            height={"100%"}
            direction={"column"}
            gap={"30px"}
          >
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Company sector
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                Financial Institution
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Net income
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                3,000,000.00
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={"200px"}
            height={"100%"}
            direction={"column"}
            gap={"30px"}
          >
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Start Date
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                25-Sep-2023
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"2px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Business address
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"15px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                66-68 Alexander Rd, Ikoyi Lagos.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default OrganizationInfo;
