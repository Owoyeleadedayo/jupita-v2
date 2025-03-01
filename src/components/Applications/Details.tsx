import {
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import LoanDetails from "./LoanDetails";
import CreditSearch from "./CreditSearch/CreditSearch";

const Details = () => {
  const [tabIndex, setTabIndex] = useState(0); // Start at Tab 1 (index 0)

  const handleTabChange = (index: number) => {
    if (index !== 0) {
      setTabIndex(index); // Allow switching to Tab 2 only
    }
  };
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex width={"100%"}>
          <Flex width={"100%"} mx={"10px"} position={"relative"}>
            <Tabs
              index={tabIndex}
              onChange={handleTabChange}
              variant="soft-rounded"
              colorScheme="blue"
            >
              <TabList bg={"#e6edf5"} p={"2px"} borderRadius={"18px"}>
                <Tab
                  bg={tabIndex === 0 ? "#1F5AA3" : "transparent"}
                  color={tabIndex === 0 ? "white" : "black"}
                  _selected={{ bg: "#1F5AA3", color: "white" }}
                  _hover={{ bg: tabIndex === 0 ? "#17447A" : "#d1d1d1" }}
                  onClick={() => setTabIndex(0)}
                  fontFamily={"Nunito Sans"}
                  fontWeight={tabIndex === 0 ? 700 : 400}
                  fontSize={"16px"}
                >
                  Loan Details
                </Tab>
                <Tab
                  bg={tabIndex === 1 ? "#1F5AA3" : "transparent"}
                  color={tabIndex === 1 ? "white" : "black"}
                  _selected={{ bg: "#1F5AA3", color: "white" }}
                  _hover={{ bg: tabIndex === 1 ? "#17447A" : "#d1d1d1" }}
                  onClick={() => setTabIndex(1)}
                  fontFamily={"Nunito Sans"}
                  fontWeight={tabIndex === 1 ? 700 : 400}
                  fontSize={"16px"}
                >
                  Credit Search
                </Tab>
                <Tab
                  bg={tabIndex === 2 ? "#1F5AA3" : "transparent"}
                  color={tabIndex === 2 ? "white" : "black"}
                  _selected={{ bg: "#1F5AA3", color: "white" }}
                  _hover={{ bg: tabIndex === 2 ? "#17447A" : "#d1d1d1" }}
                  onClick={() => setTabIndex(2)}
                  fontFamily={"Nunito Sans"}
                  fontWeight={tabIndex === 2 ? 700 : 400}
                  fontSize={"16px"}
                >
                  Decide
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <LoanDetails />
                </TabPanel>
                <TabPanel p={0}>
                  <CreditSearch />
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Flex position={"absolute"} right={0}>
              <Button
                width={"100%"}
                height={{ md: "40px", base: "30px" }}
                bgColor={"#1F5AA3"}
                fontSize={{ md: "14px", xl: "14px" }}
                lineHeight={"20px"}
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                color={"white"}
                textTransform={"capitalize"}
                _hover={{
                  bg: "white",
                  border: "1px solid #2261B0",
                  color: "#2261B0",
                }}
              >
                Change status
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Details;
