import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
} from "@chakra-ui/react";
import Logo from "../../assets/images/white.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const PersonalInformation = () => {
  const steps = [
    { title: "Loan information" },
    { title: "Personal information" },
    { title: "BVN and ID Validation" },
    { title: "Employment Details" },
    { title: "Documents" },
    { title: "Bank Statement" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const navigate = useNavigate();
  return (
    <>
      <Flex width={"100%"} height={"100%"}>
        <Flex width={"30%"} height={"740px"} bg={"#1F5AA3"}>
          <Flex height={"100%"} direction={"column"} gap={"40px"} p={"50px"}>
            <Box width={"40px"} height={"40px"}>
              <Image
                src={Logo}
                alt="Logo"
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"30px"}
                color={"#FFFFFF"}
                textTransform={"capitalize"}
              >
                Loan Request
              </Text>
            </Flex>
            <Flex>
              <Stepper
                index={activeStep}
                orientation="vertical"
                height="300px"
                gap="0"
              >
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator
                      bg="#1F5AA3"
                      borderColor={
                        index === activeStep ? "#FFFFFF" : "#FFFFFF4D"
                      }
                      borderWidth="1px"
                      borderStyle="solid"
                    >
                      <StepStatus
                        complete={
                          <StepIcon
                            color={"blue"}
                            bg={"white"}
                            width={"100%"} // Set the size of the icon
                            height={"100%"}
                            borderRadius={"50%"}
                            p={"5px"}
                          />
                        }
                      />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"18px"}
                        color={
                          index === 0 || index === 1 ? "#FFFFFF" : "#FFFFFF4D"
                        }
                      >
                        {step.title}
                      </StepTitle>
                    </Box>

                    {index < steps.length - 1 && (
                      <StepSeparator border="1px solid white" />
                    )}
                  </Step>
                ))}
              </Stepper>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          width={"100%"}
          height={"100%"}
          direction={"column"}
          gap={"20px"}
          pt={"40px"}
        >
          <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                color={"#1F5AA3"}
              >
                Step 1/6
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"22px"}
                color={"#0A1629"}
              >
                Personal Information
              </Text>
            </Flex>

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

          <Flex pt={"10px"} direction={"column"} gap={"20px"}>
            <Flex>
              <Divider />
            </Flex>

            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              mx={"10px"}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                width={"145px"}
                height={"44px"}
                gap={"10px"}
                cursor={"pointer"}
                onClick={() => navigate(-1)}
              >
                <FaArrowLeft color="#1F5AA3" />
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  color={"#1F5AA3"}
                >
                  Previous
                </Text>
              </Flex>

              <Flex justifyContent={"end"}>
                <Button
                  width={"145px"}
                  height={"44px"}
                  bgColor={"#1F5AA3"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                  variant={"none"}
                  onClick={() => navigate("/validation")}
                >
                  Continue{" "}
                  <Flex pl={"10px"}>
                    <FaArrowRight color={"#FFFFFF"} />
                  </Flex>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PersonalInformation;
