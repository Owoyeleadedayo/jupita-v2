import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import DP from "../../../assets/images/detailsPic.png";
import DataModal from "../../Applications/DataModal";
import ProfileModal from "../../Applications/ProfileModal";
import { FiEdit } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const UserDetails = () => {
  const {
    isOpen: openData,
    onClose: closeData,
    onOpen: onOpenData,
  } = useDisclosure();
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
          height={"100%"}
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
          <Flex mt={"20px"} justifyContent={"center"} alignItems={"center"}>
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
        <Flex
          width={"400px"}
          height={"100%"}
          bgColor={"#FFFFFF"}
          pt={"20px"}
          pb={"110px"}
          px={"10px"}
          direction={"column"}
          gap={"30px"}
          borderRadius={"10px"}
        >
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"20px"}
                fontWeight={700}
                color={"#0A1629"}
              >
                Organization Information
              </Text>
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
          <Flex direction={"column"} gap={"20px"}>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Employment type
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                Self Employed
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Employer name
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                DLM Capital Group
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Employment sector
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                Financial Institution
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Role
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                Accountant
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Work email
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                wadeyemi@dlm.group
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Net income
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                895,000.00
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Date of employment
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                25-Sep-2023
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"3px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                fontWeight={400}
                color={"#91929E"}
                textTransform={"capitalize"}
              >
                Business address
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#0A1629"}
                textTransform={"capitalize"}
              >
                66-68 Alexander Rd, Ikoyi Lagos.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"350px"}
          height={"100%"}
          bgColor={"#FFFFFF"}
          direction={"column"}
          py={"20px"}
          gap={"20px"}
          borderRadius={"10px"}
        >
          <Flex px={"20px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontSize={"22px"}
              fontWeight={700}
              color={"#0A1629"}
            >
              Activities
            </Text>
          </Flex>
          <Flex direction={"column"} gap={"20px"}>
            <Flex px={"20px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={500}
                color={"#0A1629"}
              >
                Femi Afelogun changed employment status from{" "}
                <Text as={"span"} fontWeight={700}>
                  Self-Employed to Employed
                </Text>
              </Text>
            </Flex>
            <Flex
              bgColor={"#F4F9FD"}
              mx={"10px"}
              p={"10px"}
              borderRadius={"12px"}
            >
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={500}
                color={"#0A1629"}
              >
                Williams Adeyemi sent a message: <br /> Dear Janet, kindly repay
                your loan, to avoid legal actions against you...
              </Text>
            </Flex>
            <Flex px={"20px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={500}
                color={"#0A1629"}
              >
                Femi Afelogun changed employment status from{" "}
                <Text as={"span"} fontWeight={700}>
                  Self-Employed to Employed
                </Text>
              </Text>
            </Flex>
            <Flex
              bgColor={"#F4F9FD"}
              mx={"10px"}
              p={"10px"}
              borderRadius={"12px"}
            >
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={500}
                color={"#0A1629"}
              >
                Williams Adeyemi added a comment: Application was declined as
                client failed to meet the minimum acceptance criteria for DTI
                exceeding 33%
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button
              variant={"none"}
              fontFamily={"Nunito Sans"}
              fontSize={"16px"}
              fontWeight={600}
              color={"#3F8CFF"}
              gap={"5px"}
              textTransform={'capitalize'}
            >
              View more{" "}
                <IoIosArrowDown />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default UserDetails;
