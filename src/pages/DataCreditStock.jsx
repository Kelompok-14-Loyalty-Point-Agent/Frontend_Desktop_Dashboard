import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  formatDate,
  formatNumber,
  formatNumberPrice,
} from "../utils/HelperMethod";

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
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
} from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import CustomSelectEvenOdd from "../components/CustomSelectEvenOdd";

import { useStockDetailSelector } from "../config/redux/getStockDetail/getStockDetailSelector";
import { getStockDetail } from "../config/redux/getStockDetail/getStockDetailThunk";
import { addStockDetail } from "../config/redux/addStockDetail/addStockDetailThunk";
import { useAddStockDetailType } from "../config/redux/addStockDetail/addStockDetailSelector";
import { deleteStockDetail } from "../config/redux/deleteStockDetail/deleteStockDetailThunk";
import { useDeleteStockType } from "../config/redux/deleteStockDetail/deleteStockDetailSelector";
import { updateStock } from "../config/redux/updateStockDetail/updateStockDetailThunk";
import { useUpdateStockType } from "../config/redux/updateStockDetail/updateStockDetailSelector";
import { useStockCreditSelector } from "../config/redux/getStockCredit/getStockCreditSelector";
import { useStockInternetDataSelector } from "../config/redux/getStockInternetData/getStockInternetDataSelector";

