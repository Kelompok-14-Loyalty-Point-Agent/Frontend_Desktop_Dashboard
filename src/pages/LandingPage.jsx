// import React from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={10} mx={14}>
        <GridItem w="100%" h="max">
          <Box mx="auto" shadow="2xl" borderRadius={6} py={10} px={16}>
            <Flex alignItems="center" flexDirection="column" gap={4}>
              <Image src="./illustrations/ewallet_illust_landing.svg" />
              <Text fontSize={20} fontWeight={700} textAlign="center">
                Get point for your payment
              </Text>
              <Text fontSize={14} fontWeight={400} textAlign="center">
                Get points from the transactions you make and exchange them for
                the vouchers we offer!
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem w="100%" h="max">
          <Box mx="auto" shadow="2xl" borderRadius={6} py={7} px={16}>
            <Flex alignItems="center" flexDirection="column" gap={4}>
              <Image src="./illustrations/add_to_cart_illust_landing.svg" />
              <Text fontSize={20} fontWeight={700} textAlign="center">
                The easy way to make a purchase
              </Text>
              <Text fontSize={14} fontWeight={400} textAlign="center" px={6}>
                Feel the convenience of transactions and purchases made on our
                application!
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem w="100%" h="max">
          <Box mx="auto" shadow="2xl" borderRadius={6} py={7} px={16}>
            <Flex alignItems="center" flexDirection="column" gap={4}>
              <Image src="./illustrations/finance_leader_illust_landing.svg" />
              <Text fontSize={20} textAlign="center" fontWeight={700}>
                Reedem for voucher
              </Text>
              <Text fontSize={14} fontWeight={400} textAlign="center" px={6}>
                You can reedem tpoints into vouchers which provide many
                benefits!
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Flex flexDirection="column" alignItems="center" mt={24} mb={100}>
        <Box width={912}>
          <Text textAlign="center" fontSize={48} fontWeight={700} mb={10}>
            GET POINT FOR YOUR PAYMENT WITH TRADE POINT
          </Text>
          <Text textAlign="center" fontSize={20} fontWeight={400}>
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
