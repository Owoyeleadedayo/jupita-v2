/* eslint-disable react-refresh/only-export-components */
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CiExport, CiSearch } from "react-icons/ci";
import { BsFunnel } from "react-icons/bs";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const applicationsTable = [
  {
    applicantsName: "Adeyemi Williams Olalekan",
    loanProduct: "Salary Loan",
    reqAmount: "200,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Williams Adeyemi",
    date: "25/09/2025",
  },
  {
    applicantsName: "Adeyemi Williams Olalekan",
    loanProduct: "Salary Loan",
    reqAmount: "200,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Williams Adeyemi",
    date: "25/09/2025",
  },
  {
    applicantsName: "Adeyemi Williams Olalekan",
    loanProduct: "Salary Loan",
    reqAmount: "200,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Williams Adeyemi",
    date: "25/09/2025",
  },
  {
    applicantsName: "Bolaji Samuel",
    loanProduct: "Business Loan",
    reqAmount: "500,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Chioma Okeke",
    date: "10/08/2025",
  },
  {
    applicantsName: "Ngozi Chukwu",
    loanProduct: "Mortgage Loan",
    reqAmount: "3,500,000.00",
    status: "Pending",
    statusColor: "#F7A400",
    reviewer: "John Doe",
    date: "18/07/2025",
  },
  {
    applicantsName: "Samuel Adekunle",
    loanProduct: "Auto Loan",
    reqAmount: "1,200,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Jane Smith",
    date: "02/06/2025",
  },
  {
    applicantsName: "Zainab Bello",
    loanProduct: "Education Loan",
    reqAmount: "750,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Olawale Johnson",
    date: "30/05/2025",
  },
  {
    applicantsName: "David Johnson",
    loanProduct: "Personal Loan",
    reqAmount: "150,000.00",
    status: "Pending",
    statusColor: "#F7A400",
    reviewer: "Samuel Martins",
    date: "14/05/2025",
  },
  {
    applicantsName: "Kelechi Uche",
    loanProduct: "Business Loan",
    reqAmount: "800,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Adekunle Femi",
    date: "05/04/2025",
  },
  {
    applicantsName: "Fatima Musa",
    loanProduct: "Salary Loan",
    reqAmount: "300,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Angela Peters",
    date: "28/03/2025",
  },
  {
    applicantsName: "Opeyemi Adebayo",
    loanProduct: "Education Loan",
    reqAmount: "900,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Chinedu Obi",
    date: "15/03/2025",
  },
  {
    applicantsName: "Grace Otabor",
    loanProduct: "Personal Loan",
    reqAmount: "250,000.00",
    status: "Pending",
    statusColor: "#F7A400",
    reviewer: "Victor Akinlade",
    date: "02/03/2025",
  },
  {
    applicantsName: "Chigozie Emmanuel",
    loanProduct: "Auto Loan",
    reqAmount: "1,500,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Linda Okon",
    date: "20/02/2025",
  },
  {
    applicantsName: "Maryam Sule",
    loanProduct: "Mortgage Loan",
    reqAmount: "4,000,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Tunde Bamidele",
    date: "11/02/2025",
  },
  {
    applicantsName: "Jonathan Eze",
    loanProduct: "Business Loan",
    reqAmount: "1,800,000.00",
    status: "Pending",
    statusColor: "#F7A400",
    reviewer: "Aisha Bello",
    date: "25/01/2025",
  },
  {
    applicantsName: "Sarah Ayodeji",
    loanProduct: "Salary Loan",
    reqAmount: "400,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "John Smith",
    date: "18/01/2025",
  },
  {
    applicantsName: "Kelvin Chukwuma",
    loanProduct: "Education Loan",
    reqAmount: "600,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Daniel Ogunleye",
    date: "10/01/2025",
  },
  {
    applicantsName: "Patience Osas",
    loanProduct: "Personal Loan",
    reqAmount: "350,000.00",
    status: "Pending",
    statusColor: "#F7A400",
    reviewer: "Evelyn Nwosu",
    date: "05/01/2025",
  },
  {
    applicantsName: "Solomon Adeyemi",
    loanProduct: "Auto Loan",
    reqAmount: "1,700,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Ahmed Yusuf",
    date: "27/12/2024",
  },
  {
    applicantsName: "Tosin Ogunbiyi",
    loanProduct: "Mortgage Loan",
    reqAmount: "2,500,000.00",
    status: "Declined",
    statusColor: "#FD0D11",
    reviewer: "Kemi Alabi",
    date: "20/12/2024",
  },
  {
    applicantsName: "Uche Nnamdi",
    loanProduct: "Business Loan",
    reqAmount: "950,000.00",
    status: "Pending",
    statusColor: "#F7A400",
    reviewer: "Fisayo Bakare",
    date: "10/12/2024",
  },
  {
    applicantsName: "Amina Abdullahi",
    loanProduct: "Salary Loan",
    reqAmount: "275,000.00",
    status: "Approved",
    statusColor: "#067B58",
    reviewer: "Olaoluwa Akanbi",
    date: "02/12/2024",
  },
];


