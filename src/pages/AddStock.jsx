import * as React from "react";
import { useFormik } from "formik";
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
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import CustomSelect from "../components/CustomSelect";
import {
  add_stock,
  add_stock_axios,
} from "../config/redux/addStocks/addStocksThunk";
import { useDispatch } from "react-redux";
import axios from "axios";

function AddStock() {
  const dispatch = useDispatch();

  const fetchStockCredit = async () => {
    try {
      const res = await axios.get("http://13.229.84.45/stocks/2", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjg2NTc4NDE4fQ.V9hwFOwOIae92WzxeBJcyn7Oz1oEvysYeMMxtDaa_XA",
        },
      });
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const stockCredit = fetchStockCredit();

  console.log(stockCredit.then((res) => console.log(res)));

  const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const optionsCredit = [
    {
      value: 1,
      label: "Telkomsel",
      imageSrc: "../providerDummy/telkomsel.png",
    },
    {
      value: "axis",
      label: "Axis",
      imageSrc: "../providerDummy/axis.png",
    },
    {
      value: "smartfren",
      label: "Smartfren",
      imageSrc: "../providerDummy/smartfren.png",
    },
    {
      value: "tri",
      label: "3",
      imageSrc: "../providerDummy/tri.png",
    },
    {
      value: 2,
      label: "XL",
      imageSrc: "../providerDummy/xl.png",
    },
  ];

  const currentDate = formatDate(new Date());

  const formikCredit = useFormik({
    initialValues: {
      type: "credit",
      provider: null,
      stockCredit: null,
      // paymentMethod: null,
    },
    onSubmit: (formData) => {
      // alert(JSON.stringify(formData));
      // dispatch(add_stock(formData));
      console.log({ formData });
      add_stock_axios(formData);
      formikCredit.resetForm();
    },
  });

  const formikInternetData = useFormik({
    initialValues: {
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
                          name="provider"
                        />
                      </FormControl>
                      <FormControl mb={8}>
                        <FormLabel color="white" fontSize={20}>
                          Input Stock Credit
                        </FormLabel>
                        <Input
                          onChange={formikCredit.handleChange}
                          value={formikCredit.values.stockCredit}
                          name="stockCredit"
                          placeholder="Input stock credit  e.g. 1.000.000"
                          bgColor="white"
                          h={14}
                        />
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
                              formikCredit.setFieldValue("paymentMethod", value)
                            }
                            value={formikCredit.values.paymentMethod}
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
                      Stock Credit :
                    </Text>
                    <Text
                      fontFamily="heading"
                      fontSize={22}
                      color="white"
                      fontWeight={500}
                    >
                      1.000.000
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
                      500 GB
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
