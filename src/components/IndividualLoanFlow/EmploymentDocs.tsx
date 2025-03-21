import {
  Box,
    Button,
    Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  //   Select,
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
import { ChangeEvent, useState } from "react";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmploymentDocs = () => {
  const steps = [
    { title: "Loan information" },
    { title: "Personal information" },
    { title: "BVN and ID Validation" },
    { title: "Employment Details" },
    { title: "Documents" },
    { title: "Bank Statement" },
  ];

  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });

  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const navigate = useNavigate();
  return (
    <>
      <Flex width={"100%"} height={"100%"}>
        <Flex width={"30%"} height={"780px"} bg={"#1F5AA3"}>
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
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"18px"}
                        color={
                          index === 0 ||
                          index === 1 ||
                          index === 2 ||
                          index === 3 ||
                          index === 4
                            ? "#FFFFFF"
                            : "#FFFFFF4D"
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
                Step 5/6
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"22px"}
                color={"#0A1629"}
              >
                Employment Documents
              </Text>
            </Flex>
            <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Employment offer
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Payslip
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Utility bill
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Additional document
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
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
                  onClick={() => navigate("/statement")}
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

export default EmploymentDocs;
