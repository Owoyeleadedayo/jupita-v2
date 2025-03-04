import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import Individual from "./Individual";
import Business from "./Business";

const CreditSearch = () => {
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
          <Flex width={"100%"} mx={"10px"}>
            <Tabs
              index={tabIndex}
              onChange={handleTabChange}
              variant="soft-rounded"
              colorScheme="blue"
            >
              <TabList
                maxWidth={"215px"}
                bg={"#e6edf5"}
                p={"3px"}
                borderRadius={"18px"}
                gap={"8px"}
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
                  Individual
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
                  Business
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Individual />
                </TabPanel>
                <TabPanel p={0}>
                  <Business />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CreditSearch;
