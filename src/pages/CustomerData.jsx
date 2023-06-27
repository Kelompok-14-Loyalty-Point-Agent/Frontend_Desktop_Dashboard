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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUpdateCustomerType } from "../config/redux/updateCustomer/updateCustomerSelector";
import { updateCustomer } from "../config/redux/updateCustomer/updateCustomerThunk";
import { useDeleteCustomerType } from "../config/redux/deleteCustomer/deleteCustomerSelector";
import { deleteCustomer } from "../config/redux/deleteCustomer/deleteCustomerThunk";
import axios from "axios";

const CustomerData = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const updateCustomerDetailType = useUpdateCustomerType();
  const deleteCustomerType = useDeleteCustomerType();
  const [searchValue, setSearchValue] = useState("");
  const [showActivities, setShowActivities] = useState(false);
  const customers = useCustomerSelector().data;
  const [transactionData, setTransactionData] = useState([]);
  const [displayedActivities, setDisplayedActivities] = useState(3);
  const moreActivities = displayedActivities + 2;
  const fewerActivities = 3;

  useEffect(() => {
    dispatch(get_customer());
    if (
      updateCustomerDetailType === "updateCustomerDetail/updateData/fulfilled"
    ) {
      dispatch(get_customer());
    }
    if (deleteCustomerType === "deleteCustomerData/deleteCustomer/fulfilled") {
      dispatch(get_customer());
    }
  }, [updateCustomerDetailType, deleteCustomerType]);

  useEffect(() => {
    if (customers?.length > 0) {
      const currentlySelectedCustomer = customers.find(
        (customer) => customer.id === selectedCustomer.id
      );
      if (currentlySelectedCustomer) {
        setSelectedCustomer(currentlySelectedCustomer);
      } else {
        setSelectedCustomer(customers[0]);
      }
    }
  }, [customers]);

  const [selectedCustomer, setSelectedCustomer] = useState(
    customers?.length > 0
      ? customers[0]
      : {
          id: 0,
          name: "Dummy Customer",
          profile: {
            Phone: "123456789",
            Member: "bronze",
            Age: 30,
            Address: "123 Main Street",
            TransactionsMade: 10,
            Point: 100,
            MonthlyTransaction: 5,
            TotalRedeem: 50,
          },
        }
  );

  useEffect(() => {
    if (selectedCustomer) {
      axios
        .get(
          `https://3.0.59.152.nip.io/transactions/users/recent/${selectedCustomer.id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjg5MzY2NDQ5fQ.JPn0Gyxs1nAwgcDya0SmDJasmRbxdtQVeTIDGUJTjJU",
            },
          }
        )
        .then((response) => {
          setTransactionData(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCustomer]);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => (prevIsEditing === true ? false : true));
  };

  const handleBoxClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleDelete = (customerId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteCustomer(customerId));
    }
  };

  const formik = useFormik({
    initialValues: {
      email: selectedCustomer.email,
      phone: selectedCustomer.Phone,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      phone: Yup.string()
        .required("Required")
        .max(13, "Maximum 13 characters")
        .matches(/^[0-9]+$/, "Invalid phone number")
        .min(12, "Minimum 12 characters"),
    }),
    onSubmit: (values) => {
      dispatch(
        updateCustomer({
          id: selectedCustomer.id,
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
              {customers?.length ? (
                customers
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
                        {customer?.profile?.URL ? (
                          <Image
                            src={`https://3.0.59.152.nip.io/images/url/${customer?.profile?.URL}`}
                            alt=""
                            borderRadius="50%"
                            width={"102px"}
                            height={"102px"}
                          />
                        ) : (
                          <Image
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt=""
                            borderRadius="50%"
                            width={"102px"}
                            height={"102px"}
                          />
                        )}
                        <Flex flexDirection={"column"} w={200}>
                          <Text
                            fontSize={26}
                            as="b"
                            fontFamily={"heading"}
                            color={
                              selectedCustomer === customer
                                ? "#ECECEC"
                                : "black"
                            }
                          >
                            {customer?.name}
                          </Text>
                          <Text
                            color={
                              selectedCustomer === customer
                                ? "#ECECEC"
                                : "black"
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
                            {customer?.profile?.TransactionMade}x
                          </Text>
                        </Flex>
                        <Flex flexDirection={"column"}>
                          <Text
                            fontSize={24}
                            as="b"
                            color={
                              selectedCustomer === customer
                                ? "#262626"
                                : "white"
                            }
                          >
                            .
                          </Text>
                          <Text
                            color={
                              selectedCustomer === customer
                                ? "#ECECEC"
                                : "black"
                            }
                          >
                            Total tPoint
                          </Text>
                          <Flex gap={2}>
                            <img src="./icons/dashboard/coin1.svg" alt="" />
                            <Text
                              fontSize={
                                String(customer?.profile?.Point).length > 5
                                  ? 16
                                  : 24
                              }
                              as={"b"}
                              color={"#2DB5AB"}
                              fontFamily={"heading"}
                            >
                              {customer?.profile?.Point}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))
              ) : (
                <Center>
                  <Text color={"red.400"} fontSize={50} alignItems={"center"}>
                    Data belum ada
                  </Text>
                </Center>
              )}
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
                  id="search_customer"
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
                  <button onClick={handleEditClick} id="edit_customer">
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
                  <img src="./icons/customer/trash.svg" alt="" />
                </Flex>
                <form onSubmit={formik.handleSubmit}>
                  <Box>
                    <Center>
                      <Box>
                        <Center mt={2}>
                          {selectedCustomer?.profile?.URL ? (
                            <Image
                              src={selectedCustomer?.profile?.URL}
                              alt=""
                              borderRadius="50%"
                              width={"102px"}
                              height={"102px"}
                            />
                          ) : (
                            <Image
                              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                              alt=""
                              borderRadius="50%"
                              width={"102px"}
                              height={"102px"}
                            />
                          )}
                        </Center>
                        <Center mt={5}>
                          <Text
                            fontSize={24}
                            as={"b"}
                            color={"#ECECEC"}
                            fontFamily={"heading"}
                            opacity={"30%"}
                          >
                            {selectedCustomer?.name}
                          </Text>
                        </Center>
                        <Center>
                          <Text fontSize={16} color={"#D09635"}>
                            {selectedCustomer?.profile?.Member}
                          </Text>
                        </Center>
                      </Box>
                    </Center>
                  </Box>
                  <Flex justifyContent={"center"} gap={10} mt={10}>
                    <Box color={"#ECECEC"}>
                      <Flex gap={3} opacity={"30%"}>
                        <img src="./icons/customer/calender.svg" alt="" />
                        <Text>{selectedCustomer?.profile?.Age} years old</Text>
                      </Flex>
                      {selectedCustomer?.profile?.Gender === "woman" ||
                      selectedCustomer?.profile?.Gender === "man" ? (
                        <Flex gap={4} mt={5} opacity={"30%"}>
                          <Center>
                            {selectedCustomer?.profile?.Gender === "woman" ? (
                              <Image
                                src="./icons/customer/women-gen.svg"
                                boxSize={"20px"}
                                alt=""
                              />
                            ) : (
                              <Image
                                src="./icons/customer/men-gen.svg"
                                boxSize={"20px"}
                                alt=""
                              />
                            )}
                          </Center>
                          <Text>{selectedCustomer?.profile?.Gender}</Text>
                        </Flex>
                      ) : null}

                      <Flex gap={3} mt={5} opacity={"30%"}>
                        <img src="./icons/customer/location.svg" alt="" />
                        {selectedCustomer?.profile?.Address ? (
                          <Text>{selectedCustomer?.profile?.Address}</Text>
                        ) : (
                          <Text>-</Text>
                        )}
                      </Flex>
                      <Flex gap={3} mt={5}>
                        <img src="./icons/customer/email.svg" alt="" />
                        <Input
                          id="email_customerData"
                          name="email"
                          defaultValue={selectedCustomer?.email}
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
                          id="email_customerData"
                          name="phone"
                          defaultValue={selectedCustomer?.profile.Phone}
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
                      {transactionData?.length > 0 ? (
                        transactionData
                          .slice(0, displayedActivities)
                          .map((transaction) => (
                            <Flex
                              key={transaction.id}
                              color={"#ECECEC"}
                              mt={1}
                              gap={5}
                            >
                              <Text fontFamily={"body"}>
                                {transaction.created_at.substring(0, 10)}
                              </Text>
                              <Text fontFamily={"body"}>
                                {transaction.description}
                              </Text>
                            </Flex>
                          ))
                      ) : (
                        <Flex color={"#ECECEC"} mt={1}>
                          <Text fontFamily={"body"}>
                            No activities recently
                          </Text>
                        </Flex>
                      )}
                      {transactionData.length > 3 && (
                        <Center mt={5}>
                          <Text
                            fontSize={12}
                            fontFamily={"body"}
                            color={"#57DAC5"}
                            cursor="pointer"
                            id="showIndicator"
                            onClick={() => {
                              const newDisplayedActivities = showActivities
                                ? fewerActivities
                                : moreActivities;
                              setDisplayedActivities(newDisplayedActivities);
                              setShowActivities(!showActivities);
                            }}
                          >
                            {showActivities ? "See Less" : "See More"}
                          </Text>
                        </Center>
                      )}
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
                          {selectedCustomer?.profile?.TransactionMade}x
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
                          {selectedCustomer?.profile?.Point}
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
                          {selectedCustomer?.profile?.MonthlyTransaction}x
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
                          {selectedCustomer?.profile?.TotalRedeem}x
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
                      id="done_edit"
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
              {customers?.length ? (
                customers
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
                        {customer.profile.URL ? (
                          <Image
                            src={`https://3.0.59.152.nip.io/images/url/${customer.profile.URL}`}
                            alt=""
                            borderRadius="50%"
                            width={"102px"}
                            height={"102px"}
                          />
                        ) : (
                          <Image
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt=""
                            borderRadius="50%"
                            width={"102px"}
                            height={"102px"}
                          />
                        )}
                        <Flex flexDirection={"column"} w={200}>
                          <Text
                            fontSize={26}
                            as="b"
                            fontFamily={"heading"}
                            color={
                              selectedCustomer === customer
                                ? "#ECECEC"
                                : "black"
                            }
                          >
                            {customer?.name}
                          </Text>
                          <Text
                            color={
                              selectedCustomer === customer
                                ? "#ECECEC"
                                : "black"
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
                            {customer?.profile?.TransactionMade}x
                          </Text>
                        </Flex>
                        <Flex flexDirection={"column"}>
                          <Text
                            fontSize={24}
                            as="b"
                            color={
                              selectedCustomer === customer
                                ? "#262626"
                                : "white"
                            }
                          >
                            .
                          </Text>
                          <Text
                            color={
                              selectedCustomer === customer
                                ? "#ECECEC"
                                : "black"
                            }
                          >
                            Total tPoint
                          </Text>
                          <Flex gap={2}>
                            <img src="./icons/dashboard/coin1.svg" alt="" />
                            <Text
                              fontSize={
                                String(customer?.profile?.Point).length > 5
                                  ? 15
                                  : 24
                              }
                              as={"b"}
                              color={"#2DB5AB"}
                              fontFamily={"heading"}
                            >
                              {customer?.profile?.Point}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))
              ) : (
                <Center>
                  <Text color={"red.400"} fontSize={50} alignItems={"center"}>
                    Data belum ada
                  </Text>
                </Center>
              )}
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
                  id="search_customerData"
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
                  <button onClick={handleEditClick} id="edit_customerData">
                    <img src="./icons/customer/edit.svg" alt="" />
                  </button>
                  <button
                    onClick={() => handleDelete(selectedCustomer.id)}
                    id="delete_customerData"
                  >
                    <img src="./icons/customer/trash.svg" alt="" />
                  </button>
                </Flex>
                <Box>
                  <Center>
                    <Box>
                      <Center mt={2}>
                        {selectedCustomer?.profile?.URL ? (
                          <Image
                            src={`https://3.0.59.152.nip.io/images/url/${selectedCustomer.profile.URL}`}
                            alt=""
                            borderRadius="50%"
                            width={"102px"}
                            height={"102px"}
                          />
                        ) : (
                          <Image
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt=""
                            borderRadius="50%"
                            width={"102px"}
                            height={"102px"}
                          />
                        )}
                      </Center>
                      <Center mt={5}>
                        <Text
                          fontSize={24}
                          as={"b"}
                          color={"#ECECEC"}
                          fontFamily={"heading"}
                        >
                          {selectedCustomer?.name}
                        </Text>
                      </Center>
                      <Center>
                        <Text fontSize={16} color={"#D09635"}>
                          {selectedCustomer?.profile?.Member}
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </Box>
                <Flex justifyContent={"center"} gap={10} mt={10}>
                  <Box color={"#ECECEC"}>
                    <Flex gap={3}>
                      <img src="./icons/customer/calender.svg" alt="" />
                      <Text>{selectedCustomer.profile.Age} years old</Text>
                    </Flex>
                    {selectedCustomer?.profile?.Gender === "woman" ||
                    selectedCustomer?.profile?.Gender === "man" ? (
                      <Flex gap={4} mt={5}>
                        <Center>
                          {selectedCustomer?.profile?.Gender === "woman" ? (
                            <Image
                              src="./icons/customer/women-gen.svg"
                              boxSize={"20px"}
                              alt=""
                            />
                          ) : (
                            <Image
                              src="./icons/customer/men-gen.svg"
                              boxSize={"20px"}
                              alt=""
                            />
                          )}
                        </Center>
                        <Text>{selectedCustomer?.profile?.Gender}</Text>
                      </Flex>
                    ) : null}
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/location.svg" alt="" />
                      {selectedCustomer?.profile?.Address ? (
                        <Text>{selectedCustomer?.profile?.Address}</Text>
                      ) : (
                        <Text>-</Text>
                      )}
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/email.svg" alt="" />
                      <Text>{selectedCustomer?.email}</Text>
                    </Flex>
                    <Flex gap={3} mt={5}>
                      <img src="./icons/customer/phone.svg" alt="" />
                      {selectedCustomer?.profile?.Phone ? (
                        <Text>{selectedCustomer?.profile?.Phone}</Text>
                      ) : (
                        <Text>-</Text>
                      )}
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
                    {transactionData?.length > 0 ? (
                      transactionData
                        .slice(0, displayedActivities)
                        .map((transaction) => (
                          <Flex
                            key={transaction.id}
                            color={"#ECECEC"}
                            mt={1}
                            gap={5}
                          >
                            <Text fontFamily={"body"}>
                              {transaction.created_at.substring(0, 10)}
                            </Text>
                            <Text fontFamily={"body"}>
                              {transaction.description}
                            </Text>
                          </Flex>
                        ))
                    ) : (
                      <Flex color={"#ECECEC"} mt={1}>
                        <Text fontFamily={"body"}>No activities recently</Text>
                      </Flex>
                    )}
                    {transactionData.length > 3 && (
                      <Center mt={5}>
                        <Text
                          fontSize={12}
                          fontFamily={"body"}
                          color={"#57DAC5"}
                          cursor="pointer"
                          id="showIndicator"
                          onClick={() => {
                            const newDisplayedActivities = showActivities
                              ? fewerActivities
                              : moreActivities;
                            setDisplayedActivities(newDisplayedActivities);
                            setShowActivities(!showActivities);
                          }}
                        >
                          {showActivities ? "See Less" : "See More"}
                        </Text>
                      </Center>
                    )}
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
                        {selectedCustomer?.profile?.TransactionMade}
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
                        {selectedCustomer?.profile?.Point}
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
                        {selectedCustomer?.profile?.MonthlyTransaction}x
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
                        {selectedCustomer?.profile?.TotalRedeem}x
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
