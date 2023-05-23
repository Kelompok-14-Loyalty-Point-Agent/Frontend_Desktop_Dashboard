// import  { useState } from 'react'
import { Box, Center, Circle, Flex, Text } from "@chakra-ui/react";

const DashboardHome = () => {
  return (
    <div>
      {/* <Flex
       pos="sticky"
       bg = {('#171717')}
       h="1024px"
       
       boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
       w="308px"
       flexDir="column"
       justifyContent="space-between">
      
        <Text color={'white'}>test</Text>

      </Flex> */}
      <Flex>
        <Box w="300px" bg="#171717" h="1024px">
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
          <Circle
            bg={"white"}
            ml={"36px"}
            mt={"80px"}
            pl={3}
            py={2}
            justifyContent={"start"}
          >
            <img src="./dashboard-active.svg" alt="" />
            <Text ml={2} color="#041561">
              Dashboard
            </Text>
          </Circle>
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
          <Circle ml={"36px"} pl={3} py={2} justifyContent={"start"} mt={3}>
            <img src="./creditdata.svg" alt="" />
            <Text ml={2} color="#95AEF0">
              Stock Credit/Data
            </Text>
          </Circle>
          <Circle ml={"36px"} pl={3} py={2} justifyContent={"start"} mt={3}>
            <img src="./cashout.svg" alt="" />
            <Text ml={2} color="#95AEF0">
              Stock Cash Out
            </Text>
          </Circle>
        </Box>

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
    </div>
  );
};

export default DashboardHome;
