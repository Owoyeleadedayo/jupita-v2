import { Flex, Input, Text } from "@chakra-ui/react";

const BvnValidation = () => {
  return (
    <>
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
                    Bank Verification Number
                  </Text>
                  <Input
                    type="number"
                    borderRadius={"8px"}
                    placeholder="Enter BVN"
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
                    textTransform={"capitalize"}
                  >
                    National Identity Number
                  </Text>
                  <Input
                    type="number"
                    borderRadius={"8px"}
                    placeholder="Enter NIN"
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
      </Flex>
    </>
  );
};

export default BvnValidation;
