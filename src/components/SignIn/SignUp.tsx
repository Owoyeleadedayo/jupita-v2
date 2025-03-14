import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Select,
  Step,
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
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const steps = [{ title: "Business information" }, { title: "Verify email" }];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <>
      <Flex width={"100%"} height={"100%"}>
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
                Get started
              </Text>
            </Flex>
            <Flex>
              <Stepper
                index={activeStep}
                orientation="vertical"
                height="100px"
                gap="0"
              >
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator bg="#FFFFFF4D" border="2px solid white">
                      <StepStatus />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"18px"}
                        color={"#FFFFFF"}
                      >
                        {step.title}
                      </StepTitle>
                    </Box>

                    {index < steps.length - 0 && (
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
            gap={"5px"}
            py={"15px"}
          >
            <Flex alignItems={"center"} direction={"column"} gap={"10px"}>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#1F5AA3"}
                >
                  Step 1/2
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"22px"}
                  color={"#0A1629"}
                >
                  Business Information
                </Text>
              </Flex>
              <Flex width={"403px"} height={"450px"}>
                <Flex direction={"column"} gap={"10px"}>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    >
                      Business Name
                    </Text>
                    <Input
                      type="text"
                      width={"403px"}
                      borderRadius={"8px"}
                      placeholder="Enter Your Business Name"
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
                      Business Registration Number
                    </Text>
                    <Input
                      type="text"
                      width={"403px"}
                      borderRadius={"8px"}
                      placeholder="Enter Your Business Registration Number"
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
                      Business Type
                    </Text>
                    <Select
                      fontFamily={"Nunito Sans"}
                      fontWeight={500}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    >
                      <option value="option1">Select Business Type</option>
                    </Select>
                  </Flex>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    >
                      Email Address
                    </Text>
                    <Input
                      type="text"
                      width={"403px"}
                      borderRadius={"8px"}
                      placeholder="xyz@gmail.com"
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
                      Mobile Number
                    </Text>
                    <Flex justifyContent={"space-between"}>
                      <Select
                        fontFamily={"Nunito Sans"}
                        width={"90px"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#7D8592"}
                      >
                        <option value="+234">+234</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                      </Select>
                      <Input
                        type="tel"
                        width={"300px"}
                        placeholder="345 567-23-56"
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#7D8592"}
                      />
                    </Flex>
                  </Flex>
                  <Flex direction={"column"} gap={"3px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    >
                      Password
                    </Text>
                    <Input
                      type="password"
                      width={"403px"}
                      borderRadius={"8px"}
                      placeholder="••••••••"
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#7D8592"}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Divider />
            <Flex position={"absolute"} right={0} bottom={"7px"} px={"20px"}>
              <Button
                width={"145px"}
                height={"44px"}
                bgColor={"#1F5AA3"}
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#FFFFFF"}
                variant={"none"}
                onClick={() => navigate("/verify")}
              >
                Next Step{" "}
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

export default SignUp;
