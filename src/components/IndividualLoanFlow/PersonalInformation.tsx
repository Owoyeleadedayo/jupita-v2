import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Select,
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
import { FaArrowRight } from "react-icons/fa";
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
  return (
    <>
      <Flex width={"100%"} height={"100vh"}>
        <Flex width={"30%"} height={"100vh"} bg={"#1F5AA3"}>
          <Flex direction={"column"} gap={"40px"} p={"50px"}>
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
                      bg="#FFFFFF4D"
                      borderColor={
                        index === activeStep || index === activeStep + 0
                          ? "#FFFFFF"
                          : "transparent"
                      }
                      borderWidth="2px"
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

        <Flex width={"100%"} height={"100%"} direction={"column"}>
          <Flex
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            direction={"column"}
            gap={"20px"}
            py={"40px"}
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
              <Flex width={"403px"} height={"300px"}>
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
                        borderRadius={"8px"}
                        placeholder="Enter First Name"
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#7D8592"}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent={"space-between"} gap={"20px"}>
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
                        borderRadius={"8px"}
                        placeholder="Enter First Name"
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
            <Divider mt={"90px"} />
            <Flex position={"absolute"} right={0} bottom={"1px"} px={"20px"}>
              <Button
                width={"145px"}
                height={"44px"}
                bgColor={"#1F5AA3"}
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#FFFFFF"}
                variant={"none"}
                // onClick={() => navigate("/verify")}
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
    </>
  );
};

export default PersonalInformation;
