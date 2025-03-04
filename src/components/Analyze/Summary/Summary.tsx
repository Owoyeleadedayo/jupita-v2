import { Flex, Text } from "@chakra-ui/react"
import SummaryTable from "./SummaryTable";

const Summary = () => {
    const summaryCard = [
      {
        amount: "40,045.67",
        title: "Opening Balance",
        bgColor: "#F4FDFD",
      },
      {
        amount: "10,882,931.76",
        title: "Closing Balance",
        bgColor: "#FFF1EE",
      },
      {
        amount: "2,356,667.67",
        title: "Avg. Monthly Balance",
        bgColor: "#F4FDF9",
      },
      {
        amount: "1,553,820.98",
        title: "Avg. Daily Balance",
        bgColor: "#FDF4FB",
      },
      {
        amount: "1067",
        title: "Number of Transactions",
        bgColor: "#FDF9F4",
      },
    ];
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} my={"20px"} gap={'20px'}>
        <Flex
          width={"100%"}
          height={"100%"}
          bgColor={"#FFFFFF"}
          borderRadius={"10px"}
          px={"15px"}
          gap={'20px'}
        >
          {summaryCard.map((item, index) => (
            <Flex
              key={index}
              width={"190px"}
              height={"100px"}
              bg={item.bgColor}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              my={"20px"}
              borderRadius={"14px"}
            >
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"24px"}
                fontWeight={700}
                color={"#0A1629"}
              >
                {item.amount}
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={400}
                color={"#0A1629"}
              >
                {item.title}
              </Text>
            </Flex>
          ))}
        </Flex>
        <SummaryTable />
      </Flex>
    </>
  );
}

export default Summary
