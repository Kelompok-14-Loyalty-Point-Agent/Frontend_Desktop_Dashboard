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
            maxW={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"dark-lg"}
            p={8}
            my={12}
          >
            <Heading
              lineHeight={1.1}
              fontFamily="heading"
              fontWeight={700}
              fontSize={32}
              textAlign={"center"}
            >
              Forgot Password
            </Heading>
            <br />
            <Center>
              <Text
                fontWeight={400}
                fontSize={16}
                color="#008284"
                textAlign={"center"}
                maxW={250}
              >
                Please Enter Your Email Address to Receive a Verification Number
              </Text>
            </Center>
            <br />
            <br />
            <br />
            <FormControl id="email">
              <FormLabel fontFamily="heading" fontWeight={700} fontSize={20}>
                Email Address
              </FormLabel>
              <Input
                height="50px"
                fontWeight={400}
                fontSize={16}
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
              <Button
                bg="#030F51"
                color="white"
                _hover={{
                  background: "#385898",
                }}
                fontFamily="heading"
                fontWeight={700}
                fontSize={20}
              >
                Send
              </Button>
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