const DataCreditStock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stockCredit = useStockCreditSelector();
  const stockInternetData = useStockInternetDataSelector();
  const stockDetail = useStockDetailSelector();
  const updateDetailStockType = useUpdateStockType();
  const addStockDetailType = useAddStockDetailType();
  const deleteStockDetailType = useDeleteStockType();

  const [isAddCredit, setIsAddCredit] = useState(false);
  const [isAddInternetDatas, setIsAddInternetDatas] = useState(false);
  const [isEditStock, setIsEditStock] = useState(false);
  const stockDetailDatas = stockDetail?.data;

  useEffect(() => {
    dispatch(getStockDetail());

    if (addStockDetailType === "addStockDetail/addStock/fulfilled") {
      dispatch(getStockDetail());
    }

    if (deleteStockDetailType === "deleteStockDetail/deleteStock/fulfilled") {
      dispatch(getStockDetail());
    }

    if (updateDetailStockType === "updateStockDetail/updateData/fulfilled") {
      dispatch(getStockDetail());
    }
  }, [addStockDetailType, deleteStockDetailType, updateDetailStockType]);

  const handleStatusAddCredit = () => {
    setIsAddCredit(!isAddCredit);
  };

  const handleStatusAddInternet = () =>
    setIsAddInternetDatas(!isAddInternetDatas);

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
      stock: 0,
      price: 0,
      quantity: 0,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const { id_credit, stock, price, quantity } = values;

      const parsedStock = parseInt(stock);
      const parsedPrice = parseInt(price);
      const parsedQuantity = parseInt(quantity);

      const newFormValues = {
        stock_id: id_credit,
        stock: parsedStock,
        price: parsedPrice,
        quantity: parsedQuantity,
      };

      dispatch(addStockDetail(newFormValues));
      formikAddStockCredit.resetForm();
      setIsAddCredit(false);
    },
  });

  const formikAddStockInternet = useFormik({
    initialValues: {
      id: 0,
      id_internet_stock: formikAddStockCredit.values.id_data,
      stock: 0,
      price: 0,
      quantity: 0,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const { id_internet_stock, stock, price, quantity } = values;

      const formattedStock = parseInt(stock);
      const formattedPrice = parseInt(price);
      const formattedQuantity = parseInt(quantity);

      const newFormValues = {
        stock_id: id_internet_stock,
        stock: formattedStock,
        price: formattedPrice,
        quantity: formattedQuantity,
      };
      dispatch(addStockDetail(newFormValues));
      formikAddStockInternet.resetForm();
      setIsAddInternetDatas(false);
    },
  });

  const handleOpenEditCreditForm = (dataCreditOld) => {
    setIsEditStock(true);
    handleStatusAddCredit();

    formikAddStockCredit.setValues({
      id: dataCreditOld.id,
      stock_id: formikAddStockCredit.values.id_credit,
      stock: dataCreditOld.stock,
      price: dataCreditOld.price,
      quantity: dataCreditOld.quantity,
    });
  };

  const handleCloseEditCreditForm = () => {
    setIsEditStock(false);
    handleStatusAddCredit();
    formikAddStockCredit.resetForm();
  };

  const handleCloseEditInternet = () => {
    setIsEditStock(false);
    handleStatusAddInternet();
    formikAddStockInternet.resetForm();
  };

  const handleUpdateCreditStock = (dataCreditNew, event) => {
    event.preventDefault();

    const parsedStock = parseInt(dataCreditNew.stock);
    const parsedQuantity = parseInt(dataCreditNew.quantity);

    const updatedFormValues = {
      ...dataCreditNew,
      stock: parsedStock,
      quantity: parsedQuantity,
    };

    dispatch(updateStock(updatedFormValues));
    handleCloseEditCreditForm();
  };

  const handleEditOpenInternet = (internetDataOld) => {
    setIsEditStock(true);
    handleStatusAddInternet();

    formikAddStockInternet.setValues({
      id: internetDataOld.id,
      stock: internetDataOld.stock,
      quantity: internetDataOld.quantity,
      price: internetDataOld.price,
    });
  };

  const handleUpdateInternet = (dataInternetNew, event) => {
    event.preventDefault();
    const parsedPrice = parseInt(dataInternetNew.price);
    const parsedStock = parseInt(dataInternetNew.stock);
    const parsedQuantity = parseInt(dataInternetNew.quantity);
    const updatedValues = {
      id: dataInternetNew.id,
      price: parsedPrice,
      stock: parsedStock,
      quantity: parsedQuantity,
    };
    dispatch(updateStock(updatedValues));
    handleCloseEditInternet();
  };

  const filteredData = stockDetailDatas?.filter(
    (data) => data.stock_id === formikAddStockCredit.values.id_data
  );

  const filteredCredit = stockDetailDatas?.filter(
    (data) => data.stock_id === formikAddStockCredit.values.id_credit
  );

  const handleDeleteStock = (id) => {
    dispatch(deleteStockDetail(id));
  };

  const idInternetStock = formikAddStockCredit.values.id_data;
  const idCreditStock = formikAddStockCredit.values.id_credit;

  const filteredTotalStockCredit = stockCredit?.data
    ?.filter((data) => data.id === idCreditStock)
    .map((data) => data.stock)[0];

  const resultFilterTotalStockCredit =
    filteredTotalStockCredit === undefined ? 0 : filteredTotalStockCredit;

  const filteredTotalStockInternet = stockInternetData?.data
    ?.filter((data) => data.id === idInternetStock)
    .map((data) => data.stock)[0];

  const resultFilterTotalStockInternet =
    filteredTotalStockInternet === undefined ? 0 : filteredTotalStockInternet;

  const lastTopUpStockCreditFiltered = stockCredit?.data
    ?.filter((data) => data.id === idCreditStock)
    .map((data) => formatDate(new Date(data.last_top_up)))
    .sort((a, b) => b - a)[0];

  const lastTopUpStockInternetFiltered = stockInternetData?.data
    ?.filter((data) => data.id === idInternetStock)
    .map((data) => formatDate(new Date(data.last_top_up)))
    .sort((a, b) => b - a)[0];

  const finalLastTopUpStockCredit =
    lastTopUpStockCreditFiltered === undefined
      ? formatDate(new Date())
      : lastTopUpStockCreditFiltered;

  const finalLastTopUpStockInternet =
    lastTopUpStockInternetFiltered === undefined
      ? formatDate(new Date())
      : lastTopUpStockCreditFiltered;

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
              option={optionsProvider}
              isEdit={isEditStock}
              formik={formikAddStockCredit}
              id={formikAddStockCredit.values.stock_id}
              name="stock_id"
              componentId="stock_id"
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
                          <Td textAlign="center">{formatNumber(data.stock)}</Td>
                          <Td textAlign="center">
                            {formatNumberPrice(data.price)}
                          </Td>
                          <Td textAlign="center">{data.quantity}</Td>
                          <Td>
                            <Flex justify="center" gap={5}>
                              <IconButton
                                bgColor="transparent"
                                _hover={{ bgColor: "transparent" }}
                                icon={
                                  <Img
                                    src="../creditAndDataProvider/edit2.svg
                              "
                                  />
                                }
                                onClick={() => handleOpenEditCreditForm(data)}
                              />
                              <IconButton
                                bgColor="transparent"
                                _hover={{ bgColor: "transparent" }}
                                icon={
                                  <Img
                                    src="../creditAndDataProvider/trash.svg
                              "
                                  />
                                }
                                onClick={() => handleDeleteStock(data.id)}
                              />
                            </Flex>
                          </Td>
                        </Tr>
                      ))}
                      {isAddCredit ? (
                        <Tr>
                          <Td>
                            <Center>{filteredCredit.length + 1}</Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                onChange={formikAddStockCredit.handleChange}
                                value={formikAddStockCredit.values.id_credit}
                                id="input_id_credit"
                                name="id_credit"
                                display="none"
                              />
                              <Input
                                placeholder="Input credit"
                                id="input_value_stock_credit"
                                width={120}
                                bgColor="white"
                                color="black"
                                _placeholder={{ textAlign: "center" }}
                                onChange={formikAddStockCredit.handleChange}
                                value={formikAddStockCredit.values.stock}
                                name="stock"
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                id="input_price_credit"
                                placeholder="Input price"
                                name="price"
                                color="black"
                                value={formikAddStockCredit.values.price}
                                onChange={formikAddStockCredit.handleChange}
                                width={120}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                color="black"
                                id="input_quantity_credit"
                                placeholder="Input quantity"
                                name="quantity"
                                onChange={formikAddStockCredit.handleChange}
                                value={formikAddStockCredit.values.quantity}
                                width={140}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Flex justify="center" gap={5} flexDir="column">
                              <Button
                                colorScheme="green"
                                type="button"
                                id="button_addOrEdit_credit"
                                onClick={
                                  isEditStock
                                    ? (event) =>
                                        handleUpdateCreditStock(
                                          formikAddStockCredit.values,
                                          event
                                        )
                                    : formikAddStockCredit.handleSubmit
                                }
                              >
                                {isEditStock ? "Update Data" : "Save"}
                              </Button>
                              <Button
                                colorScheme="red"
                                id="button_close_addOrEdit_credit"
                                onClick={
                                  isEditStock
                                    ? handleCloseEditCreditForm
                                    : handleStatusAddCredit
                                }
                              >
                                {isEditStock ? "Cancel Edit" : "Cancel"}
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
                            id="button_add_credit"
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
                <Flex justify="center" gap={48} mt={12} mb={5}>
                  <Box display="flex" alignItems="center" gap={5}>
                    <Heading color="teal.500" fontSize={24}>
                      Stock Credit :
                    </Heading>
                    <Heading fontSize={22}>
                      {formatNumber(resultFilterTotalStockCredit)}
                    </Heading>
                  </Box>
                  <Box display="flex" alignItems="center" gap={5}>
                    <Heading color="teal.500" fontSize={24}>
                      Last Topup
                    </Heading>
                    <Heading fontSize={22}>{finalLastTopUpStockCredit}</Heading>
                  </Box>
                </Flex>
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
                          <Td textAlign="center">{data.stock} GB</Td>
                          <Td textAlign="center">
                            {formatNumberPrice(data.price)}
                          </Td>
                          <Td textAlign="center">{data.quantity}</Td>
                          <Td>
                            <Flex justify="center" gap={5}>
                              <IconButton
                                bgColor="transparent"
                                id="button_setIsEditStatus_internet"
                                _hover={{ bgColor: "transparent" }}
                                icon={
                                  <Img
                                    src="../creditAndDataProvider/edit2.svg
                              "
                                  />
                                }
                                onClick={() => handleEditOpenInternet(data)}
                              />
                              <IconButton
                                id="button_deleteStock_data"
                                bgColor="transparent"
                                _hover={{ bgColor: "transparent" }}
                                icon={
                                  <Img
                                    src="../creditAndDataProvider/trash.svg
                              "
                                  />
                                }
                                onClick={() => handleDeleteStock(data.id)}
                              />
                            </Flex>
                          </Td>
                        </Tr>
                      ))}
                      {isAddInternetDatas ? (
                        <Tr>
                          <Td>
                            <Center>{filteredData.length + 1}</Center>
                          </Td>
                          <Td>
                            <Input
                              onChange={formikAddStockInternet.handleChange}
                              value={formikAddStockCredit.values.id_data}
                              name="id_internet_stock"
                              id="input_idStock_internet"
                              display="none"
                            />
                            <Center>
                              <Input
                                placeholder="Input data"
                                id="input_stockValue_internet"
                                value={formikAddStockInternet.values.stock}
                                onChange={formikAddStockInternet.handleChange}
                                name="stock"
                                color="black"
                                width={120}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                id="input_priceStock_internet"
                                placeholder="Input price"
                                value={formikAddStockInternet.values.price}
                                onChange={formikAddStockInternet.handleChange}
                                name="price"
                                color="black"
                                width={120}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Center>
                              <Input
                                id="input_quantityValue_internet"
                                placeholder="Input quantity"
                                value={formikAddStockInternet.values.quantity}
                                onChange={formikAddStockInternet.handleChange}
                                name="quantity"
                                color="black"
                                width={140}
                                bgColor="white"
                                _placeholder={{ textAlign: "center" }}
                              />
                            </Center>
                          </Td>
                          <Td>
                            <Flex justify="center" gap={5} flexDir="column">
                              <Button
                                id="button_setIsEditState_internet"
                                colorScheme="green"
                                type="button"
                                onClick={
                                  isEditStock
                                    ? (event) =>
                                        handleUpdateInternet(
                                          formikAddStockInternet.values,
                                          event
                                        )
                                    : formikAddStockInternet.handleSubmit
                                }
                              >
                                {isEditStock ? "Update Data" : "Save"}
                              </Button>
                              <Button
                                id="button_deleteStock_internet"
                                colorScheme="red"
                                onClick={
                                  isEditStock
                                    ? handleCloseEditInternet
                                    : handleStatusAddInternet
                                }
                              >
                                {isEditStock ? "Cancel Edit" : "Close"}
                              </Button>
                            </Flex>
                          </Td>
                        </Tr>
                      ) : null}
                      <Tr>
                        <Td textAlign="center">
                          <IconButton
                            id="button_addStockDetail_internet"
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
                  <Flex justify="center" gap={48} mt={12} mb={5}>
                    <Box display="flex" alignItems="center" gap={5}>
                      <Heading color="teal.500" fontSize={24}>
                        Stock Data :
                      </Heading>
                      <Heading fontSize={24}>
                        {resultFilterTotalStockInternet} GB
                      </Heading>
                    </Box>
                    <Box display="flex" alignItems="center" gap={5}>
                      <Heading color="teal.500" fontSize={24}>
                        Last Topup
                      </Heading>
                      <Heading fontSize={24}>
                        {finalLastTopUpStockInternet}
                      </Heading>
                    </Box>
                  </Flex>
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
