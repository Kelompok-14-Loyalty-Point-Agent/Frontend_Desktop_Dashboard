// import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import logo_1 from "../img/logoi-01 1.png";

function Navbar() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      px={9}
      py={3}
      boxShadow="md"
    >
      <Box p="2">
        <Stack direction={"row"}>
          <Image src={logo_1} alt="Logo_1" />
          <Heading size="md">TRAID Point</Heading>
        </Stack>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Get TRAID POINT App, Free!</Button>
        <Button colorScheme="teal">Sign In</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
