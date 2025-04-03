import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { RiUploadCloudFill } from "react-icons/ri";

const EmploymentDocs = () => {
  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <>
      <Flex width={"100%"} height={"100%"}>
        <Flex
          width={"100%"}
          height={"100%"}
          direction={"column"}
          gap={"20px"}
          pt={"40px"}
        >
          <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
            <Flex alignItems={"center"} direction={"column"} gap={"20px"}>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Employment offer
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Payslip
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Utility bill
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#7D8592"}
                  textTransform={"capitalize"}
                >
                  Additional document
                </FormLabel>
                <Flex
                  direction={"column"}
                  width={"350px"}
                  height={"90px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"#FFFFFF"}
                  border={"1px solid #D8E0F0"}
                  borderRadius={"8px"}
                  gap={"5px"}
                >
                  <Flex>
                    <RiUploadCloudFill fontSize={"30px"} color="#D8E0F0" />
                  </Flex>

                  <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                    <Input
                      type="file"
                      id="file-upload"
                      bgColor={"#FFFFFF"}
                      color={"#000000"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={600}
                      variant={"none"}
                      display="none"
                      borderRadius={"24px"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "10px",
                        color: "#2261B0",
                      }}
                    >
                      Upload File
                    </label>
                  </Flex>
                  {file && (
                    <Flex gap={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"13px"}
                        fontWeight={600}
                        color={"#2261B0"}
                      >
                        File uploaded
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"12px"}
                        fontWeight={600}
                        color={"#000000"}
                      >
                        {file.name}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default EmploymentDocs;
