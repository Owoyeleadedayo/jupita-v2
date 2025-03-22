/* eslint-disable react-refresh/only-export-components */
import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import DP from "../../assets/images/detailsPic.png";
import { FiEdit } from "react-icons/fi";
import DataModal from "../Applications/DataModal";
import ProfileModal from "../Applications/ProfileModal";
import LoanDetailsModal from "./LoanDetailsModal";

export const loanTable = [
  {
    no: "1",
    loanAmount: "2,000,000.00",
    interest: "2,000,000.00",
    totalRepayment: "2,800,000.00",
    amountRepaid: "1,000,000",
    status: "Active",
    date: "Dec 21, 2024 11:05PM",
  },
  {
    no: "2",
    loanAmount: "2,000,000.00",
    interest: "2,000,000.00",
    totalRepayment: "2,800,000.00",
    amountRepaid: "1,000,000",
    status: "Closed",
    date: "Dec 21, 2024 11:05PM",
  },
  {
    no: "3",
    loanAmount: "2,000,000.00",
    interest: "2,000,000.00",
    totalRepayment: "2,800,000.00",
    amountRepaid: "1,000,000",
    status: "Closed",
    date: "Dec 21, 2024 11:05PM",
  },
  {
    no: "4",
    loanAmount: "2,000,000.00",
    interest: "2,000,000.00",
    totalRepayment: "2,800,000.00",
    amountRepaid: "1,000,000",
    status: "Closed",
    date: "Dec 21, 2024 11:05PM",
  },
  {
    no: "5",
    loanAmount: "2,000,000.00",
    interest: "2,000,000.00",
    totalRepayment: "2,800,000.00",
    amountRepaid: "1,000,000",
    status: "Closed",
    date: "Dec 21, 2024 11:05PM",
  },
];


const Loans = () => {
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

    const { isOpen: openDetails, onClose: closeDetails, onOpen: onOpenDetails} = useDisclosure()
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
          boxShadow={"md"}
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
          width={"100%"}
          justifyContent={"flex-start"}
          alignItems={"self-start"}
        >
          <Table borderRadius={'10px'} boxShadow={"md"}>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  s/n
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Loan amount
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Interest
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Total repayment
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Amount repaid
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Status
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Creation date
                </Th>
              </Tr>
            </Thead>
            <Tbody onClick={onOpenDetails} cursor={"pointer"}>
              {loanTable.map((item, index) => (
                <Tr key={index} bg={"#FFFFFF"}>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.no}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.loanAmount}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.interest}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.totalRepayment}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.amountRepaid}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={700}
                    color={item.status === "Closed" ? "#D60707" : "#067B58"}
                  >
                    {item.status}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.date}
                  </Td>
                </Tr>
              ))}
              <LoanDetailsModal
                openDetails={openDetails}
                closeDetails={closeDetails}
              />
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};

export default Loans;
