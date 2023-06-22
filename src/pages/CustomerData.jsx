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
import {
  delete_customer,
  get_customer,
  update_customer,
} from "../config/redux/customer/customerThunk";
import { useCustomerSelector } from "../config/redux/customer/customerSelector";
import { useFormik } from "formik";
import * as Yup from "yup";

const CustomerData = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => (prevIsEditing === true ? false : true));
  };

  console.log(isEditing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_customer());
  }, [dispatch]);

  const handleBoxClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const customers = useCustomerSelector();
  const [selectedCustomer, setSelectedCustomer] = useState(customers);
  console.log(selectedCustomer.email);

  const formik = useFormik({
    initialValues: {
      email: selectedCustomer.email,
      phone: selectedCustomer.phone,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required").max(12, "Maximum 12 characters"),
    }),
    onSubmit: (values) => {
      dispatch(
        update_customer({
          no: selectedCustomer.no,
          email: values.email,
          phone: values.phone,
        })
      );

      formik.resetForm();
      setIsEditing(false);
      alert("Update Success");
      dispatch(get_customer());
    },
  });
  console.log(selectedCustomer.email);

  const handleDelete = (customerId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(delete_customer(customerId));
      setSelectedCustomer(customers);
    }
  };

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

  useEffect(() => {
    if (customers.length > 0) {
      const currentlySelectedCustomer = customers.find(
        (customer) => customer.no === selectedCustomer.no
      );
      if (currentlySelectedCustomer) {
        setSelectedCustomer(currentlySelectedCustomer);
      } else {
        setSelectedCustomer(customers[0]);
      }
    }
  }, [customers]);

  const [showActivities, setShowActivities] = useState(false);

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
            <Box maxHeight={820} overflowY="auto" p={4}>
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
          </Box>
          {/* END COSTUMER DATA */}

          {/* DETAIL CUSTOMER */}
          <Box flex={"1"} px={10} py={5}>
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
                h={"fit-content"}
                bg={"#262626"}
                borderRadius={12}
                boxShadow="0px 0px 15px rgba(0, 0, 0, 0.25)"
                mt={"52px"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Flex gap={4} px={10} justifyContent={"end"} pt={5}>
                  <button onClick={handleEditClick}>
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
                  <img src="./icons/customer/trash.svg" alt="" />
                </Flex>
                <form onSubmit={formik.handleSubmit}>
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
                            {getMembershipStatus(selectedCustomer.this_month)}
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
                        <Input
                          name="email"
                          defaultValue={selectedCustomer.email}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Flex>
                      {formik.touched.email && formik.errors.email && (
                        <Text color="red">{formik.errors.email}</Text>
                      )}
                      <Flex gap={3} mt={5}>
                        <img src="./icons/customer/phone.svg" alt="" />
                        <Input
                          name="phone"
                          type="number"
                          defaultValue={selectedCustomer.phone}
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Flex>
                      {formik.touched.phone && formik.errors.phone && (
                        <Text color="red">{formik.errors.phone}</Text>
                      )}
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
                        <Text>{selectedCustomer.date1}</Text>
                        <Text>{selectedCustomer.activity1}</Text>
                      </Flex>
                      <Flex color={"#ECECEC"} mt={5} gap={5}>
                        <Text>{selectedCustomer.date2}</Text>
                        <Text>{selectedCustomer.activity2}</Text>
                      </Flex>
                      <Flex color={"#ECECEC"} mt={5} gap={5}>
                        <Text>{selectedCustomer.date3}</Text>
                        <Text>{selectedCustomer.activity3}</Text>
                      </Flex>
                      {showActivities && (
                        <>
                          <Flex color={"#ECECEC"} mt={5} gap={5}>
                            <Text>{selectedCustomer.date4}</Text>
                            <Text>{selectedCustomer.activity4}</Text>
                          </Flex>
                          <Flex color={"#ECECEC"} mt={5} gap={5}>
                            <Text>{selectedCustomer.date5}</Text>
                            <Text>{selectedCustomer.activity5}</Text>
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
                          style={{ pointerEvents: "none" }}
                        >
                          {showActivities ? "See Less" : "See More"}
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
                          {selectedCustomer.this_month}x
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
                  <Flex justifyContent={"center"} pt={10} pb={5}>
                    <Button
                      type="submit"
                      variant="outline"
                      color={"white"}
                      w={400}
                      justifyContent={"center"}
                      colorScheme="white"
                      // onClick={handleDoneEdit}
                    >
                      Done
                    </Button>
                  </Flex>
                </form>
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
            <Box maxHeight={820} overflowY="auto" p={4}>
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
                  <button onClick={() => handleDelete(selectedCustomer.no)}>
                    <img src="./icons/customer/trash.svg" alt="" />
                  </button>
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
                          {getMembershipStatus(selectedCustomer.this_month)}
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
                      <Text>{selectedCustomer.date1}</Text>
                      <Text>{selectedCustomer.activity1}</Text>
                    </Flex>
                    <Flex color={"#ECECEC"} mt={5} gap={5}>
                      <Text>{selectedCustomer.date2}</Text>
                      <Text>{selectedCustomer.activity2}</Text>
                    </Flex>
                    <Flex color={"#ECECEC"} mt={5} gap={5}>
                      <Text>{selectedCustomer.date3}</Text>
                      <Text>{selectedCustomer.activity3}</Text>
                    </Flex>
                    {showActivities && (
                      <>
                        <Flex color={"#ECECEC"} mt={5} gap={5}>
                          <Text>{selectedCustomer.date4}</Text>
                          <Text>{selectedCustomer.activity4}</Text>
                        </Flex>
                        <Flex color={"#ECECEC"} mt={5} gap={5}>
                          <Text>{selectedCustomer.date5}</Text>
                          <Text>{selectedCustomer.activity5}</Text>
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
                        {selectedCustomer.this_month}x
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
