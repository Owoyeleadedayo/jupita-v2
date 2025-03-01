import { Box } from "@chakra-ui/react";
import Applications from "../../components/Applications/Applications";

const ApplicationsPage = () => {
  return (
    <>
      <Box
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#f4f9fd"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <Applications />
      </Box>
    </>
  );
}

export default ApplicationsPage
