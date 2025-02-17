import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Image,
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
import { FaCircleCheck } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";

const VerifyEmail = () => {
  const steps = [{ title: "Valid your phone" }, { title: "Verify email" }];

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
                      <StepStatus complete={<StepIcon />} />
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
            py={"10px"}
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
                  Verify Email Address
                </Text>
              </Flex>

              <Flex
                direction={"column"}
                gap={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <FaCircleCheck color="#0BB783" fontSize={"80px"} />
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  color={"#0A1629"}
                >
                  Verification Sent
                </Text>
              </Flex>

              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                gap={"10px"}
              >
                <Alert
                  status="info"
                  bg={"#FFF9F6"}
                  width={"403px"}
                  borderRadius={"14px"}
                >
                  <AlertIcon />
                  <AlertTitle
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"14px"}
                    color={"#1F5AA3"}
                  >
                    We have sent a verification email to your email address.
                    Please check your inbox and follow the instructions to
                    verify your email.
                  </AlertTitle>
                </Alert>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"12px"}
                    color={"#0A1629"}
                  >
                    Didn’t receive the email?{" "}
                    <Text
                      as={"span"}
                      fontWeight={600}
                      color={"#3F8CFF"}
                      textDecoration={"underline"}
                    >
                      Click here to resend
                    </Text>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default VerifyEmail;
