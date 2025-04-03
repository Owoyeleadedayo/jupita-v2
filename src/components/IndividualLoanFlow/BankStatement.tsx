import { Flex, Select, Text } from "@chakra-ui/react";

const BankStatement = () => {
  return (
    <Flex width={"100%"} height={"100%"} my={"30px"}>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
          <Flex width={"403px"} height={"100%"}>
            <Flex width={"100%"} direction={"column"} gap={"20px"}>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Select bank statement source
                </Text>

                <Select
                  borderRadius={"8px"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#7D8592"}
                >
                  <option value="option1">Link with MBS</option>
                </Select>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BankStatement;
