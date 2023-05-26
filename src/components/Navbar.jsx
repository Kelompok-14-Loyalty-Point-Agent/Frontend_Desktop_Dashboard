import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

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
          <Link to="/">
            <Image src="./Frame498.svg" alt="Logo" />
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button
          bg="#030F51"
          color="white"
          _hover={{
            background: "#385898",
          }}
          fontWeight={700}
          fontSize={18}
          px={"36px"}
          py={"10px"}
        >
          Get TRAID POINT App, Free!
        </Button>
        <Button
          colorScheme="facebook"
          variant="outline"
          fontFamily="heading"
          fontWeight={700}
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
