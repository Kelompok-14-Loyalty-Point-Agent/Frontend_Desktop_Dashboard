import {
  Box,
  Button,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
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

  const handleAddCreditAmount = () => {
    const newCreditAmountData = {
      no: DataTableCredit.length + 1,
      credit: 0,
      price: 0,
      quantity: 0,
    };

    setIsAddCreditAmount(true);
    setDataTableCredit([...DataTableCredit, newCreditAmountData]);
  };

  const TableRowCredit = ({ row }) => {
    return (
      <Tr>
        <Td textAlign="center">{row.no}</Td>
        <Td textAlign="center">{row.credit}</Td>
        <Td textAlign="center">{row.price}</Td>
        <Td textAlign="center">{row.quantity}</Td>
        <Td>
          {row.no < DataTableCredit.length + 1 && isAddCreditAmount ? (
            <Flex gap={5} justify="center">
              <Button colorScheme="green">Save</Button>
              <Button
                onClick={() => setIsAddCreditAmount(false)}
                colorScheme="red"
              >
                Cancel
              </Button>
            </Flex>
          ) : (
            <Flex gap={5} justify="center">
              <Link to="#edit">
                <Img src="./icons/stockPage/edit2.svg" width={22} />
              </Link>
              <Link to="#delete">
                <Img src="./icons/stockPage/trash.svg" width={22} />
              </Link>
            </Flex>
          )}
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
                      <Tr>
                        <Td textAlign="center">
                          <IconButton
                            onClick={handleAddCreditAmount}
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
                        <Th color="white">Provider</Th>
                        <Th color="white">Stock Data</Th>
                        <Th color="white">Price</Th>
                        <Th color="white">Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontWeight={700} fontFamily="heading">
                      <Tr>
                        <Td>
                          <Img src="./providerDummy/provider (2).png" />
                        </Td>
                        <Td>1GB - 150GB</Td>
                        <Td>25k - 250k</Td>
                        <Td>
                          <Flex gap={5}>
                            <Link to="#edit">
                              <Img
                                src="./icons/stockPage/edit2.svg"
                                width={22}
                              />
                            </Link>
                            <Link to="#delete">
                              <Img
                                src="./icons/stockPage/trash.svg"
                                width={22}
                              />
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Img src="./providerDummy/provider (3).png" />
                        </Td>
                        <Td>1GB - 100GB</Td>
                        <Td>10k - 90k</Td>
                        <Td>
                          <Flex gap={5}>
                            <Link to="#edit">
                              <Img
                                src="./icons/stockPage/edit2.svg"
                                width={22}
                              />
                            </Link>
                            <Link to="#delete">
                              <Img
                                src="./icons/stockPage/trash.svg"
                                width={22}
                              />
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Img src="./providerDummy/provider (4).png" />
                        </Td>
                        <Td>1GB - 100GB</Td>
                        <Td>15k - 120k</Td>
                        <Td>
                          <Flex gap={5}>
                            <Link to="#edit">
                              <Img
                                src="./icons/stockPage/edit2.svg"
                                width={22}
                              />
                            </Link>
                            <Link to="#delete">
                              <Img
                                src="./icons/stockPage/trash.svg"
                                width={22}
                              />
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Img src="./providerDummy/provider (1).png" />
                        </Td>
                        <Td>1GB - 120GB</Td>
                        <Td>5k - 150k</Td>
                        <Td>
                          <Flex gap={5}>
                            <Link to="#edit">
                              <Img
                                src="./icons/stockPage/edit2.svg"
                                width={22}
                              />
                            </Link>
                            <Link to="#delete">
                              <Img
                                src="./icons/stockPage/trash.svg"
                                width={22}
                              />
                            </Link>
                          </Flex>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
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
        </Box>
      </Box>
      {/* #CONTENT DATA CREDIT AND STOCK END  */}
    </Flex>
  );
};

export default DataCreditStock;
