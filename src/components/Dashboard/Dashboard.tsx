import { Box, Button, Flex, Heading } from '@chakra-ui/react';
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import RequestCard from './RequestCard';
import BarCharts from './BarCharts';
import LoanProduct from './LoanProduct';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from "dayjs";

const Dashboard = () => {
  const dateFormat = "YYYY/MM/DD";

    const navigate = useNavigate();
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex
          alignItems={{
            lg: "center",
            md: "center",
            base: "flex-start",
          }}
          justifyContent={{
            lg: "space-between",
            md: "space-between",
            base: "flex-start",
          }}
          flexDirection={{ lg: "row", md: "row", base: "column" }}
          p={{ md: "5px", base: "15px" }}
          borderRadius={"8px"}
        >
          <Box
            pl={{ lg: 0, md: 0, base: 2 }}
            display={"flex"}
            flexDirection={"column"}
            gap={{ md: "5px", base: "6px" }}
          >
            <Heading
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={{ md: "16px", base: "17px" }}
              color={"#7D8592"}
            >
              Period
            </Heading>
            <Box position="relative">
              <RangePicker
                defaultValue={[
                  dayjs("2015/01/01", dateFormat),
                  dayjs("2015/01/01", dateFormat),
                ]}
                format={dateFormat}
              />
            </Box>
          </Box>
          <Flex mt={"10px"}>
            <Button
              width={"100%"}
              height={{ md: "30px", base: "30px" }}
              bgColor={"#1F5AA3"}
              fontSize={{ md: "14px", xl: "14px" }}
              borderRadius={"8px"}
              boxShadow={"lg"}
              lineHeight={"20px"}
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              color={"white"}
              _hover={{
                bg: "white",
                border: "1px solid #2261B0",
                color: "#2261B0",
              }}
              onClick={() => navigate("/api-status")}
            >
              View API Status
            </Button>
          </Flex>
        </Flex>
        <RequestCard />
        <Flex gap={"10px"}>
          <BarCharts />
          <LoanProduct />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard
