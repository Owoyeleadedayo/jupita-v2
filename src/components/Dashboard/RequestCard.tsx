import { Flex, Text } from "@chakra-ui/react"

const RequestCard = () => {
  const card = [
    {
      requests: "Total requests",
      value: "Value",
      valuePrice: "₦112,850,879.00",
      volume: "Volume",
      number: "894",
      bg: "#EAF2FF",
    },
    {
      requests: "Approved requests",
      value: "Value",
      valuePrice: "₦80,000,000.00",
      volume: "Volume",
      number: "500",
      bg: "#F6FBF5",
    },
    {
      requests: "Declined requests",
      value: "Value",
      valuePrice: "₦20,000,000.00",
      volume: "Volume",
      number: "200",
      bg: "#F9EAF1",
    },
    {
      requests: "Pending requests",
      value: "Value",
      valuePrice: "₦12,850,879.00",
      volume: "Volume",
      number: "194",
      bg: "#FCF3EA",
    },
  ];
  return (
    <>
      <Flex width={"100%"} height={"100%"} gap={"20px"}>
        {card.map((item, index) => (
          <Flex
            key={index}
            width={"100%"}
            height={"136px"}
            p={"20px"}
            justifyContent={"space-between"}
            direction={"column"}
            bg={item.bg}
            borderRadius={"24px"}
          >
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={800}
              fontSize={"14px"}
              color={"#000"}
            >
              {item.requests}
            </Text>
            <Flex justifyContent={"space-between"} direction={"row"}>
              <Flex direction={"column"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"10px"}
                  color={"#000"}
                >
                  {item.volume}
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"14px"}
                  color={"#000"}
                >
                  {item.valuePrice}
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"10px"}
                  color={"#000"}
                >
                  {item.value}
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"14px"}
                  color={"#000"}
                >
                  {item.number}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default RequestCard
