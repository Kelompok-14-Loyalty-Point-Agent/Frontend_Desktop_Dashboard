// import  { useState } from 'react'
import { Box, Button, Center, Circle, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div>
      <Flex>
        {/* #SIDEBAR DASHBOARD START  */}
        <Box w={300} bg="#171717">
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
          <Box borderLeftRadius="7px" ml="36px" mt="20px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img src="./creditdata.svg" alt="" color="black" />
              <Text ml={2} color="#95AEF0">
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

        {/* COSTUMER LEADERBOARD */}
        <Box mx={"114px"} my={"80px"}>
          <Text fontSize={32} as="b">
            Customer Leaderboard
          </Text>
          <Center
            w={518}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={7}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={7}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text fontSize={24} as={"b"} color={"#2DB5AB"}>
                    600
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Center>
          <Center
            w={518}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={7}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={7}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text fontSize={24} as={"b"} color={"#2DB5AB"}>
                    600
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Center>
          <Center
            w={518}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={7}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={7}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text fontSize={24} as={"b"} color={"#2DB5AB"}>
                    600
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Center>
          <Center
            w={518}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={7}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={7}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text fontSize={24} as={"b"} color={"#2DB5AB"}>
                    600
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Center>
          <Center
            w={518}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={7}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={7}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text fontSize={24} as={"b"} color={"#2DB5AB"}>
                    600
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Center>
          <Center mt={10}>
            <img src="./icons/dashboard/panahbawah.svg" alt="" />
          </Center>
        </Box>
        {/* END COSTUMER LEADERBOARD */}

        {/* TOTAL USER & STATUS STOCK */}
        <Box w={312} mr={10}>
          <Flex justifyContent={"end"} mb={10}>
            <Button
              colorScheme="#030F51"
              mt={10}
              variant={"outline"}
              mr={5}
              color={"#030F51"}
            >
              Profile
            </Button>
            <Button
              colorScheme="#030F51"
              mt={10}
              variant={"outline"}
              color={"#030F51"}
            >
              Sign Out
            </Button>
          </Flex>
          <Text fontSize={24} as={"b"}>
            Total User
          </Text>
          <Center
            mt={5}
            w={312}
            h={233}
            mb={20}
            bg={"#262626"}
            borderRadius={12}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
          >
            <Box>
              <Center>
                <Text fontSize={56} as={"b"} color={"#ECECEC"}>
                  807
                </Text>
              </Center>
              <Flex>
                <img src="./icons/dashboard/grow.svg" alt="" />
                <Text fontSize={24} color={"#6AB044"}>
                  {" "}
                  +20 This Month
                </Text>
              </Flex>
            </Box>
          </Center>
          <Text fontSize={24} as={"b"}>
            Status Stock
          </Text>
          <Center
            mt={5}
            w={312}
            h={393}
            borderRadius={6}
            boxShadow={"0px 0px 15px rgba(0, 0, 0, 0.25)"}
          >
            <Box>
              <Center>
                <img src="./public/icons/dashboard/succes.svg" alt="" />
              </Center>

              <Text fontSize={24} color={"#6AB044"}>
                Your stock credit &
              </Text>
              <Text fontSize={24} color={"#6AB044"}>
                <Center>data is secure</Center>
              </Text>
              <Center mt={100}>
                <Flex>
                  <img src="./icons/dashboard/updatestock.svg" alt="" />
                  <Text fontSize={20} as={"b"} ml={3}>
                    Update Stock
                  </Text>
                </Flex>
              </Center>
            </Box>
          </Center>
        </Box>
        {/* TOTAL USER & STATUS STOCK */}
      </Flex>
    </div>
  );
};

export default DashboardHome;
