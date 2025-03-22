import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFunnel } from "react-icons/bs";
import { CiExport, CiSearch } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const clientsTable = [
  {
    userId: "12345678",
    clientName: "Adeyemi Williams Olalekan",
    phoneNo: "+2349065512525",
    status: "Active",
    accOfficer: "Williams Adeyemi",
    dateCreated: "25/09/2025",
  },
  {
    userId: "12345679",
    clientName: "Oluwaseun Michael",
    phoneNo: "+2348034567890",
    status: "Inactive",
    accOfficer: "John Doe",
    dateCreated: "10/08/2024",
  },
  {
    userId: "12345680",
    clientName: "Fatima Yusuf",
    phoneNo: "+2348076543210",
    status: "Active",
    accOfficer: "Aisha Bello",
    dateCreated: "15/07/2023",
  },
  {
    userId: "12345681",
    clientName: "Chinedu Okonkwo",
    phoneNo: "+2348123456789",
    status: "Suspended",
    accOfficer: "Emeka Obi",
    dateCreated: "05/06/2022",
  },
  {
    userId: "12345682",
    clientName: "Blessing Uche",
    phoneNo: "+2349023456789",
    status: "Active",
    accOfficer: "Esther Johnson",
    dateCreated: "12/11/2021",
  },
  {
    userId: "12345683",
    clientName: "Tunde Adekunle",
    phoneNo: "+2349012345678",
    status: "Inactive",
    accOfficer: "David Olamide",
    dateCreated: "20/03/2020",
  },
  {
    userId: "12345684",
    clientName: "Amaka Chukwu",
    phoneNo: "+2348098765432",
    status: "Active",
    accOfficer: "Grace Eze",
    dateCreated: "01/05/2019",
  },
  {
    userId: "12345685",
    clientName: "Ibrahim Musa",
    phoneNo: "+2348156789012",
    status: "Active",
    accOfficer: "Musa Abdullahi",
    dateCreated: "07/09/2018",
  },
  {
    userId: "12345686",
    clientName: "Florence Adebayo",
    phoneNo: "+2348134567890",
    status: "Inactive",
    accOfficer: "Daniel Ogundele",
    dateCreated: "22/01/2017",
  },
  {
    userId: "12345687",
    clientName: "Opeyemi Ajayi",
    phoneNo: "+2348056789012",
    status: "Suspended",
    accOfficer: "Samuel Adeoye",
    dateCreated: "14/02/2016",
  },
  {
    userId: "12345688",
    clientName: "Grace Ekwueme",
    phoneNo: "+2348102345678",
    status: "Active",
    accOfficer: "Joy Okonkwo",
    dateCreated: "03/08/2015",
  },
  {
    userId: "12345689",
    clientName: "Samuel Obinna",
    phoneNo: "+2348065432109",
    status: "Inactive",
    accOfficer: "Chris Nwankwo",
    dateCreated: "17/04/2014",
  },
  {
    userId: "12345690",
    clientName: "Kemi Adesina",
    phoneNo: "+2349098765432",
    status: "Active",
    accOfficer: "Yetunde Bamidele",
    dateCreated: "09/12/2013",
  },
  {
    userId: "12345691",
    clientName: "David Emmanuel",
    phoneNo: "+2348076543210",
    status: "Inactive",
    accOfficer: "Paul Onyekachi",
    dateCreated: "29/06/2012",
  },
  {
    userId: "12345692",
    clientName: "Patience Igwe",
    phoneNo: "+2348123456789",
    status: "Suspended",
    accOfficer: "Cynthia Okafor",
    dateCreated: "05/11/2011",
  },
  {
    userId: "12345693",
    clientName: "John Chukwu",
    phoneNo: "+2349012345678",
    status: "Active",
    accOfficer: "Benedict Eze",
    dateCreated: "18/07/2010",
  },
  {
    userId: "12345694",
    clientName: "Amina Bello",
    phoneNo: "+2348156789012",
    status: "Inactive",
    accOfficer: "Hassan Abubakar",
    dateCreated: "22/03/2009",
  },
  {
    userId: "12345695",
    clientName: "Olumide Fasanya",
    phoneNo: "+2348134567890",
    status: "Active",
    accOfficer: "Kolawole Ajibade",
    dateCreated: "30/10/2008",
  },
  {
    userId: "12345696",
    clientName: "Esther Adeola",
    phoneNo: "+2348056789012",
    status: "Active",
    accOfficer: "Tosin Ogunbiyi",
    dateCreated: "07/02/2007",
  },
  {
    userId: "12345697",
    clientName: "Michael Nwosu",
    phoneNo: "+2348102345678",
    status: "Inactive",
    accOfficer: "Henry Uzochukwu",
    dateCreated: "25/09/2006",
  },
];

const Clients = () => {
  const tableHead = [
    { name: "User Id" },
    { name: "Client Name" },
    { name: "Phone Number" },
    { name: "Status" },
    { name: "Account Officer" },
    { name: "Date Created" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleRowClick = async (applicantsName: string) => {
    await navigate(`/clients/${String(applicantsName)}`);
  };

  const filteredClientsTable = clientsTable.filter((item) =>
    item.clientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredClientsTable.length / rowsPerPage);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentClientTable = filteredClientsTable.slice(
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
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Flex gap={{ md: "10px", base: "4px" }} flexDirection={"row-reverse"}>
            <InputGroup
              bg="#FFFFFF"
              width={"281px"}
              height={"40px"}
              variant={"none"}
              borderRadius={"10px"}
              boxShadow={"md"}
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
              boxShadow={"md"}
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
        <Flex boxShadow={"lg"}>
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
              {currentClientTable.map((items, index) => (
                <Tr
                  key={index}
                  bg={index % 2 === 0 ? "#FFFFFF" : "#C4CBD61A"}
                  cursor={"pointer"}
                  onClick={() => handleRowClick(items.userId)}
                >
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {items.userId}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {items.clientName}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {items.phoneNo}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"12px"}
                    color={"#067B58"}
                  >
                    {items.status}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {items.accOfficer}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"12px"}
                    color={"#000000"}
                  >
                    {items.dateCreated}
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
            {Math.min(indexOfLastItem, filteredClientsTable.length)} of{" "}
            {filteredClientsTable.length}
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

export default Clients;
