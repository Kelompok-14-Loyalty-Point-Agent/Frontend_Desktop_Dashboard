// import React from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
const CashOutStock = () => {
  return (
    <>
      <Flex height="full">
        <Sidebar />
        <Box mx={"114px"} my={"80px"} w={580}>
          <Text fontSize={32} as="b" fontFamily={"heading"} ps={4}>
            Stock Cash Out
          </Text>
          {/* STOCK CASH OUT */}
          <Box
            maxHeight={820}
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
            p={4}
          >
            <Flex
              w={"full"}
              h={150}
              boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
              mt={5}
              p={4}
              ps={12}
              gap={20}
              borderRadius={6}
              bg={"#262626"}
              color={"#ECECEC"}
            >
              <img src="./cewe1.svg" alt="" />
              <Box>
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
              ps={12}
              gap={20}
              borderRadius={6}
            >
              <img src="./Jhon Felix.svg" alt="" />
              <Box>
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
              ps={12}
              gap={20}
              borderRadius={6}
            >
              <img src="./Samuel Drian.svg" alt="" />
              <Box>
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
              ps={12}
              gap={20}
              borderRadius={6}
            >
              <img src="./Elvina Lies.svg" alt="" />
              <Box>
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
              ps={12}
              gap={20}
              borderRadius={6}
            >
              <img src="./maria belina.svg" alt="" />
              <Box>
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
          </Box>
          <Center mt={5}>
            <img src="./icons/dashboard/panahbawah.svg" alt="" />
          </Center>
        </Box>
        <Flex flex={1} flexDirection="column">
          <NavbarDashboard />
          <Flex>
            {/* END STOCK CASH OUT */}

            {/* DETAIL STOCK CASH OUT */}
            <Box
              w={500}
              h={830}
              mt={"52px"}
              bg={"#262626"}
              borderRadius={12}
              boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
              ml={"auto"}
              mr={"auto"}
            >
              <Box pt={20}>
                <Center gap={28}>
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
              <Box ms={16}>
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
                  <NumberInputField
                    w={"89px"}
                    h={"52px"}
                    bg="#FFFFFF"
                    textAlign="center"
                  />
                </NumberInput>
                <Button
                  backgroundColor="#17590B"
                  _hover={{ backgroundColor: "#457A3B" }}
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
            {/* END DETAIL STOCK CASH OUT */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CashOutStock;
