// import React from 'react'

import { Flex } from "@chakra-ui/react";
import Sidebar_Profile from "../components/Sidebar_Profile";
import Form_EditProfile from "../components/Form_EditProfile";

function DashboardProfile() {
  return (
    <Flex height="100vh">
      <Sidebar_Profile />;
      <Form_EditProfile />
    </Flex>
  );
}

export default DashboardProfile;
