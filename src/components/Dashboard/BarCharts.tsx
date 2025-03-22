import { Flex, Select } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const CustomTick: React.FC<{
  x?: number;
  y?: number;
  payload?: { value: string };
}> = ({ x = 0, y = 0, payload }) => {
  if (!payload || typeof payload.value !== "string") return null;

  const [month, year] = payload.value.split(" ");

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={0}
        textAnchor="middle"
        fill="#77838F"
        fontSize={10}
        fontFamily="Nunito Sans"
        fontWeight={400}
      >
        {month}
      </text>
      <text
        x={0}
        y={10}
        textAnchor="middle"
        fill="#77838F"
        fontSize={12}
        fontFamily="Nunito Sans"
        fontWeight={400}
      >
        {year}
      </text>
    </g>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RoundedBackground = (props: any) => {
  const { x, y, width, height } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={6}
      
      fontFamily="Nunito Sans"
      fontWeight={400}
      fontSize={10}
      color="#77838F"
      fill="#eee"
    />
  );
};

const BarCharts = () => {
  const data = [
    { name: "Jan 2024", pv: 21000000 },
    { name: "Feb 2024", pv: 18000000 },
    { name: "Mar 2024", pv: 15000000 },
    { name: "Apr 2024", pv: 10000000 },
    { name: "May 2024", pv: 18000000 },
    { name: "Jun 2024", pv: 9000000 },
    { name: "Jul 2024", pv: 8000000 },
    { name: "Aug 2024", pv: 6000000 },
    { name: "Sep 2024", pv: 4500000 },
    { name: "Oct 2024", pv: 7000000 },
    { name: "Nov 2024", pv: 3000000 },
    { name: "Dec 2024", pv: 5000000 },
  ];

  return (
    <Flex
      width="100%"
      bgColor="#FFFFFF"
      borderRadius="14px"
      direction="column"
      gap="10px"
      boxShadow={"md"}
    >
      <Flex p="20px">
        <Select
          width="110px"
          fontFamily="Nunito Sans"
          fontWeight={700}
          fontSize="12px"
          color="#C418E6"
          bgColor="#C418E61C"
        >
          <option value="approved">Approved</option>
        </Select>
      </Flex>
      <Flex width="100%" height="100%" flexGrow={1}>
        <ResponsiveContainer height="100%">
          <BarChart data={data} barSize={10}>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={<CustomTick />}
              interval={0}
              dy={10}
            />
            <YAxis
              domain={[0, 25000000]}
              ticks={[1000000, 5000000, 10000000, 15000000, 20000000]}
              tick={{
                fontSize: "12px",
                fill: "#77838F",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
                textAnchor: "middle",
              }}
              tickFormatter={(tick) => `${tick / 1000000}M`}
              tickLine={false}
              axisLine={false}
            />

            <Bar
              dataKey="pv"
              fill="#3F8CFF"
              background={<RoundedBackground />}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default BarCharts;
