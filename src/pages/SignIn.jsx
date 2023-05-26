import Navbar from "../components/Navbar";
import Form_SignIn from "../components/Form_SignIn";
import { Flex, Image, SimpleGrid } from "@chakra-ui/react";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <Flex justify="center" align="center" height="85vh">
        <SimpleGrid columns={2} spacing={120}>
          <Image src="./Login-amico 1.svg" alt="Logo" py={50} align="center" />
          <Form_SignIn />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default SignIn;
