import { Flex, Input, Text } from "@chakra-ui/react";

const PersonalInformation = () => {
  return (
    <>
      <Flex width={"100%"} height={"100%"} my={'30px'}>
        <Flex
          width={"100%"}
          height={"100%"}
          direction={"column"}
          gap={"20px"}
        >
          <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
            <Flex width={"403px"} height={"100%"}>
              <Flex direction={"column"} gap={"20px"}>
                <Flex justifyContent={"space-between"} gap={"20px"}>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                      textTransform={"capitalize"}
                    >
                      First name
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter First Name"
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
                      Other name
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter First Name"
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    />
                  </Flex>
                </Flex>

                <Flex gap={"20px"}>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                      textTransform={"capitalize"}
                    >
                      Last name
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter Last Name"
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
                      Date of birth
                    </Text>
                    <Input
                      type="date"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter First Name"
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    />
                  </Flex>
                </Flex>

                <Flex gap={"20px"}>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                      textTransform={"capitalize"}
                    >
                      Mobile number
                    </Text>
                    <Input
                      type="number"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter Last Name"
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
                      Gender
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter First Name"
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    />
                  </Flex>
                </Flex>

                <Flex>
                  <Flex width={"100%"} direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                      textTransform={"capitalize"}
                    >
                      Email address
                    </Text>
                    <Input
                      type="email"
                      borderRadius={"8px"}
                      placeholder="Enter The Amount You Need"
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    />
                  </Flex>
                </Flex>

                <Flex>
                  <Flex width={"100%"} direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                      textTransform={"capitalize"}
                    >
                      Home address
                    </Text>
                    <Input
                      type="text"
                      borderRadius={"8px"}
                      placeholder="Enter Your Address"
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    />
                  </Flex>
                </Flex>

                {/* State of Residence and Local Govt. Area */}
                <Flex gap={"20px"}>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                      textTransform={"capitalize"}
                    >
                      State of Residence
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Select State"
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
                      Local Govt. Area
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Select Local govt. area"
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
      </Flex>
    </>
  );
};

export default PersonalInformation;
