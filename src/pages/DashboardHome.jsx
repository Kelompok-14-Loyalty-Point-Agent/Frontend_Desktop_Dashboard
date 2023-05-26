// import  { useState } from 'react'
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div>
      <Flex h={"full"}>
        {/* #SIDEBAR DASHBOARD START  */}
        <Box w={420} bg="#171717">
          <Center mt={"80px"} color="white">
            {" "}
            <img src="./Ellipse78.svg" alt="" />
          </Center>
          <Center mt={4} color="white">
            <Text fontSize={32} fontFamily="heading" fontWeight={600}>
              Andrew
            </Text>
          </Center>
          <Center
            mt={4}
            color="purple.200"
            fontSize={20}
            fontFamily="heading"
            fontWeight={700}
          >
            <p>Welcome back!</p>
          </Center>
          <Center color="purple.100" fontSize={16}>
            <p>Admin</p>
          </Center>
          <Flex flexDirection="column" mt={20} gap={5}>
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2} bg={"white"}>
              <Flex alignItems="center" gap={2}>
                <img src="./icons/black/dashboard-active.svg" alt="" />
                <Link to="/dashboard">
                  <Text
                    ml={2}
                    color="black"
                    fontFamily="heading"
                    fontWeight={700}
                    fontSize={20}
                  >
                    Dashboard
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/white/people.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/customers">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color="purple.200"
                    fontFamily="heading"
                    fontSize={20}
                  >
                    Customer Data
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/white/receiptitem.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/transactions">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color="purple.200"
                    fontFamily="heading"
                    fontSize={20}
                  >
                    Customer Transaction
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/white/moneys.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/stocks">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color="purple.200"
                    fontFamily="heading"
                    fontSize={20}
                  >
                    Stock Credit / Data
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/white/emptywallet.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/dashboardhome">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color="purple.200"
                    fontFamily="heading"
                    fontSize={20}
                  >
                    Stock Cashout
                  </Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        {/* #SIDEBAR DASHBOARD END  */}

        {/* COSTUMER LEADERBOARD */}
        <Box mx={"114px"} my={"80px"} w={650}>
          <Text fontSize={32} as="b" fontFamily={"heading"}>
            Customer Leaderboard
          </Text>
          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            borderRadius={6}
            justifyContent={"center"}
            p={4}
          >
            <Flex gap={20}>
              <img src="./cewe1.svg" alt="" />
              <Flex flexDirection={"column"}>
                <Text fontSize={26} as="b" fontFamily={"heading"}>
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text
                  fontSize={32}
                  as="b"
                  color={"#2DB5AB"}
                  fontFamily={"heading"}
                >
                  76x
                </Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text
                    fontSize={24}
                    as={"b"}
                    color={"#2DB5AB"}
                    fontFamily={"heading"}
                  >
                    600
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            borderRadius={6}
            justifyContent={"center"}
            p={4}
          >
            <Flex gap={20}>
              <img src="./cewe1.svg" alt="" />
              <Flex flexDirection={"column"}>
                <Text fontSize={26} as="b" fontFamily={"heading"}>
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text
                  fontSize={26}
                  as="b"
                  color={"#2DB5AB"}
                  fontFamily={"heading"}
                >
                  76x
                </Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text
                    fontSize={24}
                    as={"b"}
                    color={"#2DB5AB"}
                    fontFamily={"heading"}
                  >
                    600
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            borderRadius={6}
            justifyContent={"center"}
            p={4}
          >
            <Flex gap={20}>
              <img src="./cewe1.svg" alt="" />
              <Flex flexDirection={"column"}>
                <Text fontSize={26} as="b" fontFamily={"heading"}>
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text
                  fontSize={26}
                  as="b"
                  color={"#2DB5AB"}
                  fontFamily={"heading"}
                >
                  76x
                </Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text
                    fontSize={24}
                    as={"b"}
                    color={"#2DB5AB"}
                    fontFamily={"heading"}
                  >
                    600
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            borderRadius={6}
            justifyContent={"center"}
            p={4}
          >
            <Flex gap={20}>
              <img src="./cewe1.svg" alt="" />
              <Flex flexDirection={"column"}>
                <Text fontSize={26} as="b" fontFamily={"heading"}>
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text
                  fontSize={26}
                  as="b"
                  color={"#2DB5AB"}
                  fontFamily={"heading"}
                >
                  76x
                </Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text
                    fontSize={24}
                    as={"b"}
                    color={"#2DB5AB"}
                    fontFamily={"heading"}
                  >
                    600
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            borderRadius={6}
            justifyContent={"center"}
            p={4}
          >
            <Flex gap={20}>
              <img src="./cewe1.svg" alt="" />
              <Flex flexDirection={"column"}>
                <Text fontSize={26} as="b" fontFamily={"heading"}>
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text
                  fontSize={26}
                  as="b"
                  color={"#2DB5AB"}
                  fontFamily={"heading"}
                >
                  76x
                </Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontSize={24} as="b" color={"white"}>
                  .
                </Text>
                <Text>Total tPoint</Text>
                <Flex>
                  <img src="./icons/dashboard/coin1.svg" alt="" />
                  <Text
                    fontSize={24}
                    as={"b"}
                    color={"#2DB5AB"}
                    fontFamily={"heading"}
                  >
                    600
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Center mt={10}>
            <img src="./icons/dashboard/panahbawah.svg" alt="" />
          </Center>
        </Box>
        {/* END COSTUMER LEADERBOARD */}

        {/* TOTAL USER & STATUS STOCK */}
        <Box flex={"1"}>
          <Flex gap={5} justifyContent="end" mb={4} px={10} pt={10}>
            <Button
              variant="outline"
              colorScheme="blue.700"
              color="blue.700"
              fontFamily="heading"
              width={133}
            >
              Profile
            </Button>
            <Button
              variant="outline"
              colorScheme="red.700"
              color="red.700"
              fontFamily="heading"
              px={25}
            >
              Sign Out
            </Button>
          </Flex>
          <Flex justifyContent={"center"} pt={10}>
            <Flex flexDirection={"column"}>
              <Text fontSize={24} as={"b"} fontFamily={"heading"}>
                Total User
              </Text>
              <Center
                mt={5}
                w={400}
                h={250}
                mb={20}
                bg={"#262626"}
                borderRadius={12}
                boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
              >
                <Box>
                  <Center>
                    <Text
                      fontSize={56}
                      as={"b"}
                      color={"#ECECEC"}
                      fontFamily={"heading"}
                    >
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
            </Flex>
          </Flex>
          <Flex justifyContent={"center"}>
            <Flex flexDirection={"column"}>
              <Text fontSize={24} as={"b"} fontFamily={"heading"}>
                Status Stock
              </Text>
              <Center
                mt={5}
                w={400}
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
                      <Text
                        fontSize={20}
                        as={"b"}
                        ml={3}
                        fontFamily={"heading"}
                      >
                        Update Stock
                      </Text>
                    </Flex>
                  </Center>
                </Box>
              </Center>
            </Flex>
          </Flex>
        </Box>
        {/* TOTAL USER & STATUS STOCK */}
      </Flex>
    </div>
  );
};

export default DashboardHome;
