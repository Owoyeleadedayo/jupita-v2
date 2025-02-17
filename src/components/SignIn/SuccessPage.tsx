import { Box, Flex, Image, Text } from "@chakra-ui/react"
import FF from '../../assets/images/fvf.png'

const SuccessPage = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"20px"}
      >
        <Box width={"431px"} height={"349px"}>
          <Image
            src={FF}
            width={"100%"}
            height={"100%"}
            objectFit={"contain"}
          />
        </Box>
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"22px"}
          color={"#0A1629"}
        >
          You are successfully registered!
        </Text>
      </Flex>
    </>
  );
}

export default SuccessPage
