import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { getDataAdmin } from "../config/redux/getDataAdmin/getDataAdminThunk";
import { useDataAdminSelector } from "../config/redux/getDataAdmin/getDataAdminSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Sidebar() {
  useEffect(() => {
    dispatch(getDataAdmin());
  }, []);
  const dataAdmin = useDataAdminSelector();
  const dispatch = useDispatch();
  console.log(dataAdmin);

  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    return location.pathname;
  };

  const navigateToStocks = () => navigate("/stocks");

  const currentPage = getCurrentPage();

  return (
    <Flex>
      <Box w={330} bg="#171717" h="100%">
        <Center mt={"80px"} color="white">
          <Image
            src="Ellipse78.svg"
            alt="profile"
            borderRadius="full"
            boxSize="156px"
          />
        </Center>
        <Center mt={4} color="white">
          <Text fontSize={32} fontFamily="heading" fontWeight={600}>
            {dataAdmin?.name}
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
        {currentPage === "/stocks/add" ? (
          <Center mt={24}>
            <Button
              w={125}
              fontFamily="poppins"
              fontWeight={"400"}
              colorScheme="facebook"
              onClick={navigateToStocks}
            >
              Back
            </Button>
          </Center>
        ) : (
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
                  src={`../icons/${
                    currentPage === "/dashboard" ? "black" : "white"
                  }/dashboard-active.svg`}
                  alt=""
                />
                <Link to="/dashboard">
                  <Text
                    ml={2}
                    color={
                      currentPage === "/dashboard" ? "black" : "purple.200"
                    }
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
                  src={`../icons/${
                    currentPage === "/customers" ? "black" : "white"
                  }/people.svg`}
                  alt="people.svg"
                  width={26}
                />
                <Link to="/customers">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color={
                      currentPage === "/customers" ? "black" : "purple.200"
                    }
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
                  src={`../icons/${
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
              bg={
                currentPage === "/stocks" || currentPage === "/stocks/add"
                  ? "white"
                  : null
              }
            >
              <Flex alignItems="center" gap={2}>
                <img
                  src={`../icons/${
                    currentPage === "/stocks" || currentPage === "/stocks/add"
                      ? "black"
                      : "white"
                  }/moneys.svg`}
                  alt="people.svg"
                  width={26}
                />
                <Link to="/stocks">
                  <Text
                    ml={2}
                    fontWeight={700}
                    color={
                      currentPage === "/stocks" || currentPage === "/stocks/add"
                        ? "black"
                        : "purple.200"
                    }
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
                  src={`../icons/${
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
        )}
      </Box>
    </Flex>
  );
}

export default Sidebar;
