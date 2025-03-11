import { Flex, Text } from "@chakra-ui/react"

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
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
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
          <Flex></Flex>
        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={'20px'}
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
}

export default Behavioral
