import { Box } from '@chakra-ui/react';
import Details from '../../components/Applications/Details';

const DetailsPage = () => {
  return (
    <>
      <Box
        ml={{ lg: "230px", md: "0px", base: "0px" }}
        bg={"#f4f9fd"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <Details />
      </Box>
    </>
  );
}

export default DetailsPage
