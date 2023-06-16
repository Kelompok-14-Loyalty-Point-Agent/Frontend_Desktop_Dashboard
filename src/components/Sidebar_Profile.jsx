// import React from 'react'

import { Box, Center, Text } from "@chakra-ui/react";

function Sidebar_Profile() {
  return (
    <Box w={330} bg="#171717" h="full">
      <Center mt={"80px"} color="#95AEF0">
        <Text fontFamily="heading" fontWeight={700} fontSize={32}>
          Hello, Admin
        </Text>
      </Center>
      <Center mt={5} color="white">
        <img src="./Ellipse78.svg" alt="profile" />
        <img
          src="./icons/dashboard/editprofile.svg"
          alt="edit"
          style={{ marginTop: "140px" }}
        />
      </Center>
      <Center mt={3} color="white" fontWeight={400} fontSize={16}>
        <p>Change Photo Profile</p>
      </Center>
    </Box>
  );
}

export default Sidebar_Profile;
