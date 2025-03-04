import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

const SummaryTable = () => {
    const transactionSummary = [
      {
        transType: "Credit",
        average: "10,882,931.76",
        totalSum: "10,882,931.76",
        lowestAmount: "10,882,931.76",
        highestAmount: "10,882,931.76",
      },
      {
        transType: "Debit",
        average: "10,882,931.76",
        totalSum: "10,882,931.76",
        lowestAmount: "10,882,931.76",
        highestAmount: "10,882,931.76",
      },
      {
        transType: "Balance",
        average: "10,882,931.76",
        totalSum: "10,882,931.76",
        lowestAmount: "10,882,931.76",
        highestAmount: "10,882,931.76",
      },
    ];
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"18px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            Transaction Summary
          </Text>
        </Flex>
        <Flex>
          <Table>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Transac. Type
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Average
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Total Sum
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Lowest Amount
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Highest Amount
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactionSummary.map((item, index) => (
                <Tr key={index} bg={"#FFFFFF"}>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.transType}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.average}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.totalSum}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.lowestAmount}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.highestAmount}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
}

export default SummaryTable