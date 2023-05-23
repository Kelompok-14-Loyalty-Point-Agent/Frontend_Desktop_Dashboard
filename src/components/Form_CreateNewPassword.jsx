// import React from 'react'
import {
  Button,
  Center,
  Circle,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Form_ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex justify="center" align="center" height="85vh">
      <SimpleGrid columns={2} spacing={100}>
        <Image src="./Secureloginamico1.svg" alt="Logo" py={50} />
        <Flex align="center" justify="center">
          <Stack
            spacing={4}
            w={"full"}
            maxW={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"dark-lg"}
            p={8}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={32} textAlign={"center"}>
              Create New Password
            </Heading>
            <br />
            <Center>
              <Text fontSize={16} color="teal" textAlign={"center"} maxW={320}>
                Your New Password Must Be Different from Previously Used
                Password
              </Text>
            </Center>
            <br />
            <br />
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Please Enter Your Password"
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
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Confirm Your Password"
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
            <Stack spacing={6}>
              <Button colorScheme="facebook">Save</Button>
            </Stack>
            <br />
            <br />
            <br />
            <Center>
              <HStack>
                <Circle size="14px" bg="grey" color="white" />
                <Circle size="14px" bg="grey" color="white" />
                <Circle size="14px" bg="#008284" color="white" />
              </HStack>
            </Center>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Form_ForgotPassword;
