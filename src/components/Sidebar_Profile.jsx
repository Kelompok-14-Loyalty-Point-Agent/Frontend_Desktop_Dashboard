// import React from 'react'

import { Box, Center, Text } from "@chakra-ui/react";

function Sidebar_Profile() {
  return (
    <Box w={420} bg="#171717" h={1024}>
      <Center mt={"80px"} color="purple.200">
        <Text fontSize={32} fontFamily="heading" fontWeight={700}>
          Hello, Admin
        </Text>
      </Center>
      <Center mt={5} color="white">
        {" "}
        <img src="./Ellipse78.svg" alt="profile" />
        <img
          src="./icons/dashboard/editprofile.svg"
          alt="edit"
          style={{ marginTop: "140px" }}
        />
      </Center>
      <Center mt={3} color="white" fontSize={16} fontWeight={400}>
        <p>Change Photo Profile</p>
      </Center>
    </Box>
  );
}

export default Sidebar_Profile;
