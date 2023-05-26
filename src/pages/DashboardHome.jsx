// import  { useState } from 'react'
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const DashboardHome = () => {
  return (
    <div>
      <Flex h={"max"}>
        <Sidebar />
        {/* COSTUMER LEADERBOARD */}
        <Box mx={"114px"} my={"80px"} w={650} h="max-content">
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
