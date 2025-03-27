import { Button, Flex, Input, Text } from "@chakra-ui/react"

const ApiSetting = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        my={"20px"}
        direction={"column"}
        gap={"50px"}
      >
        <Flex
          width={"100%"}
          height={"200px"}
          p={"20px"}
          direction={"column"}
          gap={"20px"}
          borderRadius={"10px"}
          bgColor={"#FFFFFF"}
          boxShadow={"md"}
        >
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"22px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            API Credentials
          </Text>
          <Flex justifyContent={"space-between"}>
            <Flex direction={"column"}>
              <Text>API Client ID</Text>
              <Input width={"464px"} />
            </Flex>
            <Flex direction={"column"}>
              <Text>API Client ID</Text>
              <Input width={"464px"} />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          height={"140px"}
          p={"20px"}
          direction={"column"}
          gap={"20px"}
          borderRadius={"10px"}
          bgColor={"#FFFFFF"}
          boxShadow={"md"}
        >
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"22px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            API Documentation
          </Text>
          <Flex alignItems={"center"} gap={"50px"}>
            <Text fontFamily={"Nunito Sans"} fontSize={"14px"} fontWeight={400}>
              Check out our quickstart guide, faq's and documentation.
            </Text>
            <Flex>
              <Button
                variant={"none"}
                bgColor={"#1F5AA3"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={700}
                color={"#FFFFFF"}
              >
                View API Documentation
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ApiSetting
