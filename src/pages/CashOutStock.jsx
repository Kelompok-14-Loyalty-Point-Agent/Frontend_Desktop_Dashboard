// import React from 'react'
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";

const CashOutStock = () => {
  const [customerData, setCustomerData] = useState([]);
  // const [TransactionData, setTransactionData] = useState([]);
  const [activeCard, setActiveCard] = useState(0);
  const activeCustomer = customerData[activeCard];
  const [showActivities, setShowActivities] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get(
          "https://3.0.59.152.nip.io/users/customers",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5MzY2NDQ5fQ.JPn0Gyxs1nAwgcDya0SmDJasmRbxdtQVeTIDGUJTjJU",
            },
          }
        );
        
        // const transactionResponse = await axios.get(
        //   "https://3.0.59.152.nip.io/transactions/users/recent/2",
        //   {
        //     headers: {
        //       Authorization:
        //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5MzY2NDQ5fQ.JPn0Gyxs1nAwgcDya0SmDJasmRbxdtQVeTIDGUJTjJU",
        //     },
        //   }
        // );
  
        setCustomerData(customerResponse.data.data);
        // setTransactionData(transactionResponse.data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    axios
      .get("https://3.0.59.152.nip.io/users/customers", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5MzY2NDQ5fQ.JPn0Gyxs1nAwgcDya0SmDJasmRbxdtQVeTIDGUJTjJU",
        },
      })
      .then((response) => {
        setCustomerData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Flex height="full">
        <Sidebar />
        {/* STOCK CASH OUT */}
        <Box mx={"114px"} my={"80px"} w={580}>
          <Text fontSize={32} as="b" fontFamily={"heading"} ps={4}>
            Stock Cash Out
          </Text>
          <Box maxHeight={820} overflowY="auto" p={4}>
            {customerData.map((customer, index) => (
              <Flex
                key={customer.id}
                w="full"
                h={150}
                boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
                mt={5}
                p={4}
                ps={12}
                gap={20}
                borderRadius={6}
                bg={activeCard === index ? "#262626" : "#FFFFFF"}
                color={activeCard === index ? "#ECECEC" : "#000000"}
                onClick={() => setActiveCard(index)}
                cursor="pointer"
              >
                <Image
                  src={customer.profile.URL}
                  alt=""
                  borderRadius="50%"
                  width={"96px"}
                  height={"102px"}
                />
                <Box>
                  <Text fontSize={24} as="b" fontFamily="heading">
                    {customer.name}
                  </Text>
                  <Text fontSize={16} fontFamily="body">
                    Transaction totals
                  </Text>
                  <Text
                    fontSize={32}
                    as="b"
                    fontFamily="heading"
                    color="#2DB5AB"
                  >
                    {customer.profile.TransactionMade}x
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
        {/* END STOCK CASH OUT */}

        <Flex flex={1} flexDirection="column">
          <NavbarDashboard />
          {/* DETAIL STOCK CASH OUT */}
          <Flex>
            {activeCustomer && (
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
                        <Image
                          src={activeCustomer.profile.URL}
                          alt=""
                          borderRadius="50%"
                          width={"96px"}
                          height={"102px"}
                        />
                      </Center>
                      <Center mt={5}>
                        <Text
                          fontSize={24}
                          fontFamily={"heading"}
                          as={"b"}
                          color={"#FFFFFF"}
                        >
                          {activeCustomer.name}
                        </Text>
                      </Center>
                      <Center>
                        <Center mt={5}>
                          <Text
                            fontSize={16}
                            fontFamily={"body"}
                            color={"#D09635"}
                          >
                            {activeCustomer.profile.Member}
                          </Text>
                        </Center>
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
                      {/* <Flex color={"#ECECEC"} mt={5} gap={5}>
                        <Text fontFamily={"body"}>
                          {activeCustomer.recent_activity_date}
                        </Text>
                        <Text fontFamily={"body"}>
                          {activeCustomer.recent_activity_act}
                        </Text>
                      </Flex>
                      <Flex color={"#ECECEC"} mt={1} gap={5}>
                        <Text fontFamily={"body"}>
                          {activeCustomer.recent_activity_date_2}
                        </Text>
                        <Text fontFamily={"body"}>
                          {activeCustomer.recent_activity_act_2}
                        </Text>
                      </Flex>
                      <Flex color={"#ECECEC"} mt={1} gap={5}>
                        <Text fontFamily={"body"}>
                          {activeCustomer.recent_activity_date_3}
                        </Text>
                        <Text fontFamily={"body"}>
                          {activeCustomer.recent_activity_act_3}
                        </Text>
                      </Flex>
                      {showActivities && (
                        <>
                          <Flex color={"#ECECEC"} mt={1} gap={5}>
                            <Text fontFamily={"body"}>
                              {activeCustomer.recent_activity_date_4}
                            </Text>
                            <Text fontFamily={"body"}>
                              {activeCustomer.recent_activity_act_4}
                            </Text>
                          </Flex>
                          <Flex color={"#ECECEC"} mt={1} gap={5}>
                            <Text fontFamily={"body"}>
                              {activeCustomer.recent_activity_date_5}
                            </Text>
                            <Text fontFamily={"body"}>
                              {activeCustomer.recent_activity_act_5}
                            </Text>
                          </Flex>
                        </>
                      )} */}
                      
                      <Center mt={5}>
                        <Text
                          fontSize={12}
                          fontFamily={"body"}
                          color={"#57DAC5"}
                          cursor="pointer"
                          onClick={() => setShowActivities(!showActivities)}
                        >
                          {showActivities ? "See Less" : "See More"}
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
                        {activeCustomer.profile.TransactionMade}x
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
                        {activeCustomer.profile.MonthlyTransaction}x
                      </Text>
                    </Center>
                  </Box>
                </Flex>
                <Center>
                  <Box w={364} h={62} mt={10}>
                    <Text color={"#F7DA94"} fontSize={16} fontFamily={"body"}>
                      The customer has made{" "}
                      {activeCustomer.profile.MonthlyTransaction}x transactions
                      this month, you as an admin can give 25 points to users
                      from a multiple of 5x transactions made!
                    </Text>
                  </Box>
                </Center>
              </Box>
            )}
          </Flex>
          {/* END DETAIL STOCK CASH OUT */}
        </Flex>
      </Flex>
    </>
  );
};

export default CashOutStock;
