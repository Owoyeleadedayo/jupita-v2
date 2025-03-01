import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import A1 from "../../assets/images/api1.png";
import A2 from "../../assets/images/api2.png";
import A3 from "../../assets/images/api3.png";
import A4 from "../../assets/images/api4.png";
import A5 from "../../assets/images/api5.png";

const ApiStatus = () => {
  const navigate = useNavigate();

  const data = [
    {
      Image: A1,
      name: "CRC",
      lastUpdated: "Last Update: Oct 29, 2024 00:00",
      status: "Online",
    },
    {
      Image: A2,
      name: "CREDIT REGISTRY",
      lastUpdated: "Last Update: Oct 29, 2024 00:00",
      status: "Online",
    },
    {
      Image: A3,
      name: "FIRST CENTRAL",
      lastUpdated: "Last Update: Oct 29, 2024 00:00",
      status: "Online",
    },
    {
      Image: A4,
      name: "SMILE ID",
      lastUpdated: "Last Update: Oct 29, 2024 00:00",
      status: "Online",
    },
    {
      Image: A5,
      name: "ANALYZE",
      lastUpdated: "Last Update: Oct 29, 2024 00:00",
      status: "Online",
    },
  ];

  return (
    <>
      <Flex width={"100%"} height={"100vh"} direction={"column"} gap={"20px"}>
        <Flex alignItems={"center"} direction={"row"} gap={"5px"}>
          <Flex
            onClick={() => {
              navigate(-1);
            }}
            cursor={"pointer"}
          >
            <BiArrowBack fontSize={"20px"} color="#1F5AA3" />
          </Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"16px"}
            fontWeight={600}
            color={"#1F5AA3"}
          >
            Back
          </Text>
        </Flex>
        <Flex justifyContent={'center'} gap={'20px'}>
          {data.map((item, index) => (
            <Flex
              key={index}
              width={"191px"}
              height={"180px"}
              bgColor={"#FFFFFF"}
              justifyContent={"center"}
              alignItems={"center"}
              py={"20px"}
              px={"10px"}
              direction={"column"}
              gap={"10px"}
              borderRadius={"10px"}
              boxShadow={"lg"}
            >
              <Box width={"24px"} height={"24px"}>
                <Image
                  src={item.Image}
                  alt="logo1"
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                color={"#000000"}
              >
                {item.name}
              </Text>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"10px"}
                fontWeight={600}
                color={"#000000"}
              >
                {item.lastUpdated}
              </Text>
              <Flex>
                <Button
                  variant={"none"}
                  width={"40px"}
                  height={"14px"}
                  bgColor={"#98F4D5"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"10px"}
                  fontWeight={400}
                  color={"#000000"}
                >
                  {item.status}
                </Button>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default ApiStatus;
