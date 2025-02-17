import { Box, Button, Checkbox, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import Logo from '../../assets/images/white.png'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <>
      <Flex width={"100%"} height={"100vh"} flexDirection={"row"}>
        <Flex
          display={{ lg: "flex", base: "none" }}
          width={{ lg: "100%", base: "none" }}
          height={"100%"}
          bgColor={"#1F5AA3"}
          flexDirection={"column"}
        >
          <Flex gap={"10px"} p={"50px"}>
            <Box width={"40px"} height={"40px"}>
              <Image
                src={Logo}
                alt="Logo"
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              fontSize={"30px"}
              color={"#FFFFFF"}
            >
              Jupita
            </Text>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          p={{ lg: "100px", md: "100px", base: "20px" }}
        >
          <Flex
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={{ lg: "100px", md: "100px", base: "20px" }}
          >
            <Box
              width={"100%"}
              maxWidth={{ lg: "650px", md: "650px", base: "800px" }}
              mx={"auto"}
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Heading
                  as={"h1"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"22px"}
                  fontWeight={700}
                  color={"#0A1629"}
                  textTransform={"capitalize"}
                >
                  Sign In to Jupita Admin
                </Heading>
              </Flex>
              <Flex flexDirection={"column"} pt={"25px"} gap={"10px"}>
                <Flex flexDirection={"column"} gap={2}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#7D8592"}
                  >
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    required
                    width={"403px"}
                    placeholder="your_email@gmail.com"
                    fontFamily="Nunito Sans"
                    fontSize="16px"
                  />
                </Flex>
                <Flex flexDirection={"column"} gap={2}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#7D8592"}
                  >
                    Password
                  </Text>
                  <Input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    fontFamily="Nunito Sans"
                    fontSize="16px"
                  />
                </Flex>
              </Flex>

              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={"20px"}
              >
                <Flex gap={"10px"}>
                  <Checkbox />
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"16px"}
                      color={"#7D8592"}
                    >
                      Remember me
                    </Text>
                  </Flex>
                </Flex>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"16px"}
                    color={"#7D8592"}
                  >
                    Forgot Password?
                  </Text>
                </Flex>
              </Flex>

              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={"30px"}
              >
                <Button
                  width={"170px"}
                  height={"48px"}
                  bgColor={"#1F5AA3"}
                  fontFamily={"Nunito Sans"}
                  color={"#FFFFFF"}
                  fontSize={"16px"}
                  fontWeight={700}
                  variant={"none"}
                  boxShadow={"lg"}
                  onClick={() => navigate("/sign-up")}
                >
                  Sign In{" "}
                  <Flex pl={"10px"}>
                    <FaArrowRight color={"#FFFFFF"} />
                  </Flex>
                </Button>
                <Flex>
                  <Text
                    textAlign={"center"}
                    mt={"10px"}
                    fontFamily={"Nunito Sans"}
                    color={"#2261B0"}
                    fontSize={"14px"}
                    fontWeight={700}
                    cursor={"pointer"}
                  >
                    Forgot Password?
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SignIn