const Applications = () => {
  const tableHead = [
    { name: "Applicant’s Name" },
    { name: "Loan Product" },
    { name: "Requested Amount" },
    { name: "Status" },
    { name: "Reviewer" },
    { name: "Application Date" },
  ];

   const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [searchQuery, setSearchQuery] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleRowClick = async (applicantsName: string) => {
     setLoading(true);
     await navigate(`/applications/${String(applicantsName)}`);
     setLoading(false);
   };

   // Filtered Data
   const filteredApplications = applicationsTable.filter((item) =>
     item.applicantsName.toLowerCase().includes(searchQuery.toLowerCase())
   );

   // Pagination
   const totalPages = Math.ceil(filteredApplications.length / rowsPerPage);
   const indexOfLastItem = currentPage * rowsPerPage;
   const indexOfFirstItem = indexOfLastItem - rowsPerPage;
   const currentItems = filteredApplications.slice(
     indexOfFirstItem,
     indexOfLastItem
   );

   const handleNextPage = () => {
     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
   };

   const handlePrevPage = () => {
     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
   };

   const handleRowsPerPageChange = (rows: number) => {
     setRowsPerPage(rows);
     setCurrentPage(1);
   };

  
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        {loading && (
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(255, 255, 255, 0.8)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex="9999"
          >
            <Spinner size="xl" color="red.500" />
          </Box>
        )}
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Flex gap={{ md: "10px", base: "4px" }} flexDirection={"row-reverse"}>
            <InputGroup
              bg="#FFFFFF"
              width={"281px"}
              height={"40px"}
              variant={"none"}
              borderRadius={"10px"}
            >
              <InputLeftElement pointerEvents="none">
                <CiSearch color="#0A1629" fontSize={"18px"} />
              </InputLeftElement>
              <Input
                placeholder="Search here..."
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                color={"#000"}
                fontWeight={400}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
            <Button
              width={"40px"}
              height={"40px"}
              bgColor="#FFFFFF"
              p={0}
              color={"#737791"}
              borderRadius={"10px"}
              variant={"none"}
            >
              <BsFunnel color="#000000" fontSize={"18px"} />
            </Button>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Button
              px={{ md: "12px", base: "3px" }}
              py={{ md: "5px", base: "1px" }}
              variant={"none"}
              bgColor={"#1F5AA3"}
              color={"white"}
              fontFamily={"Nunito Sans"}
              fontSize={{ md: "16px", base: "14px" }}
            >
              <Flex pr={"5px"}>
                <CiExport color="#FFFFFF" fontSize={"20px"} />
              </Flex>
              Export
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Table>
            <Thead>
              <Tr>
                {tableHead.map((item, index) => (
                  <Th
                    key={index}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#0A1629"}
                  >
                    {item.name}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map((item, index) => (
                <Tr
                  key={index}
                  bg={index % 2 === 0 ? "#FFFFFF" : "#C4CBD61A"}
                  onClick={() => handleRowClick(item.applicantsName)}
                  cursor={"pointer"}
                >
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {item.applicantsName}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {item.loanProduct}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {item.reqAmount}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={item.statusColor}
                  >
                    {item.status}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {item.reviewer}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {item.date}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text
            fontSize={"13px"}
            fontFamily={"Nunito Sans"}
            color={"#687182"}
            fontWeight={700}
          >
            {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredApplications.length)} of{" "}
            {filteredApplications.length}
          </Text>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text
                fontSize={"13px"}
                fontFamily={"Nunito Sans"}
                color={"#687182"}
                fontWeight={700}
              >
                Rows per page:
              </Text>
              <Select
                value={rowsPerPage}
                onChange={(e) =>
                  handleRowsPerPageChange(Number(e.target.value))
                }
                width={"65px"}
                height={"25px"}
                variant={"none"}
                border={"none"}
                bg={"#f4f9fd"}
                fontSize={"13px"}
                fontFamily={"Nunito Sans"}
                color={"#687182"}
                fontWeight={700}
              >
                {[5, 10, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Button
                width="24px"
                height="20px"
                mx="5px"
                onClick={handlePrevPage}
                isDisabled={currentPage === 1}
              >
                <FaChevronLeft color="#687182" />
              </Button>
              <Text
                fontSize={"13px"}
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                color="#687182"
              >
                {currentPage}/{totalPages}
              </Text>
              <Button
                width="24px"
                height="20px"
                mx="5px"
                onClick={handleNextPage}
                isDisabled={currentPage === totalPages}
              >
                <FaChevronRight color="#687182" />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Applications;
