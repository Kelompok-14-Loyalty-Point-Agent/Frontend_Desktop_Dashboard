import * as React from "react";
import { isNaN, useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Img,
  SimpleGrid,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  RadioGroup,
  Radio,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import CustomSelect from "../components/CustomSelect";

import {
  add_stock,
  getStockProvider,
} from "../config/redux/addStocks/addStocksThunk";
import { getStockCredit } from "../config/redux/getStockCredit/getStockCreditThunk";
import { useStockCreditSelector } from "../config/redux/getStockCredit/getStockCreditSelector";
import { useAddStockCreditType } from "../config/redux/addStocks/addStocksSelector";
import { getStockInternetData } from "../config/redux/getStockInternetData/getStockInternetDataThunk";
import { useStockInternetDataSelector } from "../config/redux/getStockInternetData/getStockInternetDataSelector";
import { addStockInternetData } from "../config/redux/addStockInternetData/addStockInternetDataThunk";
import { useAddStockType } from "../config/redux/addStockInternetData/addStockInternetDataSelector";

function AddStock() {
  const dispatch = useDispatch();
  const addStockType = useAddStockType();
  const addStockCreditType = useAddStockCreditType();
  const stockCredit = useStockCreditSelector();
  const stockInternetData = useStockInternetDataSelector();

  const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  const formatNumber = (number) => number.toLocaleString("en-US");

  React.useEffect(() => {
    dispatch(getStockProvider());
  }, []);

  React.useEffect(() => {
    dispatch(getStockCredit());
  }, []);

  React.useEffect(() => {
    dispatch(getStockInternetData());
  }, []);

  React.useEffect(() => {
    if (addStockType) {
      dispatch(getStockInternetData());
    }
  }, [addStockType]);

  React.useEffect(() => {
    if (addStockCreditType === "addStock/add/fulfilled") {
      dispatch(getStockCredit());
    }
  }, [addStockCreditType]);

  const totalStockCredit = stockCredit?.data
    .filter((data) => data.type === "credit")
    .map((data) => parseInt(data.stock))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const lastUpdateStockCredit = stockCredit?.data
    .map((data) => new Date(data.last_top_up))
    .sort((a, b) => b - a)[0];

  const totalStockInternetData = stockInternetData?.data
    .filter((data) => data.type === "data")
    .map((data) => parseInt(data.stock))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const stockInternetLastTopup = stockInternetData?.data
    .filter((data) => data.type === "data")
    .map((data) => new Date(data.last_top_up))
    .sort((a, b) => b - a)[0];

  const optionsProvider = [
    {
      value: "Telkomsel",
      label: "Telkomsel",
      imageSrc: "../providerDummy/telkomsel.png",
    },
    {
      value: "XL",
      label: "XL",
      imageSrc: "../providerDummy/xl.png",
    },
    {
      value: "Smartfren",
      label: "Smartfren",
      imageSrc: "../providerDummy/smartfren.png",
    },
    {
      value: "Indosat",
      label: "Indosat",
      imageSrc: "../providerDummy/indosat.jpg",
    },
    {
      value: "Axis",
      label: "Axis",
      imageSrc: "../providerDummy/axis.png",
    },
    {
      value: "Tri / 3",
      label: "Tri / 3",
      imageSrc: "../providerDummy/tri.png",
    },
  ];

  const formikCredit = useFormik({
    initialValues: {
      user_id: 1,
      stock_id: 2,
      provider_name: "",
      input_stock: 0,
      payment_method: "",
      pay_amount: 0,
    },
    onSubmit: (formData) => {
      dispatch(add_stock(formData));
      formikCredit.resetForm();
    },
  });

  const formikInternetData = useFormik({
    initialValues: {
      user_id: 1,
      stock_id: 1,
      provider_name: "",
      input_stock: 0,
      payment_method: "",
      pay_amount: 0,
    },
    onSubmit: (formData) => {
      dispatch(addStockInternetData(formData));
      formikInternetData.resetForm();
    },
  });

  const handleChangeStockCredit = (e) => {
    const formattedValue = parseInt(e.target.value);

    formikCredit.setFieldValue("input_stock", formattedValue);

    const payAmountValue = parseFloat(formikCredit.values.pay_amount);

    const result = isNaN(payAmountValue)
      ? 0
      : formattedValue + formattedValue * 0.2;

    formikCredit.setFieldValue("pay_amount", result);
  };

  const handleChangeStockInternetData = (e) => {
    const formattedValue = parseFloat(e.target.value);

    formikInternetData.setFieldValue("input_stock", formattedValue);

    const payAmountValue = parseFloat(formikInternetData.values.pay_amount);

    const result = isNaN(payAmountValue) ? 0 : formattedValue * 10000;

    formikInternetData.setFieldValue("pay_amount", result);
  };

  return (
    <Flex height="100vh">
      <Sidebar />
      <Box mx={36} flex={"1"}>
        <Box my={16}>
          <Heading>Add Stock</Heading>
          <Tabs variant="unstyled" mt={10}>
            <TabList>
              <Tab>Credit</Tab>
              <Tab>Data</Tab>
            </TabList>
            <TabIndicator
              height={1}
              borderRadius={6}
              backgroundColor="teal.400"
            />
            <TabPanels>
              {/* # CREDIT TABPANEL REGION START */}
              <TabPanel
                bgColor="#262626"
                borderRadius="3xl"
                mt={8}
                py={9}
                px={12}
              >
                <form onSubmit={formikCredit.handleSubmit}>
                  <SimpleGrid columns={2} spacing={40}>
                    <Box>
                      <FormControl mb={8}>
                        <FormLabel color="white" fontSize={20}>
                          Choose Provider
                        </FormLabel>
                        <CustomSelect
                          options={optionsProvider}
                          formik={formikCredit}
                          name="provider_name"
                        />
                      </FormControl>
                      <FormControl mb={8}>
                        <FormLabel color="white" fontSize={20}>
                          Input Stock Credit
                        </FormLabel>
                        <NumberInput>
                          <NumberInputField
                            onChange={handleChangeStockCredit}
                            value={formikCredit.values.input_stock}
                            name="input_stock"
                            placeholder="Input stock credit  e.g. 1.000.000"
                            bgColor="white"
                            height="54px"
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>
                      <FormControl mt={24} mb={8}>
                        <Flex alignItems="center" justify="space-between">
                          <Heading fontSize={22} fontWeight={500} color="white">
                            Pay Amount :
                          </Heading>
                          <Flex alignItems="center">
                            <Heading
                              fontSize={22}
                              color="teal.300"
                              fontWeight={500}
                            >
                              Rp.
                            </Heading>
                            <Input
                              onChange={formikCredit.handleChange}
                              value={formikCredit.values.pay_amount}
                              name="pay_amount"
                              borderColor="transparent"
                              color="white"
                              maxWidth="360px"
                              fontSize={22}
                              _hover={{ borderColor: "transparent" }}
                            />
                          </Flex>
                        </Flex>
                      </FormControl>
                      <Button
                        type="submit"
                        bgColor="#BE4057"
                        fontFamily="poppins"
                        color="white"
                        _hover={{ bgColor: "#931136" }}
                        fontWeight={400}
                        px={16}
                      >
                        Pay
                      </Button>
                    </Box>
                    <Box>
                      <Heading
                        color="white"
                        fontFamily="body"
                        fontWeight={400}
                        fontSize={20}
                        letterSpacing={1}
                        mb={5}
                      >
                        Payment Method
                      </Heading>
                      <Flex>
                        <FormControl color="white" width={240}>
                          <RadioGroup
                            onChange={(value) =>
                              formikCredit.setFieldValue(
                                "payment_method",
                                value
                              )
                            }
                            value={formikCredit.values.payment_method}
                            name="payment_method"
                          >
                            <Stack direction="row" gap={14}>
                              <Box>
                                <FormLabel mb={5}>Transfer Bank</FormLabel>
                                <Stack direction="column" gap={2}>
                                  <Radio
                                    value="bri"
                                    colorScheme="facebook"
                                    bgColor="white"
                                  >
                                    <Img
                                      src="../paymentLogo/BRI.png"
                                      alt="BRI.png"
                                    />
                                  </Radio>
                                  <Radio
                                    value="bni"
                                    bgColor="white"
                                    colorScheme="facebook"
                                  >
                                    <Img
                                      src="../paymentLogo/BNI.png"
                                      alt="BNI.png"
                                    />
                                  </Radio>
                                </Stack>
                              </Box>
                              <Box>
                                <FormLabel color="white" mb={5}>
                                  E-Wallet
                                </FormLabel>
                                <Radio
                                  color="white"
                                  bgColor="white"
                                  value="GoPay"
                                >
                                  <Img src="../paymentLogo/gopay.png" />
                                </Radio>
                              </Box>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </Flex>
                    </Box>
                  </SimpleGrid>
                </form>
                <Flex gap={36} color="white" mt={48}>
                  <Flex gap={7}>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="teal.300"
                      fontWeight={500}
                    >
                      Stock Credit :
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="white"
                      fontWeight={500}
                    >
                      {formatNumber(totalStockCredit)}
                    </Text>
                  </Flex>
                  <Flex gap={7}>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="teal.300"
                      fontWeight={500}
                    >
                      Last Top Up :
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="white"
                      fontWeight={500}
                    >
                      {formatDate(lastUpdateStockCredit)}
                    </Text>
                  </Flex>
                </Flex>
              </TabPanel>
              {/* # CREDIT TABPANEL REGION END */}
              {/* # DATA INTERNET TABPANEL REGION START */}
              <TabPanel
                bgColor="#262626"
                borderRadius="3xl"
                mt={8}
                py={9}
                px={12}
              >
                <form onSubmit={formikInternetData.handleSubmit}>
                  <SimpleGrid columns={2} spacing={40}>
                    <Box>
                      <FormControl mb={8}>
                        <FormLabel color="white" fontSize={20}>
                          Choose Provider
                        </FormLabel>
                        <CustomSelect
                          formik={formikInternetData}
                          name="provider_name"
                          options={optionsProvider}
                        />
                      </FormControl>
                      <FormControl mb={8}>
                        <FormLabel color="white" fontSize={20}>
                          Input Stock Data
                        </FormLabel>
                        <Flex
                          gap={5}
                          alignItems="center"
                          justify="space-between"
                          fontSize={24}
                        >
                          <NumberInput>
                            <NumberInputField
                              onChange={handleChangeStockInternetData}
                              value={formikInternetData.values.input_stock}
                              name="input_stock"
                              placeholder="Input stock credit  e.g. 1.000.000"
                              bgColor="white"
                              width={470}
                              height="54px"
                            />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                          <Text color="white">GB</Text>
                        </Flex>
                      </FormControl>
                      <FormControl mt={24} mb={8}>
                        <Flex alignItems="center" justify="space-between">
                          <Heading fontSize={22} fontWeight={500} color="white">
                            Pay Amount :
                          </Heading>
                          <Flex alignItems="center">
                            <Heading
                              fontSize={22}
                              color="teal.300"
                              fontWeight={500}
                            >
                              Rp.
                            </Heading>
                            <Input
                              onChange={formikInternetData.handleChange}
                              value={formikInternetData.values.pay_amount}
                              name="pay_amount"
                              borderColor="transparent"
                              color="white"
                              maxWidth="360px"
                              fontSize={22}
                              _hover={{ borderColor: "transparent" }}
                            />
                          </Flex>
                        </Flex>
                      </FormControl>
                      <Button
                        type="submit"
                        bgColor="#BE4057"
                        fontFamily="poppins"
                        color="white"
                        _hover={{ bgColor: "#931136" }}
                        fontWeight={400}
                        px={16}
                      >
                        Pay
                      </Button>
                    </Box>
                    <Box>
                      <Heading
                        color="white"
                        fontFamily="body"
                        fontWeight={400}
                        fontSize={20}
                        letterSpacing={1}
                        mb={5}
                      >
                        Payment Method
                      </Heading>
                      <Flex>
                        <FormControl color="white" width={240}>
                          <RadioGroup
                            onChange={(value) =>
                              formikInternetData.setFieldValue(
                                "payment_method",
                                value
                              )
                            }
                            value={formikInternetData.values.payment_method}
                            name="payment_method"
                          >
                            <Stack direction="row" gap={14}>
                              <Box>
                                <FormLabel mb={5}>Transfer Bank</FormLabel>
                                <Stack direction="column" gap={2}>
                                  <Radio
                                    value="bri"
                                    colorScheme="facebook"
                                    bgColor="white"
                                  >
                                    <Img
                                      src="../paymentLogo/BRI.png"
                                      alt="BRI.png"
                                    />
                                  </Radio>
                                  <Radio
                                    value="bni"
                                    bgColor="white"
                                    colorScheme="facebook"
                                  >
                                    <Img
                                      src="../paymentLogo/BNI.png"
                                      alt="BNI.png"
                                    />
                                  </Radio>
                                </Stack>
                              </Box>
                              <Box>
                                <FormLabel color="white" mb={5}>
                                  E-Wallet
                                </FormLabel>
                                <Radio
                                  color="white"
                                  bgColor="white"
                                  value="gopay"
                                >
                                  <Img src="../paymentLogo/gopay.png" />
                                </Radio>
                              </Box>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </Flex>
                    </Box>
                  </SimpleGrid>
                </form>
                <Flex gap={36} color="white" mt={48}>
                  <Flex gap={7}>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="teal.300"
                      fontWeight={500}
                    >
                      Stock Data :
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="white"
                      fontWeight={500}
                    >
                      {formatNumber(totalStockInternetData)} GB
                    </Text>
                  </Flex>
                  <Flex gap={7}>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="teal.300"
                      fontWeight={500}
                    >
                      Last Top Up :
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="white"
                      fontWeight={500}
                    >
                      {formatDate(stockInternetLastTopup)}
                    </Text>
                  </Flex>
                </Flex>
              </TabPanel>
              {/* # DATA INTERNET TABPANEL REGION END */}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Flex>
  );
}

export default AddStock;
