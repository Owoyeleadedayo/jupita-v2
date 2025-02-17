import {
    Box,
  Flex,
  Image,
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
                      border={index === 0 ? "2px solid white" : "none"}
                    >
                      <StepStatus />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"18px"}
                        color={index === 0 ? "#FFFFFF" : "#FFFFFF4D"}
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
      </Flex>
    </>
  );
}

export default PersonalInformation
