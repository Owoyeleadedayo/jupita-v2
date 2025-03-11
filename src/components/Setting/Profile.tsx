import { Button, Flex, Input, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"420px"}
        bgColor={"#FFFFFF"}
        my={"20px"}
        p={"20px"}
        direction={"column"}
        gap={"20px"}
        borderRadius={"10px"}
      >
        <Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"22px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            Personal Information
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"30px"}>
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
                textTransform={"capitalize"}
              >
                Full name
              </Text>
              <Input
                placeholder="Williams Adeyemi"
                type="text"
                width={"400px"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
              />
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
                textTransform={"capitalize"}
              >
                Phone number
              </Text>
              <Input
                placeholder="09065512525"
                type="number"
                width={"400px"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
              />
            </Flex>
          </Flex>
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
                textTransform={"capitalize"}
              >
                Email address
              </Text>
              <Input
                placeholder="wadeyemi@getjupita.com"
                type="email"
                width={"400px"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
              />
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
                textTransform={"capitalize"}
              >
                Role
              </Text>
              <Input
                placeholder="Super Admin"
                type="text"
                width={"400px"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"flex-end"}>
          <Button
            variant={"none"}
            bg={"#1F5AA3"}
            borderRadius={"14px"}
            fontFamily={"Nunito Sans"}
            fontSize={"16px"}
            fontWeight={700}
            color={"#FFFFFF"}
            textTransform={"capitalize"}
          >
            Save changes
          </Button>
        </Flex>
        <Flex width={"200px"} alignItems={"center"} mt={'20px'} gap={"20px"}>
          <Flex width={"100%"} alignItems={"center"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
              color={"#7D8592"}
              textTransform={"capitalize"}
            >
              Password
            </Text>
            <Input
              variant={"none"}
              placeholder="**************"
              type="password"
              width={"300px"}
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
            />
          </Flex>
          <Flex>
            <Button
              variant={"none"}
              width={"78px"}
              height={"33px"}
              bgColor={"#1F5AA3"}
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
              color={"#FFFFFF"}
              textTransform={"capitalize"}
              borderRadius={"14px"}
            >
              Change
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Profile;
