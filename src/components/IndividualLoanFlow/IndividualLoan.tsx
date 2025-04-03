import {
  Box,
  Button,
  Divider,
  Flex,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  StepIcon,
  Text,
  useSteps,
  Image,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logo from "../../assets/images/white.png";
import { useState } from "react";
import LoanInformation from "./LoanInformation";
import PersonalInformation from "./PersonalInformation";
import BvnValidation from "./BvnValidation";
import EmploymentInfo from "./EmploymentInfo";
import EmploymentDocs from "./EmploymentDocs";
import BankStatement from "./BankStatement";

const steps = [
  { title: "Loan Information", component: <LoanInformation /> },
  { title: "Personal Information", component: <PersonalInformation /> },
  { title: "BVN and ID Validation", component: <BvnValidation /> },
  { title: "Employment Details", component: <EmploymentInfo/> },
  { title: "Documents", component: <EmploymentDocs /> },
  { title: "Bank Statement", component: <BankStatement /> },
];

export default function IndividualLoan() {
  useSteps({ index: 0, count: steps.length });
  const [stepIndex, setStepIndex] = useState(0);

  return (
    <Flex width={"100%"} height="100%">
      <Flex
        width="30%"
        bg="#1F5AA3"
        p="50px"
        direction="column"
        gap="40px"
        height={
          stepIndex === 4
            ? "750px"
            : stepIndex === 1 || stepIndex === 3
            ? "720px"
            : "100%"
        }
        minHeight={
          stepIndex === 4
            ? "750px"
            : stepIndex === 1 || stepIndex === 3
            ? "720px"
            : "100vh"
        }
        alignSelf="stretch"
      >
        <Box width={"40px"} height={"40px"}>
          <Image
            src={Logo}
            alt="Logo"
            width={"100%"}
            height={"100%"}
            objectFit={"contain"}
          />
        </Box>
        <Text fontWeight={700} fontSize={"30px"} color={"#FFFFFF"}>
          Loan Request
        </Text>
        <Stepper
          index={stepIndex}
          orientation="vertical"
          height="300px"
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator
                bg={index === stepIndex ? "#1F5AA3" : "transparent"}
                borderColor={index <= stepIndex ? "#FFFFFF" : "#FFFFFF4D"}
                borderWidth="1px"
                borderStyle="solid"
              >
                <StepStatus
                  complete={
                    <StepIcon
                      color={"blue"}
                      bg={"white"}
                      width={"100%"}
                      height={"100%"}
                      borderRadius={"50%"}
                      p={"5px"}
                    />
                  }
                />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle
                  fontWeight={600}
                  fontSize={"18px"}
                  color={index <= stepIndex ? "#FFFFFF" : "#FFFFFF4D"}
                >
                  {step.title}
                </StepTitle>
              </Box>
              {index < steps.length - 1 && (
                <StepSeparator
                  borderColor={index <= stepIndex ? "#FFFFFF" : "#FFFFFF4D"}
                  borderWidth="1px"
                />
              )}
            </Step>
          ))}
        </Stepper>
      </Flex>
      <Flex
        flex="1"
        width={"70%"}
        height={"100vh"}
        direction={"column"}
        alignItems={"center"}
        py={"20px"}
        gap={"10px"}
      >
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"14px"}
          color={"#1F5AA3"}
        >
          Step {stepIndex + 1}/{steps.length}
        </Text>
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"22px"}
          color={"#0A1629"}
        >
          {steps[stepIndex].title}
        </Text>
        <Flex width={"403px"}>{steps[stepIndex].component}</Flex>
        <Flex width={"100%"} mt="auto" direction={"column"} gap={"10px"}>
          <Divider />
          <Flex width={"100%"} direction={"column"} gap={"20px"}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              mx={"10px"}
            >
              {stepIndex > 0 && stepIndex !== 3 && (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  width="145px"
                  height="44px"
                  gap="10px"
                  cursor="pointer"
                  onClick={() => stepIndex > 0 && setStepIndex(stepIndex - 1)}
                >
                  <FaArrowLeft color="#1F5AA3" />
                  <Text
                    fontFamily="Nunito Sans"
                    fontWeight={700}
                    fontSize="16px"
                    color="#1F5AA3"
                  >
                    Previous
                  </Text>
                </Flex>
              )}

              <Flex ml="auto">
                <Button
                  width={"145px"}
                  height={"44px"}
                  bgColor={"#1F5AA3"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                  variant={"none"}
                  onClick={() =>
                    stepIndex < steps.length - 1 && setStepIndex(stepIndex + 1)
                  }
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
    </Flex>
  );
}
