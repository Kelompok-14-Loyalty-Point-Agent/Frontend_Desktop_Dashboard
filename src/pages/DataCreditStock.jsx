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
import { useState } from "react";

const DataCreditStock = () => {
  const navigate = useNavigate();
  const [isAddCreditAmount, setIsAddCreditAmount] = useState(false);
  const [isAddInternetDatasAmount, setIsAddInternetDatasAmount] =
    useState(false);
  const [DataTableCredit, setDataTableCredit] = useState([
    {
      no: 1,
      credit: 20_000,
      price: 21_000,
      quantity: 50,
    },
    {
      no: 2,
      credit: 25_000,
      price: 27_000,
      quantity: 40,
    },
    {
      no: 3,
      credit: 50_000,
      price: 52_000,
      quantity: 40,
    },
  ]);
  const [DataTableInternet, setDataTableInternet] = useState([
    {
      no: 1,
      data: "1 GB",
      price: 20_000,
      quantity: 500,
    },
    {
      no: 2,
      data: "2 GB",
      price: 40_000,
      quantity: 250,
    },
  ]);

  const handleStatusAddCredit = () => setIsAddCreditAmount(!isAddCreditAmount);
  const handleStatusAddInternet = () =>
    setIsAddInternetDatasAmount(!isAddInternetDatasAmount);

  const TableRowCredit = ({ row }) => {
    return (
      <Tr>
        <Td textAlign="center">{row.no}</Td>
        <Td textAlign="center">{row.credit}</Td>
        <Td textAlign="center">{row.price}</Td>
        <Td textAlign="center">{row.quantity}</Td>
        <Td>
          <Flex gap={5} justify="center">
            <Link to="#edit">
              <Img src="./icons/stockPage/edit2.svg" width={22} />
            </Link>
            <Link to="#delete">
              <Img src="./icons/stockPage/trash.svg" width={22} />
            </Link>
          </Flex>
        </Td>
      </Tr>
    );
  };

  const TableRowInternetDatas = ({ row }) => {
    return (
      <Tr>
        <Td textAlign="center">{row.no}</Td>
        <Td textAlign="center">{row.data}</Td>
        <Td textAlign="center">{row.price}</Td>
        <Td textAlign="center">{row.quantity}</Td>
        <Td>
          <Flex gap={5} justify="center">
            <Link to="#edit">
              <Img src="./icons/stockPage/edit2.svg" width={22} />
            </Link>
            <Link to="#delete">
              <Img src="./icons/stockPage/trash.svg" width={22} />
            </Link>
          </Flex>
        </Td>
      </Tr>
    );
  };

  return (
    <Flex height="100vh">
      <Sidebar />
      <Box px={10} flex={"1"}>
        <NavbarDashboard />
        <Box mx={14} mt={7}>
          <Text fontSize={32} fontFamily="heading" fontWeight={700} mb={10}>
            Stock Pulsa / Data
          </Text>
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
                      {DataTableCredit.map((data) => (
                        <TableRowCredit row={data} key={data.no} />
                      ))}
                      {isAddCreditAmount ? (
                        <Tr>
                          <Td>
                            <Center>{DataTableCredit.length + 1}</Center>
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
                      {DataTableInternet.map((internetDatas) => (
                        <TableRowInternetDatas
                          key={internetDatas.no}
                          row={internetDatas}
                        />
                      ))}
                      {isAddInternetDatasAmount ? (
                        <Tr>
                          <Td>
                            <Center>{DataTableInternet.length + 1}</Center>
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
                                onClick={handleStatusAddInternet}
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
