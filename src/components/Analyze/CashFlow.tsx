import { Box, Flex, Select, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

const CashFlow = () => {
    const summaryTable = [
      {
        month: "Jan 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Feb 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Mar 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Apr 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "May 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Jun 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Jul 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Aug 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Sep 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Oct 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Nov 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
      {
        month: "Dec 2023",
        avgCredit: "10,882,931.76",
        avgDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        availableBal: "10,882,931.76",
      },
    ];

  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        gap={"20px"}
        my={"20px"}
        direction={"column"}
      >
        <Flex alignItems={"center"} gap={"10px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"16px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            Transaction Summary
          </Text>
          <Select
            width={"100px"}
            height={"30px"}
            bg={"#C418E61C"}
            borderRadius={"8px"}
            fontFamily={"Nunito Sans"}
            fontSize={"12px"}
            fontWeight={700}
            color={"#C418E6"}
            boxShadow={"md"}
          >
            <option value="monthly">Monthly</option>
          </Select>
        </Flex>
        <Box
          bg={"#FFFFFF"}
          px={"20px"}
          py={"10px"}
          borderRadius={"10px"}
          maxHeight="550px"
          width={"100%"}
          overflowY="auto"
          boxShadow={"md"}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Month
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Avg. Credit
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Avg. Debit
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Highest Credit
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Highest Debit
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Available Balance
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {summaryTable.map((item, index) => (
                <Tr key={index}>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.month}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.avgCredit}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.avgDebit}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.highestCredit}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.highestDebit}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.availableBal}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
}

export default CashFlow
