import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MdDateRange } from 'react-icons/md';
import RequestCard from './RequestCard';
import BarCharts from './BarCharts';
import LoanProduct from './LoanProduct';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [startDate, setStartDate] = useState<Date | null>(
      new Date("2020-11-16")
    );
    const [endDate, setEndDate] = useState<Date | null>(new Date("2020-12-16"));
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef<HTMLDivElement | null>(null);

    const handleDateChange = (dates: [Date | null, Date | null] | null) => {
      if (dates) {
        setStartDate(dates[0]);
        setEndDate(dates[1]);
        setShowPicker(false);
      }
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          pickerRef.current &&
          !pickerRef.current.contains(event.target as Node)
        ) {
          setShowPicker(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navigate = useNavigate();
  return (
    <>
      <Flex width={'100%'} height={'100%'} direction={'column'} gap={'20px'}>
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
            <Box position="relative" ref={pickerRef}>
              <Flex
                justifyContent="center"
                alignItems="center"
                gap="5px"
                px="10px"
                py="5px"
                bgColor="#E6EDF5"
                borderRadius="8px"
                cursor="pointer"
                onClick={() => setShowPicker(!showPicker)}
              >
                <MdDateRange />
                <Text
                  fontFamily="Nunito Sans"
                  fontSize={{ md: "16px", base: "14px" }}
                  fontWeight={400}
                  color="#0A1629"
                >
                  {startDate ? startDate.toLocaleDateString() : "Start Date"} -{" "}
                  {endDate ? endDate.toLocaleDateString() : "End Date"}
                </Text>
              </Flex>
              {showPicker && (
                <Box
                  position="absolute"
                  top="50px"
                  left="0"
                  zIndex="1000"
                  bg="white"
                  boxShadow="md"
                  p="10px"
                  borderRadius="8px"
                >
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                  />
                </Box>
              )}
            </Box>
          </Box>
          <Flex mt={"10px"}>
            <Button
              width={"100%"}
              height={{ md: "40px", base: "30px" }}
              bgColor={"#1F5AA3"}
              fontSize={{ md: "14px", xl: "14px" }}
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
        <Flex gap={'10px'}>
          <BarCharts />
          <LoanProduct />
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard
