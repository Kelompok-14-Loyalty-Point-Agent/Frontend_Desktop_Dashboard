// import React from 'react'

import { Box, Flex, Heading } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";

function CashOut() {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Flex flex={1} flexDirection="column">
        <NavbarDashboard />
        <Box h="max-content" mx={24} bgColor="blue.100">
          <Heading>Cash Out</Heading>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CashOut;
