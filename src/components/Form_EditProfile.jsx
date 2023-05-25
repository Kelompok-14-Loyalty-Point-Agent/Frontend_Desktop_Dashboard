// import React from 'react'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  TableContainer,
  Tabs,
  Text,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Form_EditProfile() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box px={10} pt={10} width="full">
      <Flex gap={5} justifyContent="end" mb={4}>
        <Button
          variant="outline"
          colorScheme="blue.700"
          color="blue.700"
          fontFamily="heading"
          width={133}
        >
          Edit Profile
        </Button>
        <Button
          variant="outline"
          colorScheme="blue.700"
          color="blue.700"
          fontFamily="heading"
          px={25}
        >
          Home
        </Button>
      </Flex>
      <Text fontSize={32} fontFamily="heading" fontWeight={700} ml={10}>
        Profile
      </Text>
      <Box ml={10} mt={7}>
        <Tabs variant="unstyled">
          <TabList>
            <Tab fontWeight={700} fontFamily="heading">
              Profile
            </Tab>
          </TabList>
          <TabIndicator
            height={1}
            borderRadius={6}
            backgroundColor="teal.400"
          />
          <TabPanels>
            <TabPanel bg="white" boxShadow="lg" mt={5} borderRadius={12} p={6}>
              <TableContainer pt={9}>
                <FormControl id="name" isRequired>
                  <FormLabel
                    fontFamily="heading"
                    fontWeight={700}
                    fontSize={24}
                  >
                    Nama Lengkap
                  </FormLabel>
                  <Input
                    height="60px"
                    fontWeight={400}
                    fontSize={20}
                    placeholder="Andrew Mathew"
                    _placeholder={{ color: "gray.500" }}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl id="address" isRequired>
                  <FormLabel
                    fontFamily="heading"
                    fontWeight={700}
                    fontSize={24}
                  >
                    Alamat
                  </FormLabel>
                  <Input
                    height="60px"
                    fontWeight={400}
                    fontSize={20}
                    placeholder="Jakarta, Indonesia"
                    _placeholder={{ color: "gray.500" }}
                    type="email"
                  />
                </FormControl>
                <br />
                <FormControl id="password" isRequired>
                  <FormLabel
                    fontFamily="heading"
                    fontWeight={700}
                    fontSize={24}
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      height="60px"
                      fontWeight={400}
                      fontSize={20}
                      placeholder="***********************"
                      _placeholder={{ color: "gray.500" }}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <br />
                <br />
                <br />
                <Stack spacing={4}>
                  <Button colorScheme="facebook">Change Password</Button>
                  <Button colorScheme="facebook">Save Changes</Button>
                  <Button colorScheme="red">Sign Out</Button>
                </Stack>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Form_EditProfile;
