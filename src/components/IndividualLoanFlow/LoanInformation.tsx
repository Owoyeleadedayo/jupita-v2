import { Flex, Input, Select, Text } from "@chakra-ui/react";

const LoanInformation = () => {
  return (
    <>
      <Flex width={"100%"} height={"100%"}>
        <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
          <Flex width={"403px"} height={"300px"}>
            <Flex direction={"column"} gap={"20px"}>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#7D8592"}
                >
                  How much loan do you need?
                </Text>
                <Input
                  type="text"
                  width={"403px"}
                  borderRadius={"8px"}
                  placeholder="Enter the amount you need"
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#7D8592"}
                />
              </Flex>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#7D8592"}
                >
                  How long do you want to repay for?
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#7D8592"}
                >
                  <option value="select_tenor">Select Tenor</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#7D8592"}
                >
                  What is the purpose of this loan?
                </Text>
                <Input
                  type="text"
                  width={"403px"}
                  borderRadius={"8px"}
                  placeholder="Enter the reason for this loan"
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#7D8592"}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default LoanInformation;
