import { Flex, Button } from "@chakra-ui/react";

function NavbarDashboard() {
  return (
    <Flex gap={5} justifyContent="end" mb={4} px={10} pt={10}>
      <Button
        variant="outline"
        colorScheme="blue.700"
        color="blue.700"
        fontFamily="heading"
        width={133}
      >
        Profile
      </Button>
      <Button
        variant="outline"
        colorScheme="red.700"
        color="red.700"
        fontFamily="heading"
        px={25}
      >
        Sign Out
      </Button>
    </Flex>
  );
}

export default NavbarDashboard;
