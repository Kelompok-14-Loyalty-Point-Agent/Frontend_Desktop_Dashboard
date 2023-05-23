// import  { useState } from 'react'
import { Box, Center, Circle, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DataCreditStock = () => {
  return (
    <>
      <Flex>
        {/* #SIDEBAR DASHBOARD START  */}
        <Box w={300} bg="#171717" h={1024}>
          <Center mt={"80px"} color="white">
            {" "}
            <img src="./Ellipse78.svg" alt="" />
          </Center>
          <Center mt={4} color="white">
            <Text fontSize={"32px"}>Andrew</Text>
          </Center>
          <Center mt={4} color="white">
            <p>Welcome back!</p>
            <p>Admin</p>
          </Center>
          <Center color="white">
            <p>Admin</p>
          </Center>
          <Box
            borderLeftRadius="7px"
            bg="white"
            ml="36px"
            mt="80px"
            pl={3}
            py={2}
          >
            <Flex alignItems="center" gap={2}>
              <img src="./dashboard-active.svg" alt="" />
              <Link to="/dashboardhome">
                <Text ml={2} color="#041561">
                  Dashboard
                </Text>
              </Link>
            </Flex>
          </Box>
          <Circle ml={"36px"} pl={3} py={2} justifyContent={"start"} mt={3}>
            <img src="./costumerdata.svg" alt="" />
            <Text ml={2} color="#95AEF0">
              Customer Data
            </Text>
          </Circle>
          <Circle ml={"36px"} pl={3} py={2} justifyContent={"start"} mt={3}>
            <img src="./transaction.svg" alt="" />
            <Text ml={2} color="#95AEF0">
              Customer Transaction
            </Text>
          </Circle>
          <Box
            borderLeftRadius="7px"
            bg="white"
            ml="36px"
            mt="20px"
            pl={3}
            py={2}
          >
            <Flex alignItems="center" gap={2}>
              <img src="./creditdata.svg" alt="" color="black" />
              <Text ml={2} color="#041561">
                Stock Credit/Data
              </Text>
            </Flex>
          </Box>
          <Circle ml={"36px"} pl={3} py={2} justifyContent={"start"} mt={3}>
            <img src="./cashout.svg" alt="" />
            <Text ml={2} color="#95AEF0">
              Stock Cash Out
            </Text>
          </Circle>
        </Box>
        {/* #SIDEBAR DASHBOARD END  */}

        <Box mx={"114px"} my={"80px"}>
          <Text fontSize={32} as="b">
            Customer Leaderboard
          </Text>
          <Center
            w={518}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            justifyContent={"start"}
            p={5}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b">
                  76x
                </Text>
              </Box>
            </Flex>
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default DataCreditStock;
