// import React from 'react'

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_customer } from "../config/redux/customer/customerThunk";
import { useCustomerSelector } from "../config/redux/customer/customerSelector";

const CustomerData = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => (prevIsEditing === true ? false : true));
  };

  const handleDoneEdit = () => {
    setIsEditing(false);
  };
  console.log(isEditing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_customer());
  }, []);

  const customers = useCustomerSelector();
  const [selectedCustomer, setSelectedCustomer] = useState(customers);

  const handleBoxClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  console.log(selectedCustomer);
  return (
    <div>
      {isEditing ? (
        <Flex h={"full"}>
          <Sidebar />

          {/* COSTUMER DATA */}
          <Box
            mx={"114px"}
            my={"80px"}
            w={570}
            opacity={"30%"}
            style={{ pointerEvents: "none" }}
          >
            <Text fontSize={32} as="b" fontFamily={"heading"}>
              Customer Data
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
              {customers
                .filter((customer) =>
                  customer.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((customer, index) => (
                  <Flex
                    w={"full"}
                    h={"fit-content"}
                    boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
                    mt={5}
                    borderRadius={6}
                    justifyContent={"center"}
                    p={4}
                    bg={selectedCustomer === customer ? "#262626" : "white"}
                    onClick={() => handleBoxClick(customer)}
                    key={index}
                  >
                    <Flex gap={10}>
                      <Image
                        src={customer.image}
                        alt=""
                        borderRadius="full"
                        boxSize="100px"
                      />
                      <Flex flexDirection={"column"} w={200}>
                        <Text
                          fontSize={26}
                          as="b"
                          fontFamily={"heading"}
                          color={
                            selectedCustomer === customer ? "#ECECEC" : "black"
                          }
                        >
                          {customer.name}
                        </Text>
                        <Text
                          color={
                            selectedCustomer === customer ? "#ECECEC" : "black"
                          }
                        >
                          Transation Made
                        </Text>
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
                        <Text
                          fontSize={24}
                          as="b"
                          color={
                            selectedCustomer === customer ? "#262626" : "white"
                          }
                        >
                          .
                        </Text>
                        <Text
                          color={
                            selectedCustomer === customer ? "#ECECEC" : "black"
                          }
                        >
                          Total tPoint
                        </Text>
                        <Flex gap={2}>
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
          {/* END COSTUMER DATA */}

          {/* DETAIL CUSTOMER */}
          <Box flex={"1"} px={10}>
            <Flex opacity={"30%"} style={{ pointerEvents: "none" }}>
              <InputGroup mt={10}>
                <InputLeftElement>
                  <img src="./icons/black/search.svg" alt="" />
                </InputLeftElement>
                <Input
                  boxShadow={"2px 3px 8px 2px rgba(0, 0, 0, 0.25)"}
                  borderRadius={"6px"}
                  placeholder="Search"
                />
              </InputGroup>
              <NavbarDashboard />
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
                  <button onClick={handleEditClick}>
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
                  <img src="./icons/customer/trash.svg" alt="" />
                </Flex>
                <Box>
                  <Center>
                    <Box>
                      <Center mt={2}>
                        <Image
                          src={selectedCustomer.image}
                          alt=""
                          borderRadius={"full"}
                          boxSize={"120px"}
                        />
                      </Center>
                      <Center mt={5}>
                        <Text
                          fontSize={24}
                          as={"b"}
                          color={"#ECECEC"}
                          fontFamily={"heading"}
                          opacity={"30%"}
                        >
                          {selectedCustomer.name}
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
                      <Text>{selectedCustomer.age} years old</Text>
                    </Flex>
                    <Flex gap={4} mt={5} opacity={"30%"}>
                      <Center>
                        <img src="./icons/customer/women-gen.svg" alt="" />
                      </Center>
                      <Text>{selectedCustomer.gender}</Text>
                    </Flex>
                    <Flex gap={3} mt={5} opacity={"30%"}>
                      <img src="./icons/customer/location.svg" alt="" />
                      <Text>{selectedCustomer.address}</Text>
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/email.svg" alt="" />
                      <Input defaultValue={selectedCustomer.email} />
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/phone.svg" alt="" />
                      <Input defaultValue={selectedCustomer.phone} />
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
              {customers
                .filter((customer) =>
                  customer.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((customer, index) => (
                  <Flex
                    w={"full"}
                    h={"fit-content"}
                    boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
                    mt={5}
                    borderRadius={6}
                    justifyContent={"center"}
                    p={4}
                    bg={selectedCustomer === customer ? "#262626" : "white"}
                    onClick={() => handleBoxClick(customer)}
                    key={index}
                    style={{ cursor: "pointer" }}
                  >
                    <Flex gap={10}>
                      <Image
                        src={customer.image}
                        alt=""
                        borderRadius="full"
                        boxSize="100px"
                      />
                      <Flex flexDirection={"column"} w={200}>
                        <Text
                          fontSize={26}
                          as="b"
                          fontFamily={"heading"}
                          color={
                            selectedCustomer === customer ? "#ECECEC" : "black"
                          }
                        >
                          {customer.name}
                        </Text>
                        <Text
                          color={
                            selectedCustomer === customer ? "#ECECEC" : "black"
                          }
                        >
                          Transation Made
                        </Text>
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
                        <Text
                          fontSize={24}
                          as="b"
                          color={
                            selectedCustomer === customer ? "#262626" : "white"
                          }
                        >
                          .
                        </Text>
                        <Text
                          color={
                            selectedCustomer === customer ? "#ECECEC" : "black"
                          }
                        >
                          Total tPoint
                        </Text>
                        <Flex gap={2}>
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
          {/* END COSTUMER DATA */}

          {/* DETAIL CUSTOMER */}
          <Box flex={"1"} pr={10}>
            <Flex>
              <InputGroup mt={10}>
                <InputLeftElement>
                  <img src="./icons/black/search.svg" alt="" />
                </InputLeftElement>
                <Input
                  value={searchValue}
                  onChange={handleSearch}
                  boxShadow={"2px 3px 8px 2px rgba(0, 0, 0, 0.25)"}
                  borderRadius={"6px"}
                  placeholder="Search"
                />
              </InputGroup>
              <NavbarDashboard />
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
                  <button onClick={handleEditClick}>
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
                  <img src="./icons/customer/trash.svg" alt="" />
                </Flex>
                <Box>
                  <Center>
                    <Box>
                      <Center mt={2}>
                        <Image
                          src={selectedCustomer.image}
                          alt=""
                          borderRadius="full"
                          boxSize="100px"
                        />
                      </Center>
                      <Center mt={5}>
                        <Text
                          fontSize={24}
                          as={"b"}
                          color={"#ECECEC"}
                          fontFamily={"heading"}
                        >
                          {selectedCustomer.name}
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
                      <Text>{selectedCustomer.age} years old</Text>
                    </Flex>
                    <Flex gap={4} mt={5}>
                      <Center>
                        <img src="./icons/customer/women-gen.svg" alt="" />
                      </Center>
                      <Text>{selectedCustomer.gender}</Text>
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/location.svg" alt="" />
                      <Text> {selectedCustomer.address} </Text>
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/email.svg" alt="" />
                      <Text>{selectedCustomer.email}</Text>
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/phone.svg" alt="" />
                      <Text>{selectedCustomer.phone}</Text>
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
                        {selectedCustomer.transaction_made}
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
                        {selectedCustomer.total_ttpoint}
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
                        {selectedCustomer.transaction_made}x
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
                        {selectedCustomer.voucher}x
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
