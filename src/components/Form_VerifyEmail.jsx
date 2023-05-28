import {
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  PinInput,
  PinInputField,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Form_VerifyEmail = () => {
  const navigate = useNavigate();

  const handleNavigateNewPassword = () => {
    navigate("/newpassword");
  };

  return (
    <>
      <Flex justify="center" align="center" height="85vh">
        <SimpleGrid columns={2} spacing={100}>
          <Image
            src="./Two factor authentication-amico 1.svg"
            alt="Logo"
            py={50}
          />
          <Flex align="center" justify="center">
            <Stack
              spacing={4}
              w={"full"}
              maxW={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              boxShadow="12px 12px 20px rgba(0, 0, 0, 0.3)"
              p={8}
              my={12}
            >
              <Heading
                lineHeight={1.1}
                fontFamily="heading"
                fontSize={32}
                textAlign={"center"}
              >
                Verify Your Email
              </Heading>
              <br />
              <Center>
                <Text
                  fontSize={16}
                  fontFamily="body"
                  color="#008284"
                  textAlign={"center"}
                  maxW={300}
                >
                  Please Enter The 4 Digit Code Sent to admin@admin.com
                </Text>
              </Center>
              <br />
              <br />
              <Center>
                <HStack gap={2}>
                  <PinInput placeholder="">
                    <PinInputField w="58px" h="65px" borderColor="#323643" />
                    <PinInputField w="58px" h="65px" borderColor="#323643" />
                    <PinInputField w="58px" h="65px" borderColor="#323643" />
                    <PinInputField w="58px" h="65px" borderColor="#323643" />
                  </PinInput>
                </HStack>
              </Center>
              <br />
              <Center>
                <Link
                  fontSize={16}
                  fontFamily="body"
                  color="#D09635"
                  textAlign={"center"}
                  maxW={300}
                >
                  Resend Code
                </Link>
              </Center>
              <br />
              <br />
              <Stack spacing={6}>
                <Button
                  backgroundColor="#030F51"
                  _hover={{ backgroundColor: "#061C71" }}
                  fontSize={20}
                  fontFamily="heading"
                  color="white"
                  onClick={handleNavigateNewPassword}
                >
                  Verify
                </Button>
              </Stack>
              <br />
              <br />
              <br />
              <Center>
                <HStack>
                  <Circle size="14px" bg="grey" color="white" />
                  <Circle size="14px" bg="#008284" color="white" />
                  <Circle size="14px" bg="grey" color="white" />
                </HStack>
              </Center>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Form_VerifyEmail;
