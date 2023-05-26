import {
  Box,
  Flex,
  Img,
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
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";

const DataCreditStock = () => {
  return (
    <Flex height="100vh">
      {/* #SIDEBAR DASHBOARD START  */}
      <Sidebar />
      {/* #SIDEBAR DASHBOARD END  */}
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
                  <Table>
                    <Thead>
                      <Tr bgColor="teal">
                        <Th color="white">Provider</Th>
                        <Th color="white">Stock Credit</Th>
                        <Th color="white">Price</Th>
                        <Th color="white">Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontWeight={700} fontFamily="heading">
                      <Tr>
                        <Td>
                          <Img src="./providerDummy/provider (2).png" />
                        </Td>
                        <Td>9.000.000</Td>
                        <Td>15k - 250k</Td>
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
                        <Td>11.000.000</Td>
                        <Td>10k - 150k</Td>
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
                        <Td>8.000.000</Td>
                        <Td>10k - 150k</Td>
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
                        <Td>5.000.000</Td>
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
              <TabPanel bg="black" color="white" mt={5} borderRadius={12} p={6}>
                <TableContainer>
                  <Table>
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
        </Box>
      </Box>
    </Flex>
  );
};

export default DataCreditStock;
