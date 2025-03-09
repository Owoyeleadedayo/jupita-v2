import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import Scorecard from "./Scorecard";
import LoanProduct from "./LoanProduct";

const Decide = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    if (index !== 0) {
      setTabIndex(index);
    }
  };
  return (
    <>
      <Flex width={"100%"} mx={"10px"}>
        <Tabs
          index={tabIndex}
          onChange={handleTabChange}
          variant="soft-rounded"
          colorScheme="blue"
          width={"100%"}
        >
          <TabList
            maxWidth={"258px"}
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
              Scorecards
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
              Loan Product
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0}>
              <Scorecard />
            </TabPanel>
            <TabPanel p={0}>
              <LoanProduct />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default Decide;
