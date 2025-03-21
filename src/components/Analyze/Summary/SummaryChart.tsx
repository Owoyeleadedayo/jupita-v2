import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Jan 2024",
    uv: 4000000,
    pv: 2400000,
    lv: 3330000,
  },
  {
    name: "Feb 2024",
    uv: 3000000,
    pv: 1398000,
    lv: 3333000,
  },
  {
    name: "March 2024",
    uv: 3000000,
    pv: 980094,
    lv: 2330000,
  },
  {
    name: "Apr 2024",
    uv: 1900000,
    pv: 3000008,
    lv: 1000003,
  },
  {
    name: "May 2024",
    uv: 3000008,
    pv: 3333000,
    lv: 2330000,
  },
  {
    name: "Jun 2024",
    uv: 3000008,
    pv: 3330000,
    lv: 4000000,
  },
  {
    name: "Jul 2024",
    uv: 3333000,
    pv: 3000008,
    lv: 4000000,
  },
];



const SummaryChart = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      bg="#FFFFFF"
      direction="column"
      gap="20px"
      p="20px"
      borderRadius="10px"
    >
      <Flex gap="40px" justifyContent="end">
        <Flex alignItems="center" gap="5px">
          <Box width="25px" height="12px" bg="#8E44AD" />
          <Text fontFamily="Nunito Sans" fontSize="12px" fontWeight={400}>
            Total Debit
          </Text>
        </Flex>
        <Flex alignItems="center" gap="5px">
          <Box width="25px" height="12px" bg="#50E3C2" />
          <Text fontFamily="Nunito Sans" fontSize="12px" fontWeight={400}>
            Total Credit
          </Text>
        </Flex>
        <Flex alignItems="center" gap="5px">
          <Box width="25px" height="12px" bg="#4A90E2" />
          <Text fontFamily="Nunito Sans" fontSize="12px" fontWeight={400}>
            Total Closing Balance
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              tick={{
                fontSize: "14px",
                fill: "#000000",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
              }}
            />
            <YAxis
              tick={{
                fontSize: "14px",
                fill: "#000000",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
              }}
            />
            <Bar
              dataKey="pv"
              fill="#8E44AD"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#50E3C2"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <Bar
              dataKey="lv"
              fill="#4A90E2"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            {/* New Bar for amt */}
            <Bar
              dataKey="amt"
              fill="#FF5733" // You can change the color here
              activeBar={<Rectangle fill="green" stroke="red" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default SummaryChart;
