import { Flex, Input, Text } from "@chakra-ui/react";
const EmploymentInfo = () => {
  return (
    <>
      <Flex width={"100%"} height={"100%"} my={"30px"}>
        <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
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
                      Employer name
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Enter Employer Name"
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
                      Employment type
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
                      Sector
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="Select Sector"
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
                      Employment start date
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
                      Net income
                    </Text>
                    <Input
                      type="number"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="enter net income"
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
                      Designation
                    </Text>
                    <Input
                      type="text"
                      width={"190px"}
                      borderRadius={"8px"}
                      placeholder="select designation"
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
                      Work email
                    </Text>
                    <Input
                      type="email"
                      borderRadius={"8px"}
                      placeholder="Enter Your Work Email"
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
                      Employer address
                    </Text>
                    <Input
                      type="text"
                      borderRadius={"8px"}
                      placeholder="Enter Address"
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

export default EmploymentInfo;
