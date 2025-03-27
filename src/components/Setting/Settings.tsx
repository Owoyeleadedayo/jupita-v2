import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import Profile from "./Profile";
import Team from "./Team";
import ApiSetting from "./ApiSetting";

const Settings = () => {
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
              width={"100%"}
              onChange={handleTabChange}
              variant="soft-rounded"
              colorScheme="blue"
            >
              <TabList
                maxWidth={"300px"}
                bg={"#e6edf5"}
                p={"3px"}
                borderRadius={"18px"}
                gap={"9px"}
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
                  Profile
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
                  Team
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
                  API Settings
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Profile />
                </TabPanel>
                <TabPanel p={0}>
                  <Team />
                </TabPanel>
                <TabPanel p={0}>
                  <ApiSetting />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Settings;
