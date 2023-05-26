// import React from 'react'
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const CashOutStock = () => {
  return (
    <>
      <Flex>
        {/* #SIDEBAR DASHBOARD START  */}
        <Box w={420} bg="#171717">
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
          <Box borderLeftRadius="7px" ml="36px" mt="20px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img src="./icons/white/people.svg" alt="people.svg" width={26} />
              <Text ml={2} color="#95AEF0">
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
          <Circle
            ml={"36px"}
            pl={3}
            py={2}
            justifyContent={"start"}
            mt={3}
            bg={"white"}
          >
            <img src="./icons/black/stock cashout-active.svg" alt="" />
            <Text ml={2} color="#041561">
              Stock Cash Out
            </Text>
          </Circle>
        </Box>
        {/* #SIDEBAR DASHBOARD END  */}

        {/* STOCK CASH OUT */}
        <Box mx={"114px"} my={"80px"} w={650}>
          <Text fontSize={32} as="b">
            Stock Cash Out
          </Text>

          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={4}
            ps={10}
            borderRadius={6}
            bg={"#262626"}
            color={"#ECECEC"}
          >
            <img src="./cewe1.svg" alt="" />
            <Box ml={10}>
              <Text fontSize={24} as="b" fontFamily={"heading"}>
                Isabella
              </Text>
              <Text fontSize={16} fontFamily={"body"}>
                Transaction totals
              </Text>
              <Text
                fontSize={32}
                as="b"
                fontFamily={"heading"}
                color={"#2DB5AB"}
              >
                76x
              </Text>
            </Box>
          </Flex>

          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={4}
            ps={10}
            borderRadius={6}
          >
            <img src="./Jhon Felix.svg" alt="" />
            <Box ml={10}>
              <Text fontSize={24} as="b" fontFamily={"heading"}>
                Jhon Felix
              </Text>
              <Text fontSize={16} fontFamily={"body"}>
                Transaction totals
              </Text>
              <Text
                fontSize={32}
                as="b"
                fontFamily={"heading"}
                color={"#2DB5AB"}
              >
                69x
              </Text>
            </Box>
          </Flex>

          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={4}
            ps={10}
            borderRadius={6}
          >
            <img src="./Samuel Drian.svg" alt="" />
            <Box ml={10}>
              <Text fontSize={24} as="b" fontFamily={"heading"}>
                Samuel Drian
              </Text>
              <Text fontSize={16} fontFamily={"body"}>
                Transaction totals
              </Text>
              <Text
                fontSize={32}
                as="b"
                fontFamily={"heading"}
                color={"#2DB5AB"}
              >
                65x
              </Text>
            </Box>
          </Flex>

          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={4}
            ps={10}
            borderRadius={6}
          >
            <img src="./Elvina Lies.svg" alt="" />
            <Box ml={10}>
              <Text fontSize={24} as="b" fontFamily={"heading"}>
                Elvina Lies
              </Text>
              <Text fontSize={16} fontFamily={"body"}>
                Transaction totals
              </Text>
              <Text
                fontSize={32}
                as="b"
                fontFamily={"heading"}
                color={"#2DB5AB"}
              >
                64x
              </Text>
            </Box>
          </Flex>

          <Flex
            w={"full"}
            h={150}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
            mt={5}
            p={4}
            ps={10}
            borderRadius={6}
          >
            <img src="./maria belina.svg" alt="" />
            <Box ml={10}>
              <Text fontSize={24} as="b" fontFamily={"heading"}>
                Maria Belina
              </Text>
              <Text fontSize={16} fontFamily={"body"}>
                Transaction totals
              </Text>
              <Text
                fontSize={32}
                as="b"
                fontFamily={"heading"}
                color={"#2DB5AB"}
              >
                49x
              </Text>
            </Box>
          </Flex>

          <Center mt={10}>
            <img src="./icons/dashboard/panahbawah.svg" alt="" />
          </Center>
        </Box>
        {/* END STOCK CASH OUT */}

        {/* DETAIL STOCK CASH OUT */}
        <Box flex={"1"}>
          {/* TOP NAVBAR */}
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
          {/* END TOP NAVBAR */}
          <Box
            w={416}
            h={790}
            mt={"68px"}
            bg={"#262626"}
            borderRadius={12}
            boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
          >
            <Box pt={14}>
              <Center gap={20}>
                <Box>
                  <Center mt={2}>
                    <img src="./cewe1.svg" alt="" />
                  </Center>
                  <Center mt={5}>
                    <Text
                      fontSize={24}
                      fontFamily={"heading"}
                      as={"b"}
                      color={"#ECECEC"}
                    >
                      Isabella
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize={16} fontFamily={"body"} color={"#D09635"}>
                      Gold Member
                    </Text>
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      fontSize={14}
                      fontFamily={"heading"}
                      as={"b"}
                      color={"#D09635"}
                    >
                      Recent Activities
                    </Text>
                  </Center>
                  <Flex color={"#ECECEC"} mt={5} gap={5}>
                    <Text fontFamily={"body"}>25/04/23 </Text>
                    <Text fontFamily={"body"}>Top up</Text>
                  </Flex>
                  <Flex color={"#ECECEC"} mt={5} gap={5}>
                    <Text fontFamily={"body"}>23/04/23</Text>
                    <Text fontFamily={"body"}>Transfer</Text>
                  </Flex>
                  <Flex color={"#ECECEC"} mt={5} gap={5}>
                    <Text fontFamily={"body"}>25/04/23</Text>
                    <Text fontFamily={"body"}>Transfer</Text>
                  </Flex>
                  <Center mt={5}>
                    <Text fontSize={12} fontFamily={"body"} color={"#57DAC5"}>
                      See More
                    </Text>
                  </Center>
                </Box>
              </Center>
            </Box>
            <Flex justifyContent={"center"} gap={10} mt={20}>
              <Box>
                <Center>
                  <Text color={"#ECECEC"} fontSize={16} fontFamily={"body"}>
                    Total Transaction Made
                  </Text>
                </Center>
                <Center>
                  <Text
                    fontSize={32}
                    fontFamily={"heading"}
                    as={"b"}
                    color={"#2DB5AB"}
                  >
                    76x
                  </Text>
                </Center>
              </Box>
              <Box>
                <Center>
                  <Text color={"#ECECEC"} fontSize={16} fontFamily={"body"}>
                    Transaction This Month
                  </Text>
                </Center>
                <Center>
                  <Text
                    fontSize={32}
                    fontFamily={"heading"}
                    as={"b"}
                    color={"#2DB5AB"}
                  >
                    10x
                  </Text>
                </Center>
              </Box>
            </Flex>
            <Center>
              <Box w={364} h={62} mt={10}>
                <Text color={"#F7DA94"} fontSize={16} fontFamily={"body"}>
                  The customer has made 10x transactions this month, you as an
                  admin can give 25 points to users from a multiple of 5x
                  transactions made!
                </Text>
              </Box>
            </Center>
            <Box ms={6}>
              <Text
                fontSize={"16px"}
                color={"#2DB5AB"}
                fontFamily={"body"}
                mt={10}
                mb={2}
              >
                Input point
              </Text>
              <NumberInput min={0} max={25} borderRadius="10px">
                <NumberInputField w={"89px"} h={"52px"} bg="#FFFFFF" textAlign="center"/>
              </NumberInput>
              <Button
                backgroundColor="#030F51"
                _hover={{ backgroundColor: "#061C71" }}
                fontSize={"16px"}
                fontFamily={"heading"}
                color="white"
                w={"228px"}
                h={"33px"}
                mt={5}
                borderRadius={"5px"}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
        {/* END DETAIL STOCK CASH OUT */}
      </Flex>
    </>
  );
};

export default CashOutStock;
