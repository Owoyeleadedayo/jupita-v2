import { Button, Flex, Switch, Text } from "@chakra-ui/react";

const Operator = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        py={"30px"}
        direction={"column"}
        gap={"20px"}
      >
        <Flex direction={"column"} gap={"10px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={700}
            fontSize={"24px"}
            color={"#1F5AA3"}
          >
            Operator
          </Text>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={600}
            fontSize={"15px"}
            color={"#000"}
          >
            Has the permissions to manage everything on the platform
          </Text>
        </Flex>
        <Flex width={"800px"} justifyContent={"space-between"}>
          <Flex direction={"column"} gap={"20px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              fontSize={"16px"}
              color={"#1F5AA3"}
            >
              General
            </Text>
            <Flex direction={"column"} gap={"15px"}>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Personal Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Employment Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Director’s Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Business Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Delete Document
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View Loan Transactions
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Upload Document
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Delete Loan Transaction
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Loan Decision
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Create Profile
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View Client
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Client
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Analyze Bank Statement
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Export Transactions
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Export Credit Report
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Export Analyzed Bank Statement
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View Logs
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View API Status
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Analyze Bank Statement
                </Text>
                <Switch />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            gap={"20px"}
            justifyContent={"space-between"}
          >
            <Flex direction={"column"} gap={"20px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                color={"#1F5AA3"}
              >
                User Management
              </Text>
              <Flex direction={"column"} gap={"15px"}>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Add New Users
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Delete Users
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Edit Business Information
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Manage Permissions
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Edit Roles
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Create Roles
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Reassign Roles
                  </Text>
                  <Switch />
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent={"flex-end"}>
              <Button
                // width={"180px"}
                // height={"40px"}
                bgColor={"#1F5AA3"}
                color={"#FFFFFF"}
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                borderRadius={"8px"}
              >
                Save Changes
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Operator;
