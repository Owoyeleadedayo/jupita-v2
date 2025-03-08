import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import DP from "../../assets/images/detailsPic.png";
import { FiEdit } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import DataModal from "./DataModal";
import ProfileModal from "./ProfileModal";

const Decide = () => {
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
          <Flex mt={'10px'}>
            <Button
              variant={"none"}
              bgColor={"#1F5AA3"}
              borderRadius={"12px"}
              boxShadow={"lg"}
              fontFamily={"Nunito Sans"}
              fontSize={"16px"}
              fontWeight={700}
              color={"#FFFFFF"}
            >
              Run decision
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Decide
