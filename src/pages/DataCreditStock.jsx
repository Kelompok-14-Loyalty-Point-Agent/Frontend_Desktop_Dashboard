import {
  Box,
  Button,
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
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DataCreditStock = () => {
  return (
    <Flex height="100vh">
      {/* #SIDEBAR DASHBOARD START  */}
      <Box w={420} bg="#171717" h={1024}>
        <Center mt={"80px"} color="white">
          {" "}
          <img src="./Ellipse78.svg" alt="" />
        </Center>
        <Center mt={4} color="white">
          <Text fontSize={32} fontFamily="heading" fontWeight={600}>
            Andrew
          </Text>
        </Center>
        <Center
          mt={4}
          color="purple.200"
          fontSize={20}
          fontFamily="heading"
          fontWeight={700}
        >
          <p>Welcome back!</p>
        </Center>
        <Center color="purple.100" fontSize={16}>
          <p>Admin</p>
        </Center>
        <Flex flexDirection="column" mt={20} gap={5}>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img src="./icons/white/dashboard-active.svg" alt="" />
              <Link to="/dashboard">
                <Text
                  ml={2}
                  color="purple.200"
                  fontFamily="heading"
                  fontWeight={700}
                  fontSize={20}
                >
                  Dashboard
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img src="./icons/white/people.svg" alt="people.svg" width={26} />
              <Link to="/customers">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="purple.200"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Customer Data
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img
                src="./icons/white/receiptitem.svg"
                alt="people.svg"
                width={26}
              />
              <Link to="/transactions">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="purple.200"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Customer Transaction
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2} bg="white">
            <Flex alignItems="center" gap={2}>
              <img src="./icons/black/moneys.svg" alt="people.svg" width={26} />
              <Link to="/stocks">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="black"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Stock Credit / Data
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box borderLeftRadius="7px" ml="36px" pl={3} py={2}>
            <Flex alignItems="center" gap={2}>
              <img
                src="./icons/white/emptywallet.svg"
                alt="people.svg"
                width={26}
              />
              <Link to="/dashboardhome">
                <Text
                  ml={2}
                  fontWeight={700}
                  color="purple.200"
                  fontFamily="heading"
                  fontSize={20}
                >
                  Stock Cashout
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* #SIDEBAR DASHBOARD END  */}
      <Box px={10} pt={10} flex={"1"}>
        <Flex gap={5} justifyContent="end" mb={4}>
          <Button
            variant="outline"
            colorScheme="blue.700"
            color="blue.700"
            fontFamily="heading"
            width={133}
          >
            Profile
          </Button>
          <Button
            variant="outline"
            colorScheme="red.700"
            color="red.700"
            fontFamily="heading"
            px={25}
          >
            Sign Out
          </Button>
        </Flex>
        <Text fontSize={32} fontFamily="heading" fontWeight={700} ml={10}>
          Stock Pulsa / Data
        </Text>
        <Box ml={10} mt={7}>
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
