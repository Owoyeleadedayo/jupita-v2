import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import DP from "../../assets/images/detailsPic.png";
import { FiEdit } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import DataModal from "./DataModal";
import ProfileModal from "./ProfileModal";
import { SetStateAction, useState } from "react";

const Decide = () => {
  const [showLoanDecision, setShowLoanDecision] = useState(false);

   const handleSubmit = () => {
     setShowLoanDecision(true);
   };

   const [radioValue, setRadioValue] = useState("1");
   const [radioValue2, setRadioValue2] = useState("1");

   const handleRadioChange = (value: SetStateAction<string>) => {
     setRadioValue(value);
   };
   const handleRadioChange2 = (value: SetStateAction<string>) => {
    setRadioValue2(value);
   }

    const {isOpen:openData, onClose:closeData, onOpen:onOpenData} = useDisclosure()
      const {
        isOpen: isOpenProfile,
        onClose: onCloseProfile,
        onOpen: onOpenProfile,
      } = useDisclosure();
  return (
    <>
      <Flex width={"100%"} height={"100%"} gap={"20px"} my={"20px"}>
        <Flex
          width={"268px"}
          height={"750px"}
          bgColor={"#FFFFFF"}
          py={"20px"}
          px={"10px"}
          direction={"column"}
          gap={"20px"}
          borderRadius={"10px"}
        >
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Flex>
              <Box width={"64px"} height={"64px"} position={"relative"}>
                <Image
                  src={DP}
                  width={"100%"}
                  height={"100%"}
                  alt="DP"
                  objectFit={"contain"}
                />
              </Box>
              <Box position={"absolute"} right={1010} pt={"5px"}>
                <FaCircleCheck color="#067B58" fontSize={"20px"} />
              </Box>
            </Flex>
            <Flex>
              <Button
                width={"44px"}
                height={"44px"}
                p={0}
                borderRadius={"14px"}
                onClick={onOpenProfile}
              >
                <FiEdit fontSize={"25px"} />
                <ProfileModal
                  isOpenProfile={isOpenProfile}
                  onCloseProfile={onCloseProfile}
                />
              </Button>
            </Flex>
          </Flex>
          <Flex>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              fontSize={"16px"}
              color={"#0A1629"}
            >
              Williams Olalekan Adeyemi
            </Text>
          </Flex>
          <Flex direction={"column"} gap={"20px"}>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                Phone number
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                09012345678
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                Email address
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                williams.adeyemi@yahoo.com
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                BVN
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                22334455667
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                NIN
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                12345678909
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                Date of birth
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                25-September-1800
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                Gender
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                Male
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#91929E"}
              >
                Home Address
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#0A1629"}
              >
                14, Amazing Grace Estate, Idi Iroko Road, Ota Ogun State
              </Text>
            </Flex>
          </Flex>
          <Flex mt={"50px"} justifyContent={"center"} alignItems={"center"}>
            <Button
              width={""}
              height={{ md: "40px", base: "30px" }}
              bgColor={"#1F5AA3"}
              fontSize={{ md: "14px", xl: "14px" }}
              lineHeight={"20px"}
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              color={"white"}
              textTransform={"capitalize"}
              borderRadius={"12px"}
              _hover={{
                bg: "white",
                border: "1px solid #2261B0",
                color: "#2261B0",
              }}
              onClick={onOpenData}
            >
              View BVN Data
            </Button>
            <DataModal openData={openData} closeData={closeData} />
          </Flex>
        </Flex>
        {!showLoanDecision && (
          <Flex
            width={"800px"}
            height={"917px"}
            bgColor={"#FFFFFF"}
            p={"20px"}
            borderRadius={"12px"}
            direction={"column"}
            gap={"20px"}
          >
            <Flex direction={"column"} gap={"20px"}>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Verified net income
                </Text>
                <Input
                  type="text"
                  placeholder="Enter net income"
                  width={"350px"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
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
                  Monthly loan repayment
                </Text>
                <Input
                  type="text"
                  placeholder="Enter monthly loan repayment"
                  width={"350px"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                />
              </Flex>
            </Flex>
            <Flex mt={"10px"}>
              <Button
                variant={"none"}
                bgColor={"#1F5AA3"}
                borderRadius={"12px"}
                boxShadow={"lg"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#FFFFFF"}
                onClick={handleSubmit}
              >
                Run decision
              </Button>
            </Flex>
          </Flex>
        )}
        {showLoanDecision && (
          <Flex
            width={"100%"}
            height={"100%"}
            // direction={"column"}
            gap={"20px"}
          >
            <Flex
              width={"500px"}
              height={"100%"}
              bg={"#FFFFFF"}
              p={"20px"}
              direction={"column"}
              gap={"20px"}
              borderRadius={"10px"}
            >
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={600}
                color={"#1F5AA3"}
              >
                Back
              </Text>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Loan Summary
                </Text>
                <Flex direction={"column"} gap={"20px"}>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Verified net income
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      894,000.00
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Monthly loan repayment
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      89,400.00
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Debt to income ratio
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      10%
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Credit score
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      702
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Maximum eligible amount
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      5,000,000.00
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Monthly repayment
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      500,000.00
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Monthly repayment to income
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      10%
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Risk level
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      Medium
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#0A1629"}
                      textTransform={"capitalize"}
                    >
                      Requested amount
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={700}
                      color={"#0A1629"}
                    >
                      5,000,000.00
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Decision outcome
                </Text>
                <Flex direction={"column"} gap={"20px"}>
                  <Flex direction={"column"} gap={"20px"}>
                    <Flex justifyContent={"space-between"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={400}
                        color={"#0A1629"}
                        textTransform={"capitalize"}
                      >
                        Approve requested amount
                      </Text>
                      <RadioGroup
                        onChange={handleRadioChange2}
                        value={radioValue2}
                      >
                        <Stack direction="row">
                          <Radio value="1">Yes</Radio>
                          <Radio value="2">No</Radio>
                        </Stack>
                      </RadioGroup>
                    </Flex>

                    {radioValue2 === "2" && (
                      <Flex justifyContent={"space-between"}>
                        <Text
                          fontFamily={"Nunito Sans"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#0A1629"}
                          textTransform={"capitalize"}
                        >
                          Enter approved amount
                        </Text>
                        <Input width={"100px"} />
                      </Flex>
                    )}
                  </Flex>
                  <Flex direction={"column"} gap={"20px"}>
                    <Flex justifyContent={"space-between"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={400}
                        color={"#0A1629"}
                        textTransform={"capitalize"}
                      >
                        Use default interest rate (3.5%)
                      </Text>
                      <RadioGroup
                        onChange={handleRadioChange}
                        value={radioValue}
                      >
                        <Stack direction="row">
                          <Radio value="1">Yes</Radio>
                          <Radio value="2">No</Radio>
                        </Stack>
                      </RadioGroup>
                    </Flex>

                    {radioValue === "2" && (
                      <Flex justifyContent={"space-between"}>
                        <Text
                          fontFamily={"Nunito Sans"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#0A1629"}
                          textTransform={"capitalize"}
                        >
                          Enter interest rate
                        </Text>
                        <Input width={"100px"} />
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </Flex>
              <Flex>
                <Select
                  width={"200px"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#7D8592"}
                >
                  <option value="" disabled selected hidden>
                    Select Loan Tenor
                  </option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </Select>
              </Flex>
              <Flex mt={"20px"} gap={"20px"}>
                <Button
                  bg={"#067B58"}
                  variant={"none"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#FFFFFF"}
                >
                  Approve
                </Button>
                <Button
                  bg={"#D60F0F"}
                  variant={"none"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#FFFFFF"}
                >
                  Decline
                </Button>
              </Flex>
            </Flex>
            <Flex
              width={"300px"}
              height={"100%"}
              bg={"#FFFFFF"}
              p={"20px"}
              direction={"column"}
              gap={"20px"}
              borderRadius={"10px"}
            >
              <Flex justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Comments
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={700}
                  color={"#1F5AA3"}
                >
                  + Add New
                </Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default Decide
