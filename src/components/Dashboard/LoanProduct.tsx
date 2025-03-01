import { Button, Flex, Progress, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

const LoanProduct = () => {
  return (
    <>
      <Flex width={"409px"} height={"100%"} bg={"#FFFFFF"} borderRadius={"8px"}>
        <Table my={{ md: "30px", base: "10px" }} variant="simple">
          <Thead>
            <Tr>
              <Th
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={700}
                color={"#000000"}
              >
                #
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={700}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                Loan Products
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontSize={"13px"}
                fontWeight={700}
                color={"#000000"}
                textTransform={"capitalize"}
                display={{ xl: "flex", lg: "none", md: "flex", base: "none" }}
              >
                Volume
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                01
              </Td>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                Salary Assurance
              </Td>
              <Td>
                <Progress
                  sx={{
                    "& > div": {
                      backgroundColor: "rgba(0, 149, 255, 1)",
                      borderRadius: "8px",
                    },
                  }}
                  size="xs"
                  value={40}
                  display={{ md: "flex", base: "none" }}
                />
              </Td>

              <Td>
                <Button
                  color={"rgba(0, 149, 255, 1)"}
                  border={"1px solid rgba(0, 149, 255, 1)"}
                  bgColor={"rgba(240, 249, 255, 1)"}
                  fontSize={"13px"}
                  width={"50px"}
                  height={"30px"}
                  borderRadius={"8px"}
                >
                  45%
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                02
              </Td>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                Rent Loan
              </Td>
              <Td>
                <Progress
                  sx={{
                    "& > div": {
                      backgroundColor: "rgba(0, 229, 143, 1)",
                    },
                  }}
                  size="xs"
                  value={29}
                  borderRadius={"8px"}
                />
              </Td>
              <Td>
                <Button
                  color={"rgba(0, 229, 143, 1)"}
                  border={"1px solid rgba(0, 229, 143, 1)"}
                  bgColor={"rgba(240, 253, 244, 1)"}
                  fontSize={"13px"}
                  width={"50px"}
                  height={"30px"}
                  borderRadius={"8px"}
                >
                  29%
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                03
              </Td>
              <Td
                fontSize={"14px"}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                Public Sector Loan
              </Td>
              <Td>
                <Progress
                  sx={{
                    "& > div": {
                      backgroundColor: "rgba(136, 77, 255, 1)",
                      borderRadius: "8px",
                    },
                  }}
                  size="xs"
                  value={18}
                />
              </Td>
              <Td>
                <Button
                  color={"rgba(136, 77, 255, 1)"}
                  border={"1px solid rgba(136, 77, 255, 1)"}
                  bgColor={"rgba(251, 241, 255, 1)"}
                  fontSize={"13px"}
                  width={"50px"}
                  height={"30px"}
                  borderRadius={"8px"}
                >
                  18%
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                04
              </Td>
              <Td
                fontSize={{ md: "14px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                color={"#444A6D"}
                fontWeight={400}
                textAlign={"center"}
              >
                BNPL
              </Td>
              <Td>
                <Progress
                  sx={{
                    "& > div": {
                      backgroundColor: "rgba(255, 143, 13, 1)",
                      borderRadius: "8px",
                    },
                  }}
                  size="xs"
                  value={25}
                />
              </Td>
              <Td>
                <Button
                  color={"rgba(255, 143, 13, 1)"}
                  border={"1px solid rgba(255, 143, 13, 1)"}
                  bgColor={"rgba(254, 246, 230, 1)"}
                  fontSize={"13px"}
                  width={"50px"}
                  height={"30px"}
                  borderRadius={"8px"}
                >
                  25%
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  );
}

export default LoanProduct
