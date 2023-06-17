// import React from 'react'
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";

const getMembershipStatus = (transactionCount) => {
  if (transactionCount >= 50) {
    return "Gold Member";
  } else if (transactionCount >= 20) {
    return "Silver Member";
  } else if (transactionCount >= 10) {
    return "Bronze Member";
  }
  return "Bronze Member";
};

const CashOutStock = () => {
  const [customerData, setCustomerData] = useState([]);
  const [activeCard, setActiveCard] = useState(0);
  const activeCustomer = customerData[activeCard];
  const [showActivities, setShowActivities] = useState(false);

  useEffect(() => {
    axios
      .get("https://645cd09be01ac6105893f80f.mockapi.io/Customers")
      .then((response) => {
        setCustomerData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Flex height="full">
        <Sidebar />
        <Box mx={"114px"} my={"80px"} w={580}>
          <Text fontSize={32} as="b" fontFamily={"heading"} ps={4}>
            Stock Cash Out
          </Text>
          {/* STOCK CASH OUT */}
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
                  src={customer.customer_image}
                  alt=""
                  borderRadius="50%"
                />
                <Box>
                  <Text fontSize={24} as="b" fontFamily="heading">
                    {customer.customer_name}
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
                    {customer.total_transaction}x
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
        <Flex flex={1} flexDirection="column">
          <NavbarDashboard />
          <Flex>
            {/* END STOCK CASH OUT */}

            {/* DETAIL STOCK CASH OUT */}
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
                          src={activeCustomer.customer_image}
                          alt=""
                          borderRadius="50%"
                        />
                      </Center>
                      <Center mt={5}>
                        <Text
                          fontSize={24}
                          fontFamily={"heading"}
                          as={"b"}
                          color={"#FFFFFF"}
                        >
                          {activeCustomer.customer_name}
                        </Text>
                      </Center>
                      <Center>
                        <Center mt={5}>
                          <Text
                            fontSize={16}
                            fontFamily={"body"}
                            color={"#D09635"}
                          >
                            {getMembershipStatus(
                              activeCustomer.total_transaction_month
                            )}
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
                      <Flex color={"#ECECEC"} mt={5} gap={5}>
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
                      )}
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
                        {activeCustomer.total_transaction}x
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
                        {activeCustomer.total_transaction_month}x
                      </Text>
                    </Center>
                  </Box>
                </Flex>
                <Center>
                  <Box w={364} h={62} mt={10}>
                    <Text color={"#F7DA94"} fontSize={16} fontFamily={"body"}>
                      The customer has made{" "}
                      {activeCustomer.total_transaction_month}x transactions
                      this month, you as an admin can give 25 points to users
                      from a multiple of 5x transactions made!
                    </Text>
                  </Box>
                </Center>
              </Box>
            )}
            {/* END DETAIL STOCK CASH OUT */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CashOutStock;
