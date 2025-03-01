import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

interface DetailsPage {
    openDetails: boolean;
    closeDetails: () => void;
}

const LoanDetailsModal = ({openDetails, closeDetails}: DetailsPage) => {
    const detailsTable = [
      {
        principal: "660,000.00",
        interest: "30,000.00",
        totalRepayment: "690,000.00",
        amountRepaid: "690,000.00",
        amountOutstanding: "0.00",
        repaymentDate: "21-Jul- 2024 23:05",
        dueDate: "21-Jul- 2024",
      },
      {
        principal: "660,000.00",
        interest: "30,000.00",
        totalRepayment: "690,000.00",
        amountRepaid: "0.00",
        amountOutstanding: "690,000.00",
        repaymentDate: "---",
        dueDate: "21-Jul- 2024",
      },
      {
        principal: "660,000.00",
        interest: "30,000.00",
        totalRepayment: "690,000.00",
        amountRepaid: "0.00",
        amountOutstanding: "690,000.00",
        repaymentDate: "---",
        dueDate: "21-Jul- 2024",
      },
    ];
  return (
    <>
      <Modal onClose={closeDetails} size={"full"} isOpen={openDetails} >
        <ModalOverlay />
        <ModalContent m={"50px"} pt={"80px"} borderRadius={'10px'}>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDir={"column"} gap={"10px"}>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"24px"}
                fontWeight={700}
                color={"#1F5AA3"}
                textTransform={"capitalize"}
              >
                {" "}
                Loan schedule
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={400}
              >
                Application id: 5630836GYDGDJ
              </Text>
            </Flex>
            <Flex alignItems={"center"} my={"15px"} gap={"10px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={400}
              >
                Loan status:
              </Text>
              <Button
                variant={"none"}
                bgColor={"#BFFDEA"}
                width={"55px"}
                height={"24px"}
                borderRadius={"20px"}
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={400}
                color={"#067B58"}
              >
                Active
              </Button>
            </Flex>
            <Flex>
              <Table>
                <Thead>
                  <Tr bg={"#D9D9D933"}>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Principal
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Interest
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Total repayment
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Amount repaid
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Amount outstanding
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Repayment date
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      Due date
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {detailsTable.map((item, index) => (
                    <Tr key={index}>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.principal}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.interest}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.totalRepayment}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.amountRepaid}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.amountOutstanding}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.repaymentDate}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#444A6D"}
                      >
                        {item.dueDate}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoanDetailsModal
