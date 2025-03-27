import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Spinner, Text } from "@chakra-ui/react"
import Logo from '../../assets/images/white.png'
import Sign from "../../assets/images/signup.png";
import dsh from "../../assets/images/dashboard.png";
import meet from "../../assets/images/meetin.png";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useLogin } from "../../api/login.query";
import { Carousel } from "antd";

const SignIn = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      setIsFormValid(
        newData.email.trim() !== "" && newData.password.trim() !== ""
      );
      return newData;
    });
  };

  const { mutate: login } = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    login(formData, {
      onSuccess: (data) => {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        setLoading(false);
        window.location.href = "/sign-up";
      },
      onError: (error) => {
        console.error("Login didn’t work:", error);
        setErrorMessage("Wrong email or password. Try again!");
        setLoading(false);
        setFormData({ email: "", password: "" });
        setIsFormValid(false);
      },
    });
  };
  return (
    <>
      <Flex width={"100%"} height={"100vh"} flexDirection={"row"}>
        <Flex
          display={{ lg: "flex", base: "none" }}
          width={{ lg: "100%", base: "none" }}
          height={"100%"}
          bgColor={"#1F5AA3"}
          flexDirection={"column"}
          p={"50px"}
          gap={"20px"}
        >
          <Flex gap={"10px"}>
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
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex justifyContent={"center"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"20px"}
                color={"#FFFFFF"}
                textTransform={"capitalize"}
              >
                Sign in to Jupita Admin
              </Text>
            </Flex>
            <Carousel
              autoplay={{ dotDuration: true }}
              autoplaySpeed={5000}
              style={{
                width: "500px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                width="90%"
                height="100%"
                bg="#FFF"
                borderRadius="10px"
                p="5px"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={Sign}
                  alt="Logo"
                  width="90%"
                  height="100%"
                  objectFit="contain"
                />
              </Box>
              <div>
                <Box
                  width="100%"
                  height="100%"
                  bg="#FFF"
                  borderRadius="10px"
                  p="5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src={dsh}
                    alt="Logo"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                </Box>
              </div>
              <div>
                <Box
                  width="97%"
                  height="100%"
                  bg="#FFF"
                  borderRadius="10px"
                  p="5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src={meet}
                    alt="Logo"
                    width="97%"
                    height="100%"
                    objectFit="contain"
                  />
                </Box>
              </div>
            </Carousel>
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
                  Sign In
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
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your_email@gmail.com"
                    fontFamily="Nunito Sans"
                    fontSize="16px"
                  />
                </Flex>
                <Flex flexDirection={"column"} gap={2}>
                  <FormControl>
                    <FormLabel
                      fontFamily={"Nunito Sans"}
                      fontWeight={600}
                      fontSize={"16px"}
                      color={"#7D8592"}
                    >
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        type={show ? "password" : "text"}
                        placeholder="••••••••"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        fontFamily="Nunito Sans"
                        fontSize="16px"
                        color={"#7D8592"}
                      />
                      <InputRightElement width="3rem">
                        <Button variant={"none"} onClick={handleClick}>
                          {show ? (
                            <LuEyeClosed fontSize={"20px"} />
                          ) : (
                            <LuEye fontSize={"20px"} />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
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
                  type={"submit"}
                  width={"170px"}
                  height={"48px"}
                  bgColor={"#1F5AA3"}
                  fontFamily={"Nunito Sans"}
                  color={"#FFFFFF"}
                  fontSize={"16px"}
                  fontWeight={700}
                  variant={"none"}
                  boxShadow={"lg"}
                  borderRadius={"12px"}
                  disabled={!isFormValid || loading}
                  isLoading={loading}
                  onClick={handleLogin}
                >
                  {loading ? <Spinner size="md" /> : "Sign In"}
                  <Flex pl={"10px"}>
                    <FaArrowRight color={"#FFFFFF"} />
                  </Flex>
                </Button>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  {errorMessage && (
                    <Text fontSize={"14px"} color="red">
                      {errorMessage}
                    </Text>
                  )}
                </Flex>
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
