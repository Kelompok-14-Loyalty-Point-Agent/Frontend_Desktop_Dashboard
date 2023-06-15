import * as React from "react";
import { useFormik } from "formik";
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
import { useTokenSelector } from "../../src/config/redux/signin/SignInSelector";
import { getStockCredit } from "../config/redux/getStocks/getStocksThunk";
import { useStockCreditSelector } from "../config/redux/getStocks/getStocksSelector";
import { useGetProvidersStock } from "../config/redux/addStocks/addStocksSelector";

function AddStock() {
  const dispatch = useDispatch();
  const token = useTokenSelector();
  const stockCredit = useStockCreditSelector();
  const providers = useGetProvidersStock();

  console.log(token);

  React.useEffect(() => {
    dispatch(getStockProvider(token));
  }, [token]);

  React.useEffect(() => {
    dispatch(getStockCredit(token));
  }, [token]);

  const totalStockCredit = stockCredit?.data
    .filter((data) => data.type === "credit")
    .map((data) => data.stock)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toLocaleString("id-ID");

  const totalStockInternetData = stockCredit?.data
    .filter((data) => data.type === "data")
    .map((data) => data.stock)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toLocaleString("id-ID");

  const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const optionsCredit = [
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

  const currentDate = formatDate(new Date());

  const formikCredit = useFormik({
    initialValues: {
      user_id: 1,
      stock_id: 2,
      provider_name: "",
      input_stock: 0,
      payment_method: "",
    },
    onSubmit: (formData) => {
      alert(JSON.stringify(formData));
      dispatch(add_stock(formData));
      formikCredit.resetForm();
    },
  });

  const formikInternetData = useFormik({
    initialValues: {
      type: "credit",
      provider: null,
      stockData: null,
      paymentMethod: null,
    },
    onSubmit: (formData) => {
      alert(JSON.stringify(formData));
      console.log({ formData });
      formikInternetData.resetForm();
    },
  });

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
                          options={optionsCredit}
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
                            onChange={(e) => {
                              formikCredit.setFieldValue(
                                "input_stock",
                                parseInt(e.target.value)
                              );
                            }}
                            value={formikCredit.values.input_stock}
                            name="input_stock"
                            placeholder="Input stock credit  e.g. 1.000.000"
                            bgColor="white"
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
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
                <Flex gap={36} color="white" mt={72}>
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
                      {totalStockCredit}
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
                      {currentDate}
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
                          name="provider"
                          options={optionsCredit}
                        />
                      </FormControl>
                      <FormControl mb={8}>
                        <FormLabel color="white" fontSize={20}>
                          Input Stock Data
                        </FormLabel>
                        <Flex gap={5} alignItems="center" fontSize={24}>
                          <Input
                            placeholder="Input stock credit  e.g. 500"
                            bgColor="white"
                            h={14}
                            name="stockData"
                            value={formikInternetData.values.stockData}
                            onChange={formikInternetData.handleChange}
                          />
                          <Text color="white">GB</Text>
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
                                "paymentMethod",
                                value
                              )
                            }
                            value={formikInternetData.values.paymentMethod}
                            name="paymentMethod"
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
                <Flex gap={36} color="white" mt={72}>
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
                      {totalStockInternetData}
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
                      {currentDate}
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
