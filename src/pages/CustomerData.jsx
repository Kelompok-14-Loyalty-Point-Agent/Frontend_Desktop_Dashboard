// import React from 'react'

import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomerData = () => {
  return (
    <div>
      <Flex h={"full"}>
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
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
              <Flex alignItems="center" gap={2}>
                <img src="./icons/white/dashboard-active.svg" alt="" />
                <Link to="/dashboard">
                  <Text
                    ml={2}
                    color="purple.200"
                    fontFamily="heading"
                    fontWeight={700}
                    fontSize={20}
                  >
                    Dashboard
                  </Text>
                </Link>
              </Flex>
            </Box>
            <Box borderLeftRadius="7px" ml="36px" pl={3} py={2} bg={"white"}>
              <Flex alignItems="center" gap={2}>
                <img
                  src="./icons/black/people.svg"
                  alt="people.svg"
                  width={26}
                />
                <Link to="/customers">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color="black"
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

        {/* COSTUMER DATA */}
        <Box mx={"114px"} my={"80px"} w={570}>
          <Text fontSize={32} as="b" fontFamily={"heading"}>
            Customer Data
          </Text>
          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            borderRadius={6}
            justifyContent={"center"}
            p={4}
            bg={"#262626"}
          >
            <Flex gap={20}>
              <img src="./cewe1.svg" alt="" />
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={26}
                  as="b"
                  fontFamily={"heading"}
                  color={"#ECECEC"}
                >
                  Isabella
                </Text>
                <Text color={"#ECECEC"}>Transation Made</Text>
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
                <Text fontSize={24} as="b" color={"#262626"}>
                  .
                </Text>
                <Text color={"#ECECEC"}>Total tPoint</Text>
                <Flex gap={2}>
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
                <Flex gap={2}>
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
                <Flex gap={2}>
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
                <Flex gap={2}>
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
                <Flex gap={2}>
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
        {/* END COSTUMER DATA */}

        {/* DETAIL CUSTOMER */}
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

          <Flex justifyContent={"center"}>
            <Flex
              w={500}
              h={830}
              bg={"#262626"}
              borderRadius={12}
              boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
              mt={"52px"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Flex gap={4} px={10} justifyContent={"end"}>
                <img src="./icons/customer/edit.svg" alt="" />
                <img src="./icons/customer/trash.svg" alt="" />
              </Flex>
              <Box>
                <Center>
                  <Box>
                    <Center mt={2}>
                      <img src="./cewe1.svg" alt="" />
                    </Center>
                    <Center mt={5}>
                      <Text
                        fontSize={24}
                        as={"b"}
                        color={"#ECECEC"}
                        fontFamily={"heading"}
                      >
                        Isabella
                      </Text>
                    </Center>
                    <Center>
                      <Text fontSize={16} color={"#D09635"}>
                        Gold Member
                      </Text>
                    </Center>
                  </Box>
                </Center>
              </Box>
              <Flex justifyContent={"center"} gap={10} mt={10}>
                <Box color={"#ECECEC"}>
                  <Flex gap={3}>
                    <img src="./icons/customer/calender.svg" alt="" />
                    <Text>25 years old</Text>
                  </Flex>
                  <Flex gap={4} mt={5}>
                    <Center>
                      <img src="./icons/customer/women-gen.svg" alt="" />
                    </Center>
                    <Text>Woman</Text>
                  </Flex>
                  <Flex gap={3} mt={5}>
                    <img src="./icons/customer/location.svg" alt="" />
                    <Text>Jakarta, Indonesia</Text>
                  </Flex>
                  <Flex gap={3} mt={5}>
                    <img src="./icons/customer/email.svg" alt="" />
                    <Text>itsabella@gmail.com</Text>
                  </Flex>
                  <Flex gap={3} mt={5}>
                    <img src="./icons/customer/phone.svg" alt="" />
                    <Text>08212212121</Text>
                  </Flex>
                </Box>
                <Box>
                  <Center>
                    <Text
                      fontSize={14}
                      as={"b"}
                      color={"#D09635"}
                      fontFamily={"heading"}
                    >
                      Recent Activities
                    </Text>
                  </Center>
                  <Flex color={"#ECECEC"} mt={5} gap={5}>
                    <Text>23/04/23</Text>
                    <Text>Transfer</Text>
                  </Flex>
                  <Flex color={"#ECECEC"} mt={5} gap={5}>
                    <Text>23/04/23</Text>
                    <Text>Transfer</Text>
                  </Flex>
                  <Flex color={"#ECECEC"} mt={5} gap={5}>
                    <Text>23/04/23</Text>
                    <Text>Transfer</Text>
                  </Flex>
                  <Center mt={5}>
                    <Text fontSize={12} color={"#57DAC5"}>
                      See More
                    </Text>
                  </Center>
                </Box>
              </Flex>
              <Flex justifyContent={"center"} gap={10} mt={20}>
                <Box>
                  <Center>
                    <Text color={"#ECECEC"} fontSize={16}>
                      Total Transaction Made
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      fontSize={32}
                      as={"b"}
                      color={"#2DB5AB"}
                      fontFamily={"heading"}
                    >
                      76x
                    </Text>
                  </Center>
                  <Center>
                    <Text color={"#ECECEC"} fontSize={16}>
                      Total tPoint
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      fontSize={32}
                      as={"b"}
                      color={"#2DB5AB"}
                      fontFamily={"heading"}
                    >
                      600
                    </Text>
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text color={"#ECECEC"} fontSize={16}>
                      Transaction This Month
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      fontSize={32}
                      as={"b"}
                      color={"#2DB5AB"}
                      fontFamily={"heading"}
                    >
                      8x
                    </Text>
                  </Center>
                  <Center>
                    <Text color={"#ECECEC"} fontSize={16}>
                      Total Redeem Voucher
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      fontSize={32}
                      as={"b"}
                      color={"#2DB5AB"}
                      fontFamily={"heading"}
                    >
                      9x
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {/* DETAIL CUSTOMER */}
      </Flex>
    </div>
  );
};

export default CustomerData;
