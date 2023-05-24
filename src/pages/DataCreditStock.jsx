// import  { useState } from 'react'
import { Box, Center, Flex, Text } from "@chakra-ui/react";
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
          <Center mt={4} color="purple.200" fontSize={20} fontWeight={700}>
            <p>Welcome back!</p>
          </Center>
          <Center color="purple.100" fontSize={16}>
            <p>Admin</p>
          </Center>
          <Flex flexDirection="column" mt={20} gap={5}>
            <Box borderLeftRadius="7px" bg="white" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img src="./dashboard-active.svg" alt="" />
                <Link to="/dashboardhome">
                  <Text ml={2} color="#041561">
                    Dashboard
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" bg="white" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/black/people.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/dashboardhome">
                  <Text ml={2} fontWeight={700} color="purple.700">
                    Customer Data
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" bg="white" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/black/receiptitem.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/dashboardhome">
                  <Text ml={2} fontWeight={700} color="purple.700">
                    Customer Transaction
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" bg="white" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/black/emptywallet.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/dashboardhome">
                  <Text ml={2} fontWeight={700} color="purple.700">
                    Stock Credit / Data
                  </Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
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
