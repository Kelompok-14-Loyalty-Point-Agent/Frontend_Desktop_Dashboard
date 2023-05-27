// import React from "react";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";

function AddStock() {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Box mx={14} flex={"1"}>
        <NavbarDashboard />
        <Heading mb={16} mx={10}>
          Add Stock
        </Heading>
        <SimpleGrid
          boxShadow="dark-lg"
          mx={10}
          px={24}
          pt={16}
          pb={24}
          borderRadius="md"
        >
          <form>
            <FormControl mb={10}>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Provider Name
              </FormLabel>
              <Input
                borderColor="black"
                borderRadius="lg"
                size="lg"
                placeholder="Input Provider Name"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
            <FormControl mb={10}>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Stock Total
              </FormLabel>
              <Input
                borderColor="black"
                borderRadius="lg"
                size="lg"
                placeholder="Input Stock Amount"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={27} fontFamily="heading" mb={5}>
                Price
              </FormLabel>
              <Input
                borderColor="black"
                borderRadius="lg"
                size="lg"
                placeholder="Input Price Amount"
                _placeholder={{ fontSize: 20 }}
              />
            </FormControl>
          </form>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default AddStock;
