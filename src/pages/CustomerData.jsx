// import React from 'react'

import { Box, Button, Center, Circle, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomerData = () => {
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
          <Box borderLeftRadius="7px" ml="36px" mt="80px" pl={3} py={2}>
            <Flex alignItems="center">
              <img src="./icons/white/dashboard.svg" alt="" />
              <Link to="/dashboard">
                <Text ml={2} color="#95AEF0">
                  Dashboard
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box
            borderLeftRadius="7px"
            ml="36px"
            mt="20px"
            pl={3}
            py={2}
            bg={"white"}
          >
            <Flex alignItems="center" gap={2}>
              <img src="./icons/black/customers.svg" alt="" />
              <Text ml={2} color="#041561">
                Customer Data
              </Text>
            </Flex>
          </Box>
          <Circle ml={"36px"} pl={3} py={2} justifyContent={"start"} mt={3}>
            <img src="./transaction.svg" alt="" />
            <Text ml={2} color="#95AEF0">
              Customer Transaction
            </Text>
          </Circle>
          <Box borderLeftRadius="7px" ml="36px" mt="20px" pl={3} py={2}>
            <Flex alignItems="center">
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

        {/* COSTUMER DATA */}
        <Box mx={"114px"} my={"80px"}>
          <Text fontSize={32} as="b">
            Customer Data
          </Text>
          <Center
            w={414}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            bg={"#262626"}
            borderRadius={6}
            color={"#ECECEC"}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={5}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={5}>
                <Text fontSize={24} as="b" color={"#262626"}>
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
            w={414}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={5}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={5}>
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
            w={414}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={5}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={5}>
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
            w={414}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={5}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={5}>
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
            w={414}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={5}
            borderRadius={6}
          >
            <Flex>
              <img src="./cewe1.svg" alt="" />
              <Box mx={5}>
                <Text fontSize={24} as="b">
                  Isabella
                </Text>
                <Text>Transation Made</Text>
                <Text fontSize={24} as="b" color={"#2DB5AB"}>
                  76x
                </Text>
              </Box>
              <Box mx={5}>
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
        {/* END COSTUMER DATA */}

        {/* DETAIL CUSTOMER */}
        <Box w={416} mr={10}>
          <Flex justifyContent={"end"} mb={"68px"}>
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

          <Box
            w={416}
            h={790}
            bg={"#262626"}
            borderRadius={12}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
          >
            <Flex gap={4} pt={10} px={10} justifyContent={"end"}>
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
                    <Text fontSize={24} as={"b"} color={"#ECECEC"}>
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
                  <Text fontSize={14} as={"b"} color={"#D09635"}>
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
                  <Text fontSize={32} as={"b"} color={"#2DB5AB"}>
                    76x
                  </Text>
                </Center>
                <Center>
                  <Text color={"#ECECEC"} fontSize={16}>
                    Total tPoint
                  </Text>
                </Center>
                <Center>
                  <Text fontSize={32} as={"b"} color={"#2DB5AB"}>
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
                  <Text fontSize={32} as={"b"} color={"#2DB5AB"}>
                    8x
                  </Text>
                </Center>
                <Center>
                  <Text color={"#ECECEC"} fontSize={16}>
                    Total Redeem Voucher
                  </Text>
                </Center>
                <Center>
                  <Text fontSize={32} as={"b"} color={"#2DB5AB"}>
                    9x
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* DETAIL CUSTOMER */}
      </Flex>
    </div>
  );
};

export default CustomerData;
