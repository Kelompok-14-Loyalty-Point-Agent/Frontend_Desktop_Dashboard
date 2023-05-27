// import React from 'react'

import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import { useState } from "react";

const CustomerData = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => (prevIsEditing === true ? false : true));
  };

  const handleDoneEdit = () => {
    setIsEditing(false);
  };
  console.log(isEditing);

  return (
    <div>
      {isEditing ? (
        <Flex h={"full"}>
          <Sidebar />

          {/* COSTUMER DATA */}
          <Box mx={"114px"} my={"80px"} w={570} opacity={"30%"}>
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
          <Box flex={"1"} px={10}>
            <Box opacity={"30%"}>
              <NavbarDashboard />
            </Box>

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
                  <button onClick={handleEditClick}>
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
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
                          opacity={"30%"}
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
                    <Flex gap={3} opacity={"30%"}>
                      <img src="./icons/customer/calender.svg" alt="" />
                      <Text>25 years old</Text>
                    </Flex>
                    <Flex gap={4} mt={5} opacity={"30%"}>
                      <Center>
                        <img src="./icons/customer/women-gen.svg" alt="" />
                      </Center>
                      <Text>Woman</Text>
                    </Flex>
                    <Flex gap={3} mt={5} opacity={"30%"}>
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
                  <Box opacity={"30%"}>
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
                <Flex justifyContent={"center"} pt={10}>
                  <Button
                    variant="outline"
                    color={"white"}
                    w={400}
                    justifyContent={"center"}
                    colorScheme="white"
                    onClick={handleDoneEdit}
                  >
                    Done
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          {/* DETAIL CUSTOMER */}
        </Flex>
      ) : (
        <Flex h={"full"}>
          <Sidebar />

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
          <Box flex={"1"} px={10}>
            <NavbarDashboard />

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
                  <button onClick={handleEditClick}>
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
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
      )}
    </div>
  );
};

export default CustomerData;
