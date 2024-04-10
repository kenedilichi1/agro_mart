import { Box, Heading } from "@chakra-ui/react";
import Register from "../../components/home_page/register";

function HomePage(): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1.5rem"
      marginTop="2rem"
    >
      <Box>
        <Heading>Farmer Sign Up</Heading>
      </Box>
      <Register />
    </Box>
  );
}

export default HomePage;
