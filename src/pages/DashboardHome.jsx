// import  { useState } from 'react'
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import { useCustomerSelector } from "../config/redux/customer/customerSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_customer } from "../config/redux/customer/customerThunk";

const DashboardHome = () => {
  useEffect(() => {
    dispatch(get_customer());
  }, []);
  const customers = useCustomerSelector();
  const dispatch = useDispatch();
  console.log(customers);

  return (
    <div>
      <Flex h={"max"}>
        <Sidebar />
        {/* COSTUMER LEADERBOARD */}
        <Box mx={"114px"} my={"80px"} w={650} h="max-content">
          <Text fontSize={32} as="b" fontFamily={"heading"}>
            Customer Leaderboard
          </Text>
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
            {customers.map((customer, index) => (
              <Flex
                w={"full"}
                h={"fit-content"}
                boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
                mt={5}
                borderRadius={6}
                p={4}
                justifyContent={"center"}
                key={index}
              >
                <Flex gap={20}>
                  <Image
                    src={customer.image}
                    alt=""
                    borderRadius="full"
                    boxSize="120px"
                  />
                  <Flex flexDirection={"column"} w={200}>
                    <Text fontSize={26} as="b" fontFamily={"heading"}>
                      {customer.name}
                    </Text>
                    <Text>Transation Made</Text>
                    <Text
                      fontSize={32}
                      as="b"
                      color={"#2DB5AB"}
                      fontFamily={"heading"}
                    >
                      {customer.transaction_made}x
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
                        {customer.total_ttpoint}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Box>

          <Center mt={10}>
            <img src="./icons/dashboard/panahbawah.svg" alt="" />
          </Center>
        </Box>
        {/* END COSTUMER LEADERBOARD */}
        {/* TOTAL USER & STATUS STOCK */}
        <Box flex={"1"} px={10}>
          <NavbarDashboard />
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
                      {customers.length}
                    </Text>
                  </Center>
                  ;
                  <Flex>
                    <img src="./icons/dashboard/grow.svg" alt="" />
                    <Text fontSize={24} color={"#6AB044"}>
                      {" "}
                      +{customers.length} This Month
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
                    <img src="./icons/dashboard/succes.svg" alt="" />
                  </Center>

                  <Text fontSize={24} color={"#6AB044"}>
                    Your stock credit &
                  </Text>
                  <Text fontSize={24} color={"#6AB044"}>
                    <Center>data is secure</Center>
                  </Text>
                  <Center mt={100}>
                    <Flex>
                      <Text fontSize={24} ml={3} fontFamily={"heading"}>
                        Check Stock
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
