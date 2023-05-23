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
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Form_ForgotPassword() {
  return (
    <Flex justify="center" align="center" height="85vh">
      <SimpleGrid columns={2} spacing={100}>
        <Image src="./Forgotpasswordamico1.svg" alt="Logo" py={50} />
        <Flex align="center" justify="center">
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"dark-lg"}
            p={8}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={32} textAlign={"center"}>
              Forgot your password?
            </Heading>
            <br />
            <Text
              fontSize={16}
              color={useColorModeValue("gray.800", "gray.400")}
              textAlign={"center"}
              px={1}
            >
              Please Enter Your Email Address to Receive a Verification Number
            </Text>
            <br />
            <br />
            <br />
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input
                placeholder="Enter your email"
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
            </FormControl>
            <br />
            <br />
            <br />
            <br />
            <Stack spacing={6}>
              <Button colorScheme="facebook">Send</Button>
            </Stack>
            <br />
            <br />
            <br />
            <Center>
              <HStack>
                <Circle size="14px" bg="#008284" color="white" />
                <Circle size="14px" bg="grey" color="white" />
                <Circle size="14px" bg="grey" color="white" />
              </HStack>
            </Center>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Form_ForgotPassword;
