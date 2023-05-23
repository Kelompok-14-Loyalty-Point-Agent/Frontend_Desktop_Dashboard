// import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";

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
          <Image src="./Frame498.svg" alt="Logo" />
        </Stack>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="facebook" fontSize={18} px={"36px"} py={"10px"}>
          Get TRAID POINT App, Free!
        </Button>
        <Button
          colorScheme="facebook"
          variant="outline"
          fontSize={20}
          px={"25px"}
          py={"10px"}
        >
          Sign In
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
