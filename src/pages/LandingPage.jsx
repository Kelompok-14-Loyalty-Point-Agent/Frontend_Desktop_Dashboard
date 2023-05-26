// import React from "react";
import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <SimpleGrid columns={3} gap={12} marginTop={16} px={16}>
        <GridItem w="100%" h="max">
          <Box mx="auto" shadow="2xl" borderRadius={6} py={10}>
            <Flex alignItems="center" flexDirection="column" gap={4}>
              <Image
                src="./illustrations/ewallet_illust_landing.svg"
                height="320px"
              />
              <Heading
                fontSize={22}
                fontWeight={700}
                textAlign="center"
                fontFamily="heading"
                color="blue.800"
                my={2}
              >
                Get point for your payment
              </Heading>
              <Text
                fontSize={16}
                fontWeight={400}
                textAlign="center"
                color="teal.500"
                px={24}
              >
                Get points from the transactions you make and exchange them for
                the vouchers we offer!
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem w="100%" h="max">
          <Box mx="auto" shadow="2xl" borderRadius={6} pb={10} px={16}>
            <Flex alignItems="center" flexDirection="column" gap={4}>
              <Image
                src="./illustrations/add_to_cart_illust_landing.svg"
                height="341px"
              />
              <Text
                fontSize={22}
                fontWeight={700}
                textAlign="center"
                fontFamily="heading"
                my={2}
              >
                The easy way to make a purchase
              </Text>
              <Text
                fontSize={16}
                fontWeight={400}
                textAlign="center"
                color="teal.500"
                maxWidth={282}
              >
                Feel the convenience of transactions and purchases made on our
                application!
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem width="100%" h="max">
          <Box mx="auto" shadow="2xl" borderRadius={6} py={7} px={16}>
            <Flex alignItems="center" flexDirection="column" gap={4}>
              <Image
                src="./illustrations/finance_leader_illust_landing.svg"
                height="340px"
              />
              <Text
                fontSize={22}
                textAlign="center"
                fontWeight={700}
                fontFamily="heading"
              >
                Reedem for voucher
              </Text>
              <Text
                fontSize={16}
                fontWeight={400}
                textAlign="center"
                width={298}
                mb={4}
                color="teal.500"
              >
                You can reedem tpoints into vouchers which provide many
                benefits!
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </SimpleGrid>
      <Flex flexDirection="column" alignItems="center" mt={24} mb={100}>
        <Box width={912}>
          <Text
            textAlign="center"
            fontSize={48}
            fontWeight={700}
            mb={10}
            fontFamily="heading"
          >
            GET POINT FOR YOUR PAYMENT WITH TRADE POINT
          </Text>
          <Text textAlign="center" fontSize={20} fontWeight={400} px={6}>
            TRAID Point is a third party application that can make users to do
            transactions then get points by payment gateway method that user
            used.
          </Text>
        </Box>
      </Flex>
      <Center mb={8}>
        <Image src="./Frame498.svg" width={200} opacity="0.3" />
      </Center>
    </>
  );
};

export default LandingPage;
