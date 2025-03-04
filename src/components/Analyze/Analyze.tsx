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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFunnel } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Analyze = () => {
  const analyzeTable = [
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Failed",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Altered",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Failed",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Altered",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Successful",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Failed",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
    {
      fileName: "25/09/2025",
      fileType: "Bank Statement",
      status: "Altered",
      updatedBy: "Williams Adeyemi",
      dateCreated: "25/09/2025",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
     const navigate = useNavigate();

     const handleRowClick = async (fileType: string) => {
       await navigate(`/analyze/${String(fileType)}`);
     };

    const filteredAnalyzeTable = analyzeTable.filter((item) =>
      item.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
      // Pagination
      const totalPages = Math.ceil(filteredAnalyzeTable.length / rowsPerPage);
      const indexOfLastItem = currentPage * rowsPerPage;
      const indexOfFirstItem = indexOfLastItem - rowsPerPage;
      const currentAnalyzeTable = filteredAnalyzeTable.slice(
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
              Add New
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Table>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  File Name
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  File Type
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Status
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Uploaded By
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Date Created
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentAnalyzeTable.map((item, index) => (
                <Tr
                  key={index}
                  bg={index % 2 ? "#C4CBD61A" : "#FFFFFF"}
                  cursor={"pointer"}
                  onClick={() => handleRowClick(item.fileType)}
                >
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.fileName}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.fileType}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={700}
                    color={
                      item.status === "Successful"
                        ? "#067B58"
                        : item.status === "Failed"
                        ? "red"
                        : "purple"
                    }
                  >
                    {item.status}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.updatedBy}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                  >
                    {item.dateCreated}
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
            {Math.min(indexOfLastItem, filteredAnalyzeTable.length)} of{" "}
            {filteredAnalyzeTable.length}
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

export default Analyze;
