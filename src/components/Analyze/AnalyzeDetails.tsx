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
import { CiExport } from "react-icons/ci";
import Summary from "./Summary/Summary";
import CashFlow from "./CashFlow";
import Behavioral from "./Behavioral";

const AnalyzeDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    if (index !== 0) {
      setTabIndex(index);
    }
  };
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex width={"100%"}>
          <Flex width={"100%"} mx={"10px"} position={"relative"}>
            <Tabs
              index={tabIndex}
              width={"100%"}
              onChange={handleTabChange}
              variant="soft-rounded"
              colorScheme="blue"
            >
              <TabList
                maxWidth={"340px"}
                bg={"#e6edf5"}
                p={"3px"}
                borderRadius={"18px"}
                gap={"5px"}
                boxShadow={"md"}
              >
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
                  Summary
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
                  Cash Flow
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
                  Behavioral
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Summary />
                </TabPanel>
                <TabPanel p={0}>
                  <CashFlow />
                </TabPanel>
                <TabPanel p={0}>
                  <Behavioral />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Flex position={"absolute"} right={0} gap={"5px"}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Button
                  px={{ md: "12px", base: "3px" }}
                  py={{ md: "5px", base: "1px" }}
                  variant={"none"}
                  bgColor={"#1F5AA3"}
                  color={"white"}
                  fontFamily={"Nunito Sans"}
                  fontSize={{ md: "16px", base: "14px" }}
                >
                  <Flex pr={"5px"}>
                    <CiExport color="#FFFFFF" fontSize={"20px"} />
                  </Flex>
                  Export
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AnalyzeDetails;
