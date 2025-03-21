import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import BehavioralChart from "./BehavioralChart";

const Behavioral = () => {
  const behavioralCard = [
    {
      amount: "YES",
      title: "Sweeps Account",
      bgColor: "#F4FDFD",
    },
    {
      amount: "10,882,931.76",
      title: "Transfer to self (Credit)",
      bgColor: "#FFF1EE",
    },
    {
      amount: "2,356,667.67",
      title: "Transfer to self (Debit)",
      bgColor: "#F4FDFD",
    },
  ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        bgColor={"#FFFFFF"}
        p={"20px"}
        borderRadius={"12px"}
        direction={"column"}
        gap={"20px"}
        my={"20px"}
      >
        <Text
          fontFamily={"Nunito Sans"}
          fontSize={"16px"}
          fontWeight={700}
          color={"#0A1629"}
        >
          Roundtripping Analysis
        </Text>
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={3}>
            <Flex
              width={"100%"}
              height={"100%"}
              bgColor={"#FFFFFF"}
              borderRadius={"10px"}
              px={"15px"}
              gap={"20px"}
            >
              {behavioralCard.map((item, index) => (
                <Flex
                  key={index}
                  width={"100%"}
                  height={"100px"}
                  bg={item.bgColor}
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                  borderRadius={"14px"}
                >
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"#0A1629"}
                  >
                    {item.amount}
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={400}
                    color={"#0A1629"}
                  >
                    {item.title}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex width={"100%"} height={"100%"}>
              <BehavioralChart />
              <Flex
                alignItems={"start"}
                direction={"column"}
                gap={"20px"}
              >
                <Flex justifyContent={"start"} alignItems="center" gap="10px">
                  <Box width="10px" height="10px" bg="#3F8CFF" />
                  <Text
                    fontFamily="Nunito Sans"
                    fontSize="13px"
                    fontWeight={400}
                  >
                    Payments
                  </Text>
                </Flex>
                <Flex justifyContent={"start"} alignItems="center" gap="10px">
                  <Box width="10px" height="10px" bg="#067B58" />
                  <Text
                    fontFamily="Nunito Sans"
                    fontSize="13px"
                    fontWeight={400}
                  >
                    Crypto
                  </Text>
                </Flex>
                <Flex justifyContent={"start"} alignItems="center" gap="10px">
                  <Box width="10px" height="10px" bg="#C44606" />
                  <Text
                    fontFamily="Nunito Sans"
                    fontSize="13px"
                    fontWeight={400}
                  >
                    Gambling
                  </Text>
                </Flex>
                <Flex justifyContent={"start"} alignItems="center" gap="10px">
                  <Box width="10px" height="10px" bg="#6BF0C8" />
                  <Text
                    fontFamily="Nunito Sans"
                    fontSize="13px"
                    fontWeight={400}
                  >
                    Loans
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={"20px"}
        >
          <Flex
            width={"450px"}
            height={"140px"}
            p={"20px"}
            bg={"#F4F6F9"}
            borderRadius={"12px"}
            direction={"column"}
            gap={"10px"}
          >
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Number of Returned Cheque
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
              >
                0
              </Text>
            </Flex>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Number of Betting Transactions
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
              >
                0
              </Text>
            </Flex>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Length of Negative Balance (Days)
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
              >
                23
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={"520px"}
            height={"140px"}
            p={"20px"}
            bg={"#F4F6F9"}
            borderRadius={"12px"}
            direction={"column"}
            gap={"10px"}
          >
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Most Recent Loan Repayment
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
              >
                104,785,898.77
              </Text>
            </Flex>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Most Recent Loan Repayment Date
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
              >
                404,785,898.77
              </Text>
            </Flex>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Average Monthly Loan Repayment
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
              >
                404,785,898.77
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Behavioral;
