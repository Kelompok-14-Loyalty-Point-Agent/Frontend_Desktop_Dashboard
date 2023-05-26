import { Link, useLocation } from "react-router-dom";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

function Sidebar() {
  const location = useLocation();

  const getCurrentPage = () => {
    return location.pathname;
  };

  const currentPage = getCurrentPage();

  return (
    <Flex>
      <Box w={330} bg="#171717" h="full">
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
          <Box
            borderLeftRadius="7px"
            ml="36px"
            pl={3}
            py={2}
            bg={currentPage === "/dashboard" ? "white" : null}
          >
            <Flex alignItems="center" gap={2}>
              <img
                src={`./icons/${
                  currentPage === "/dashboard" ? "black" : "white"
                }/dashboard-active.svg`}
                alt=""
              />
              <Link to="/dashboard">
                <Text
                  ml={2}
                  color={currentPage === "/dashboard" ? "black" : "purple.200"}
                  fontFamily="heading"
                  fontWeight={700}
                  fontSize={20}
                >
                  Dashboard
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box
            borderLeftRadius="7px"
            ml="36px"
            pl={3}
            py={2}
            bg={currentPage === "/customers" ? "white" : null}
          >
            <Flex alignItems="center" gap={2}>
              <img
                src={`./icons/${
                  currentPage === "/customers" ? "black" : "white"
                }/people.svg`}
                alt="people.svg"
                width={26}
              />
              <Link to="/customers">
                <Text
                  ml={2}
                  fontWeight={700}
                  color={currentPage === "/customers" ? "black" : "purple.200"}
                  fontFamily="heading"
                  fontSize={20}
                >
                  Customer Data
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box
            borderLeftRadius="7px"
            ml="36px"
            pl={3}
            py={2}
            bg={currentPage === "/transactions" ? "white" : null}
          >
            <Flex alignItems="center" gap={2}>
              <img
                src={`./icons/${
                  currentPage === "/transactions" ? "black" : "white"
                }/receiptitem.svg`}
                alt="receiptitem.svg"
                width={26}
              />
              <Link to="/transactions">
                <Text
                  ml={2}
                  fontWeight={700}
                  color={
                    currentPage === "/transactions" ? "black" : "purple.200"
                  }
                  fontFamily="heading"
                  fontSize={20}
                >
                  Customer Transaction
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box
            borderLeftRadius="7px"
            ml="36px"
            pl={3}
            py={2}
            bg={currentPage === "/stocks" ? "white" : null}
          >
            <Flex alignItems="center" gap={2}>
              <img
                src={`./icons/${
                  currentPage === "/stocks" ? "black" : "white"
                }/moneys.svg`}
                alt="people.svg"
                width={26}
              />
              <Link to="/stocks">
                <Text
                  ml={2}
                  fontWeight={700}
                  color={currentPage === "/stocks" ? "black" : "purple.200"}
                  fontFamily="heading"
                  fontSize={20}
                >
                  Stock Credit / Data
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box
            borderLeftRadius="7px"
            ml="36px"
            pl={3}
            py={2}
            bg={currentPage === "/cashout" ? "white" : null}
          >
            <Flex alignItems="center" gap={2}>
              <img
                src={`./icons/${
                  currentPage === "/cashout" ? "black" : "white"
                }/emptywallet.svg`}
                alt="people.svg"
                width={26}
              />
              <Link to="/cashout">
                <Text
                  ml={2}
                  fontWeight={700}
                  color={currentPage === "/cashout" ? "black" : "purple.200"}
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
    </Flex>
  );
}

export default Sidebar;
