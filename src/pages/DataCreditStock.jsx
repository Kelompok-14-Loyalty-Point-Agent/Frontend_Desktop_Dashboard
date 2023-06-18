import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Img,
  Input,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  // Center,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useStockDetailSelector } from "../config/redux/getStockDetail/getStockDetailSelector";
import { useDispatch } from "react-redux";
import { getStockDetail } from "../config/redux/getStockDetail/getStockDetailThunk";
import CustomSelectEvenOdd from "../components/CustomSelectEvenOdd";

const DataCreditStock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stockDetail = useStockDetailSelector();
  const [isAddCreditAmount, setIsAddCreditAmount] = useState(false);
  const [isAddInternetDatasAmount, setIsAddInternetDatasAmount] =
    useState(false);
  const stockDetailDatas = stockDetail?.data;

  useEffect(() => {
    dispatch(getStockDetail());
  }, []);

  const optionsProvider = [
    {
      id: 1,
      stock_id_credit: 2,
      stock_id_data: 1,
      label: "Telkomsel",
      imageSrc: "../providerDummy/telkomsel.png",
    },
    {
      id: 2,
      stock_id_credit: 4,
      stock_id_data: 3,
      label: "XL",
      imageSrc: "../providerDummy/xl.png",
    },
    {
      id: 3,
      stock_id_credit: 6,
      stock_id_data: 5,
      label: "Smartfren",
      imageSrc: "../providerDummy/smartfren.png",
    },
    {
      id: 4,
      stock_id_credit: 8,
      stock_id_data: 7,
      label: "Indosat",
      imageSrc: "../providerDummy/indosat.jpg",
    },
    {
      id: 5,
      stock_id_credit: 10,
      stock_id_data: 9,
      label: "Axis",
      imageSrc: "../providerDummy/axis.png",
    },
    {
      id: 6,
      stock_id_credit: 12,
      stock_id_data: 11,
      label: "Tri / 3",
      imageSrc: "../providerDummy/tri.png",
    },
  ];

  const formikAddStockCredit = useFormik({
    initialValues: {
      stock_id: 0,
      id_data: 0,
      id_credit: 0,
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  const handleStatusAddCredit = () => setIsAddCreditAmount(!isAddCreditAmount);
  const handleStatusAddInternet = () =>
    setIsAddInternetDatasAmount(!isAddInternetDatasAmount);

  const filteredData = stockDetailDatas.filter(
    (data) => data.stock_id === formikAddStockCredit.values.id_data
  );

  const filteredCredit = stockDetailDatas.filter(
    (data) => data.stock_id === formikAddStockCredit.values.id_credit
  );

  return (
    <Flex height="100vh">
      <Sidebar />
      <Box px={10} flex={"1"}>
        <NavbarDashboard />
        <Box mx={14} mt={7}>
          <Flex gap={10}>
            <Text fontSize={32} fontFamily="heading" fontWeight={700} mb={10}>
              Stock Pulsa / Data
            </Text>
            <CustomSelectEvenOdd
              options={optionsProvider}
              formik={formikAddStockCredit}
              name="stock_id"
            />
          </Flex>
          <Tabs variant="unstyled">
            <TabList>
              <Tab fontWeight={700} fontFamily="heading">
                Credit
              </Tab>
              <Tab fontWeight={700} fontFamily="heading">
                Data
              </Tab>
            </TabList>
            <TabIndicator
              height={1}
              borderRadius={6}
              backgroundColor="teal.400"
            />
            <TabPanels>
              <TabPanel bg="black" color="white" mt={5} borderRadius={12} p={6}>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead bgColor="teal">
                      <Tr>
                        <Th textAlign="center" color="white">
                          No
                        </Th>
                        <Th textAlign="center" color="white">
                          Credit
                        </Th>
                        <Th textAlign="center" color="white">
                          Price
                        </Th>
                        <Th textAlign="center" color="white">
                          Quantity
                        </Th>
                        <Th textAlign="center" color="white">
                          Action
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody fontWeight={700} fontFamily="heading">
                      {filteredCredit?.map((data, idx) => (
                        <Tr key={data.id}>
                          <Td textAlign="center">{idx + 1}</Td>
                          <Td textAlign="center">{data.stock}</Td>
                          <Td textAlign="center">{data.price}</Td>
                          <Td textAlign="center">{data.quantity}</Td>
                        </Tr>
                      ))}
                      {isAddCreditAmount ? (
                        <Tr>
                          <Td>
                            <Center>{stockDetailDatas.length + 1}</Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                placeholder="Input credit"
                                width={120}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                placeholder="Input price"
                                width={120}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                placeholder="Input quantity"
                                width={140}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Flex justify="center" gap={5} flexDir="column">
                              <Button colorScheme="green">Save</Button>
                              <Button
                                colorScheme="red"
                                onClick={handleStatusAddCredit}
                              >
                                Cancel
                              </Button>
                            </Flex>
                          </Td>
                        </Tr>
                      ) : null}
                      <Tr>
                        <Td textAlign="center">
                          <IconButton
                            onClick={handleStatusAddCredit}
                            width="fit-content"
                            colorScheme="blackAlpha"
                            icon={
                              <Img
                                src="../icons/white/addcircle.svg"
                                width="30px"
                              />
                            }
                          />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel bg="black" color="white" mt={5} borderRadius={12} p={6}>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr bgColor="teal">
                        <Th color="white" textAlign="center">
                          Provider
                        </Th>
                        <Th color="white" textAlign="center">
                          Stock Data
                        </Th>
                        <Th color="white" textAlign="center">
                          Price
                        </Th>
                        <Th color="white" textAlign="center">
                          Quantity
                        </Th>
                        <Th color="white" textAlign="center">
                          Action
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody fontWeight={700} fontFamily="heading">
                      {filteredData?.map((data, idx) => (
                        <Tr key={data.id}>
                          <Td textAlign="center">{idx + 1}</Td>
                          <Td textAlign="center">{data.stock}</Td>
                          <Td textAlign="center">{data.price}</Td>
                          <Td textAlign="center">{data.quantity}</Td>
                        </Tr>
                      ))}
                      {isAddInternetDatasAmount ? (
                        <Tr>
                          <Td>
                            <Center>{stockDetailDatas.length + 1}</Center>
                          </Td>
                          <form>
                            <Td>
                              <Center>
                                <Input
                                  placeholder="Input credit"
                                  width={120}
                                  bgColor="white"
                                  _placeholder={{ textAlign: "center" }}
                                />
                              </Center>
                            </Td>
                            <Td>
                              <Center>
                                <Input
                                  placeholder="Input price"
                                  width={120}
                                  bgColor="white"
                                  _placeholder={{ textAlign: "center" }}
                                />
                              </Center>
                            </Td>
                            <Td>
                              <Center>
                                <Input
                                  placeholder="Input quantity"
                                  width={140}
                                  bgColor="white"
                                  _placeholder={{ textAlign: "center" }}
                                />
                              </Center>
                            </Td>
                            <Td>
                              <Flex justify="center" gap={5} flexDir="column">
                                <Button colorScheme="green">Save</Button>
                                <Button
                                  colorScheme="red"
                                  onClick={handleStatusAddInternet}
                                >
                                  Cancel
                                </Button>
                              </Flex>
                            </Td>
                          </form>
                        </Tr>
                      ) : null}
                      <Tr>
                        <Td textAlign="center">
                          <IconButton
                            onClick={handleStatusAddInternet}
                            width="fit-content"
                            colorScheme="blackAlpha"
                            icon={
                              <Img
                                src="../icons/white/addcircle.svg"
                                width="30px"
                              />
                            }
                          />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Flex justify="space-between" alignItems="center">
            <ButtonGroup>
              <Button fontSize={24} colorScheme="teal" height={50}>
                1
              </Button>
              <Button
                fontSize={24}
                colorScheme="teal"
                height={50}
                variant="outline"
              >
                2
              </Button>
            </ButtonGroup>
            <Button
              onClick={() => navigate("/stocks/add")}
              mt={10}
              fontFamily="heading"
              fontSize={24}
              colorScheme="teal"
              height="max"
              pl={10}
              pr={12}
              gap={3}
              py={4}
              borderRadius="xl"
            >
              <img
                src="./icons/white/addcircle.svg"
                alt="addcircle.svg"
                width={32}
              />{" "}
              Add Stock
            </Button>
          </Flex>
        </Box>
      </Box>
      {/* #CONTENT DATA CREDIT AND STOCK END  */}
    </Flex>
  );
};

export default DataCreditStock;
